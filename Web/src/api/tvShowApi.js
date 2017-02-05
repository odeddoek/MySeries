import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tvShows = [
  {
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  let maximumId = Math.max.apply(Math, tvShows.map((tvShow) => {
    return tvShow.id;
  }));
  return maximumId + 1;
};

class TvShowsApi {
  static getAllTvShows() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tvShows.map((tvShow) => {
          return tvShow.id;
        })));
      }, delay);
    });
  }

  static saveTvShow(tvShow) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTvShowTitleNameLength = 3;
        if (tvShow.title.length < minTvShowTitleNameLength) {
          reject(`Title must be at least ${minTvShowTitleNameLength} characters.`);
        }

        if (tvShow.id) {
          const existingtvShowIndex = tvShows.findIndex(a => a.id == tvShow.id);
          tvShows.splice(existingtvShowIndex, 1, tvShow);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new tvShows in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          tvShow.id = generateId(tvShow);
          tvShows.push(tvShow);
        }

        resolve(Object.assign({}, tvShow));
      }, delay);
    });
  }

  static deleteTvShow(tvShowId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTvShowToDelete = tvShows.findIndex(tvShow => {
          tvShow.id == tvShowId;
        });
        tvShows.splice(indexOfTvShowToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TvShowsApi;
