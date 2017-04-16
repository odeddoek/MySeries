import React, {PropTypes} from 'react';
import ShowDetailsTable from './ShowDetailsTable';
import ShowDetailsPanel from './ShowDetailsPanel';
import {sanitize} from 'dompurify';

const ShowPage = ({show}) => {

  const cleanSummary = sanitize(show.summary, {ALLOWED_TAGS: []});

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-5">
              <div className="image is-square">
                <img src={show.image}/></div>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">{show.name}</h1>
              <hr/> {cleanSummary}
              <br/><br/>
              <ShowDetailsTable show={show}/>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ShowDetailsPanel showId={show.id}/>
        </div>
      </section>
    </div>
  );
};

ShowPage.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowPage;
