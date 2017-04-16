import React from 'react';

const ShowDetailsTable = ({show}) => {

  return (
    <table className="table">
      <tbody>
        <tr>
          <td>
            <strong>Airs on:</strong>
          </td>
          <td>{show.network}</td>
        </tr>
        <tr>
          <td>
            <strong>Status:</strong>
          </td>
          <td>{show.status}</td>
        </tr>
        <tr>
          <td>
            <strong>Scheduled:</strong>
          </td>
          <td>Wednesdays at 22:00</td>
        </tr>
        <tr>
          <td>
            <strong>Genres:</strong>
          </td>
          <td>{show.genres.map((genre) => {return genre + ' '})}</td>
        </tr>
        <tr>
          <td>
            <strong>Episodes ordered:</strong>
          </td>
          <td>25 episodes</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShowDetailsTable;
