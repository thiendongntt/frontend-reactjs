import React from 'react';
import PropTypes from 'prop-types';
import AblumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'XOXO - JEON SOMI',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/1/e/a/61ea976dda251a992d0d5c10bec734f9.jpg',
    },
    {
      id: 2,
      name: 'Tree Talks',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/7/2/a/b72a7d2636533f5e4f270bbf47c9de84.jpg',
    },
    {
      id: 3,
      name: 'Cố Gắng Vô Hình (Single)',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/8/b/7/98b7ae545456a24f311505c9ba19db1a.jpg',
    },
    {
      id: 4,
      name: 'Vết Thương Tự Lành (Single)',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/0/a/b/10ab521ccba4054019e13a344bf47007.jpg',
    },
  ];
  return (
    <div>
      <AblumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
