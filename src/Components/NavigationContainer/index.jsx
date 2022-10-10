import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReorderIcon from '@mui/icons-material/Reorder';
// import { Link } from 'react-router-dom';

const NavigationContainer = ({ children }) => {
  const { width } = useWindowDimensions();
  const [sideNavigationVisible, setSideNavigationVisible] = useState(true);
  const loggedIn = true; // TODO add login state

  console.log(width, 'vittu23');
  useEffect(() => {
    if (width > 1200 && loggedIn) {
      setSideNavigationVisible(true);
    } else {
      setSideNavigationVisible(false);
    }
  }, [width]);

  return (
    <div className="Container">
      <div className="TopBar">
        <ReorderIcon />
        <>Workout logger</>
        <PersonIcon />
      </div>
      <div className="MainContainer">
        {sideNavigationVisible ? (
          <div className="SideNavigation">
            <div className="NavigationItem">
              <HomeIcon /> Home
            </div>
            <div className="NavigationItem">
              <FitnessCenterIcon /> Add Workout
            </div>
            <div className="NavigationItem">
              <BarChartIcon /> Past Workouts
            </div>
            <div className="NavigationItem">
              <SettingsIcon /> Settings
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default NavigationContainer;
