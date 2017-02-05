import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";
import * as mongoose from "mongoose";
import * as graphqlHTTP from "express-graphql";
import { schema } from "./graphql/schema";
import * as cors from "cors";
var session = require('express-session');

class Server {
    app: any;
    constructor() {
        this.initializeDatabase();
        this.app = express();
        this.config();
        this.grahhql();
    }

    static bootstrap() {
        return new Server();
    }

    config() {
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
        this.app.use(session({ secret: 'secret', cookie: { maxAge: 30000 } }));
    }

    initializeDatabase() {
        var connectionString = "mongodb://127.0.0.1:27017/MySerias";
        mongoose.connect(connectionString);
    }

    grahhql() {
        this.app.use("/graphql", graphqlHTTP({
            schema: schema,
            graphiql: true
        }));
    }
}

var server = Server.bootstrap();
module.exports = server.app;
