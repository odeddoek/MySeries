import React, {PropTypes} from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodesTable = ({episodes, watchedAction}) => {
  return (
      <div>
        {episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} watchedAction={watchedAction} />)}
      </div>
  );
};

EpisodesTable.propTypes = {
  episodes: PropTypes.array.isRequired,
  watchedAction : PropTypes.func.isRequired,
};

export default EpisodesTable;
