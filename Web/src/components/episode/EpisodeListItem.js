import React, {PropTypes} from 'react';
import EpisodeListItem from './EpisodeListItem';
import {sanitize} from 'dompurify';
import Moment from 'react-moment';

const EpisodesTable = ({episode}) => {

  const cleanSummary = sanitize(episode.summary, {ALLOWED_TAGS: []});

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img src={episode.image} alt="Image"/>
        </figure>

      </div>
      <div className="media-content">
        <strong>{episode.name} (Season: {episode.season} - Episode: {episode.number})</strong>
        <small className='is-pulled-right'><Moment format="MMMM Do YYYY, h:mm:ss a" date={episode.airstamp} /></small>
        <br/>
        <div className="content">{cleanSummary}</div>
      </div>
    </article>
  );
};

EpisodesTable.propTypes = {
  episode: PropTypes.object.isRequired
};

export default EpisodesTable;
