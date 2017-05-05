import React, {PropTypes} from 'react';
import EpisodeListItem from './EpisodeListItem';
import {sanitize} from 'dompurify';
import Moment from 'react-moment';
import watchedImage from '../../images/watched.png';

const EpisodesTable = ({episode, watchedAction}) => {

  const cleanSummary = sanitize(episode.summary, {ALLOWED_TAGS: []});

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img src={episode.image} alt="Image"/>
        </figure>
      </div>
      <div className="media-content">
        {episode.watched && <img className="watched" src={watchedImage}/>}
        <strong>{episode.name}
          (Season: {episode.season}
          - Episode: {episode.number}) {!episode.watched && <a onClick={() => watchedAction(episode.season, episode.number)}>
            Mark as watched</a>}
        </strong>
        <small className='is-pulled-right'><Moment format="MMMM Do YYYY, h:mm:ss a" date={episode.airstamp}/></small>
        <br/>
        <div className="content">{cleanSummary}</div>
      </div>
    </article>
  );
};

EpisodesTable.propTypes = {
  episode: PropTypes.object.isRequired,
  watchedAction: PropTypes.func.isRequired
};

export default EpisodesTable;
