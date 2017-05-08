import React, {PropTypes} from 'react';
import ShowReviewListItem from './ShowReviewListItem';

const ShowReviewList = ({reviews}) => {
  return (
    <div>
      {reviews.map(item => <ShowReviewListItem key={item.user.username} reviewer={item.user.username} content={item.content}/>)}
    </div>
  );
};

ShowReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ShowReviewList;
