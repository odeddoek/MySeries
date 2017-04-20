import React from 'react';
import Pane from './../common/tabs/Pane';
import Tabs from './../common/tabs/Tabs';
import EpisodeTab from './EpisodeTab';
import CastTab from './CastTab';
import ReviewsTab from './ReviewsTab';

const ShowDetailsPanel = ({showId}) => {
  return (
    <div>
      <Tabs>
        <Pane label="Episodes">
          <EpisodeTab showId={showId} />
        </Pane>
        <Pane label="Cast">
          <CastTab showId={showId} />
        </Pane>
        <Pane label="Reviews">
          <ReviewsTab showId={showId} />
        </Pane>
      </Tabs>
    </div>
  );
};

export default ShowDetailsPanel;
