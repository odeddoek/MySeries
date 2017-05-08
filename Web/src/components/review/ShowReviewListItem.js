import React, {PropTypes} from 'react';
import {sanitize} from 'dompurify';

const ShowReviewItem = ({reviewer, content}) => {

  const sanitizedContent = sanitize(content, {ALLOWED_TAGS: []});

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64"><img src="http://placehold.it/128x128"/></p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h2>{reviewer}</h2>
          {renderContent(sanitizedContent)}
        </div>
      </div>
    </article>
  );
};

function renderContent(content) {
  return (content.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  }))
}

ShowReviewItem.propTypes = {
  reviewer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default ShowReviewItem;
