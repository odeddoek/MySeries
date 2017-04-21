import React, {PropTypes} from 'react';
import {sanitize} from 'dompurify';

const ShowCastItem = ({character, person}) => {

  const characterName = sanitize(character.name, {ALLOWED_TAGS: []});
  const personName = sanitize(person.name, {ALLOWED_TAGS: []});

  return (
    <div className="column is-3">
      <article className="media box">
        <div className="media-left">
          <figure className="image">
            <img className="cast-image" src={character.image} alt={characterName}/>
          </figure>
        </div>
        <div className="media-content">
          <p>
            <strong>{characterName}</strong><br/><br/>
            {personName}</p>
        </div>
      </article>
    </div>
  );
};

ShowCastItem.propTypes = {
  person: PropTypes.object.isRequired,
  character: PropTypes.object.isRequired
};

export default ShowCastItem;
