import React from 'react';
import Pane from './../common/tabs/Pane';
import Tabs from './../common/tabs/Tabs';
import EpisodeTab from './EpisodeTab';
import CastTab from './CastTab';
import ReviewsTab from './ReviewsTab';

const ShowDetailsPanel = () => {
  return (
    <div>
      <Tabs>
        <Pane label="Episodes">
          <EpisodeTab />
        </Pane>
        <Pane label="Cast">
          <CastTab />
        </Pane>
        <Pane label="Reviews">
          <ReviewsTab />
        </Pane>
      </Tabs>
    </div>
  );
};

export default ShowDetailsPanel;
