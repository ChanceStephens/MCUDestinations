import React from 'react';
import { Link } from 'react-router-dom';
import mcuDestinations from '../data/mcuDestinations.json'; // assuming you're using JSON now
import styles from './DestinationScroller.module.css';

function DestinationScroller() {
  return (
    <div className={styles.scroller}>
      {Object.values(mcuDestinations).map((dest) => (
        <Link to={`/${dest.id}`} key={dest.id} className={styles.card}>
          <img
            src={dest.media.heroImage || '/assets/other/placeholder.webp'} // fallback if empty
            alt={`${dest.name} preview`}
            className={styles.image}
          />
          <h3>{dest.name}</h3>
          <p>{dest.backgroundStory}</p>
        </Link>
      ))}
    </div>
  );
}

export default DestinationScroller;
