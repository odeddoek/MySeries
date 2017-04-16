import React from 'react';

const ShowDetailsTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td><strong>Airs on:</strong></td>
          <td>Fox</td>
        </tr>
        <tr>
          <td><strong>Status:</strong></td>
          <td>To Be Determined</td>
        </tr>
        <tr>
          <td><strong>Scheduled:</strong></td>
          <td>Wednesdays at 22:00</td>
        </tr>
        <tr>
          <td><strong>Genres:</strong></td>
          <td>Drama | Science-Fiction | Mystery</td>
        </tr>
        <tr>
          <td><strong>Episodes ordered:</strong></td>
          <td>25 episodes</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShowDetailsTable;
