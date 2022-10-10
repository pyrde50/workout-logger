import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';

const NavigationContainer = ({ children }) => {
  const { width } = useWindowDimensions();
  const [sideNavigationVisible, setSideNavigationVisible] = useState(true);
  const loggedIn = true; // TODO add login state

  useEffect(() => {
    if (width > 200 && loggedIn) {
      setSideNavigationVisible(true);
    } else {
      false;
    }
  }, [width]);

  return (
    <div className="Container">
      <div className="TopBar">
        <>Workout logger</>
        <>Iconi tähän</>
      </div>
      {sideNavigationVisible ? <div className="SideNavigation"></div> : null}
      {children}
    </div>
  );
};

export default NavigationContainer;
