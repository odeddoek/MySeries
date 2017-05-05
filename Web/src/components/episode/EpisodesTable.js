import React, {PropTypes} from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodesTable = ({episodes, watchedAction, isAuthenticated}) => {
  return (
      <div>
        {episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} watchedAction={watchedAction} isAuthenticated={isAuthenticated} />)}
      </div>
  );
};

EpisodesTable.propTypes = {
  episodes: PropTypes.array.isRequired,
  watchedAction : PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default EpisodesTable;
