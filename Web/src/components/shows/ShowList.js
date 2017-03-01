import React, {PropTypes} from 'react';
import ShowListItem from './ShowListItem';

const ShowList = ({shows, actionText, action}) => {
  return (
      <div className="columns is-multiline">
        {shows.map(show => <ShowListItem key={show.id} show={show} actionText={actionText} action={action}/>)}
      </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ShowList;
