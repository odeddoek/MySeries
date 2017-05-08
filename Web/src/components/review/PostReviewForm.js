import React, {PropTypes} from 'react';
import {sanitize} from 'dompurify';

const PostReviewForm = ({reviewContent, onContentChange, action}) => {

  return (
    <div>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64"><img src="http://placehold.it/128x128"/></p>
        </figure>
        <div className="media-content">
          <p className="control">
            <textarea className="textarea" name="content" placeholder="Add a review..." onChange={onContentChange}>
              {reviewContent}
            </textarea>
          </p>
          <a className="button is-info" onClick={action}>Post comment</a>
        </div>
      </article>
      <hr/>
    </div>
  );
};

function renderContent(content) {
  return (content.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  }))
}

PostReviewForm.propTypes = {
  reviewer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostReviewForm;
