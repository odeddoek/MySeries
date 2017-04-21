import React, {PropTypes} from 'react';
import ShowCastItem from './ShowCastItem';

const ShowCastList = ({cast}) => {
  return (
    <div className="columns is-multiline">
      {cast.map(item => <ShowCastItem key={item.character.id} person={item.person} character={item.character}/>)}
    </div>
  );
};

ShowCastList.propTypes = {
  cast: PropTypes.array.isRequired
};

export default ShowCastList;
