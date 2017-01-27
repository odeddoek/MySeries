import React, {PropTypes} from 'react';
import ShowListRow from './ShowListRow';

const ShowList = ({shows}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {shows.map(show => <ShowListRow key={show.id} show={show}/>)}
      </tbody>
    </table>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default ShowList;
