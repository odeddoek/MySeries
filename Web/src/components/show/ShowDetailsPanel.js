import React from 'react';

const ShowDetailsPanel = () => {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li className="is-active">
            <a>Episodes</a>
          </li>
          <li>
            <a>Cast</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
        </ul>
      </div>
      <div className="box">
        Secret Service agent Ethan Burke arrives in the bucolic town of Wayward Pines, ID, on a mission to find two missing federal agents. But instead of answers, Ethan's investigation only turns up more questions. What's wrong with Wayward Pines? Each step closer to the truth takes Ethan further from the life he knew, from the husband and father he was, until he must face the terrifying reality that he may never get out of Wayward Pines alive.
      </div>
    </div>
  );
};

export default ShowDetailsPanel;
