import React, {Component} from 'react';
import ShowDetailsTable from './ShowDetailsTable';
import ShowDetailsPanel from './ShowDetailsPanel';

export default class ShowPage extends Component {

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <div className="image is-2by2">
                  <img src="http://cdn-s3.allmusic.com/release-covers/500/0004/436/0004436489.jpg"/></div>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">Wayward Pines</h1>
                <p className="title is-3 has-text-muted">2015-</p>
                <hr/>
                A Secret Service agent goes to Wayward Pines, Idaho, in search of two federal agents who have gone missing in the bucolic town. He soon learns that he may never get out of Wayward Pines alive.
                <br/><br/>
                <ShowDetailsTable/>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ShowDetailsPanel/>
          </div>
        </section>
      </div>
    );
  }
}
