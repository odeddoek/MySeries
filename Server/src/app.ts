import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";
import * as mongoose from "mongoose";
import * as graphqlHTTP from "express-graphql";
import { schema } from "./graphql/schema";
import * as cors from "cors";
import * as session from 'express-session';

class Server {
    app: express.Express;

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
        var corsOptions = {
            origin: 'http://localhost:3001',
            credentials: true
        }
        this.app.use(cors(corsOptions));
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
        this.app.use(session({ secret: 'secret', cookie: { maxAge: 20 * 60 * 1000 } }));
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
