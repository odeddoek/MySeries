import React, {PropTypes} from 'react';
import ShowPanel from './ShowPanel';

const ShowList = ({shows}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowPanel key={show} showId={show}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default ShowList;
