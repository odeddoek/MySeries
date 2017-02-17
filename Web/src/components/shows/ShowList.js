import React, {PropTypes} from 'react';
import ShowListItem from './ShowListItem';

const ShowList = ({shows, following, followAction}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowListItem key={show.id} show={show} isFollowed={following} followAction={followAction}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  following: PropTypes.bool.isRequired,
  followAction: PropTypes.func.isRequired
};

export default ShowList;
