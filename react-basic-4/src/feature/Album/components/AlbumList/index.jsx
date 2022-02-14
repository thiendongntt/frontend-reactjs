import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AblumList.propTypes = {
  albumList: PropTypes.array,
};

function AblumList({ albumList }) {
  return (
    <div>
      <ul className="album-list">
        {albumList.map((album) => (
          <li key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AblumList;
