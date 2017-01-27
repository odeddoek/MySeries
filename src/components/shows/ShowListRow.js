import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ShowListRow = ({show}) => {
  return (
    <tr>
      <td>{show.id}</td>
      <td><Link to={'/show/' + show.id}>{show.title}</Link></td>
    </tr>
  );
};

ShowListRow.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowListRow;
