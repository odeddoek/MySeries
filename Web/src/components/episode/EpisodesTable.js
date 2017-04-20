import React, {PropTypes} from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodesTable = ({episodes}) => {
  return (
      <div>
        {episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} />)}
      </div>
  );
};

EpisodesTable.propTypes = {
  episodes: PropTypes.array.isRequired
};

export default EpisodesTable;
