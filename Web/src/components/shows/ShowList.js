import React, {PropTypes} from 'react';
import ShowListItem from './ShowListItem';

const ShowList = ({shows, following, onClick}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowListItem key={show.id} show={show} isFollowed={following} onClick={onClick}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  following: PropTypes.bool.isRequired,
  followAction: PropTypes.func.isRequired
};

export default ShowList;
