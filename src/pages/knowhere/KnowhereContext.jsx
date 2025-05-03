import React, { createContext, useContext } from 'react';

const KnowhereContext = createContext();

export const KnowhereProvider = ({ value, children }) => {
  return (
    <KnowhereContext.Provider value={value}>
      {children}
    </KnowhereContext.Provider>
  );
};

export const useKnowhere = () => useContext(KnowhereContext);
