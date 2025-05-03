import React from 'react';
import './KnowhereStyles.css';
import { KnowhereProvider } from './KnowhereContext';
import ExperienceCard from './components/ExperienceCard';
import DiningCard from './components/DiningCard';
import ShopItem from './components/ShopItem';

import knowhereData from '../../data/mcuDestinations.json'; // Adjust if your data file is structured differently

function KnowhereApp() {
  return (
    <KnowhereProvider value={knowhereData}>
      <div className="knowhere-app">
        <header className="knowhere-header">
          <h1>{knowhereData.name}</h1>
          <p>{knowhereData.backgroundStory}</p>
        </header>

        <section className="experiences">
          <h2>Experiences</h2>
          {knowhereData.experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </section>

        <section className="dining">
          <h2>Dining</h2>
          {knowhereData.dining.map((spot, index) => (
            <DiningCard key={index} {...spot} />
          ))}
        </section>

        <section className="shop">
          <h2>Souvenirs</h2>
          {knowhereData.shop.map((item, index) => (
            <ShopItem key={index} {...item} />
          ))}
        </section>
      </div>
    </KnowhereProvider>
  );
}

export default KnowhereApp;
