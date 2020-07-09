import React, {useCallback, useState} from 'react';
import {withStyles, WithStylesProps} from 'react-with-styles';

import Pic1 from './Pic1.png';
import Pic2 from './Pic2.png';
import Pic3 from './Pic3.png';
import Pic4 from './Pic4.png';
import Poster from './video_poster.png';


const images = [Pic1, Pic2, Pic3, Pic4];
const MAX_PAGES = 4;
const VIDEO_URL = 'http://s3.jp-tok.cloud-object-storage.appdomain.cloud/miaomiaomiao/eastern_pacific.mp4';

function App({css, styles}: WithStylesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const onNavNext = useCallback(() => {
    if (currentPage < MAX_PAGES - 1) {
      console.log('onNavNext');
      setCurrentPage(currentPage + 1);
    }
  }
, [currentPage, setCurrentPage]);
    const onNavPrev = useCallback(() => {
    if (currentPage  > 0) {
      console.log('onNavPrev');
      setCurrentPage(currentPage - 1);
    }
  }
, [currentPage, setCurrentPage]);

  return (
    <div {...css(styles.container)}>
      <div {...css(styles.videoContainer)}>
        <img {...css(styles.image)} src={images[0]} alt="" />
        <video
          {...css(styles.video)}
          poster={Poster}
          controls
          playsInline
          aria-label="Video"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      <img {...css(styles.image)} src={images[1]} alt="" />
      <img {...css(styles.image)} src={images[2]} alt="" />
      <img {...css(styles.image)} src={images[3]} alt="" />
      {/*<Waypoint bottomOffset={'10px'} onEnter={onNavNext}/>*/}
    </div>
  );
}

export default withStyles(() => ({
  container: {
    width: '100%',
    position: 'relative',
  },
  videoContainer: {
    postion: 'relative',
  },
  video: {
    position: 'absolute',
    width: '40%',
    top: '10vh',
    left: '55%',
    transform: 'translateX(-50%)',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',
  },
  image: {
    width: '100%',
    height: '110%',
  }
}))(App);
