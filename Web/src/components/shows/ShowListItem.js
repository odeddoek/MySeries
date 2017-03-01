import React, {PropTypes} from 'react';

const ShowListItem = ({show, isFollowed, onClick}) => {
  return (
    <div className="column is-2">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {show.name}
          </p>
        </header>
        <div className="card-content is-paddingless">
          <div className="content">
            <figure>
              <img src={show.image}/>
            </figure>
          </div>
        </div>
        <footer className="card-footer has-text-centered">
          {!isFollowed && <a className="card-footer-item" onClick={() => onClick(show.id)}>Follow</a>}
        </footer>
      </div>
    </div>
  );
};

ShowListItem.propTypes = {
  show: PropTypes.object.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ShowListItem;
