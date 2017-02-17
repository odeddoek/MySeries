import React, {PropTypes} from 'react';
import ShowListItem from './ShowListItem';

const ShowList = ({shows}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowListItem key={show.id} show={show}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default ShowList;
