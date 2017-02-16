import React, {PropTypes} from 'react';
import ShowListRow from './ShowListRow';

const ShowList = ({shows}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowListRow key={show.id} show={show}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default ShowList;
