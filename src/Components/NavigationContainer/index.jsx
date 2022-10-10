import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReorderIcon from '@mui/icons-material/Reorder';
import { NavLink } from 'react-router-dom';
// import theme from '../../colors';
// import { ThemeProvider } from '@mui/material';

const NavigationContainer = ({ children }) => {
  const { width } = useWindowDimensions();
  const [sideNavigationVisible, setSideNavigationVisible] = useState(true);
  const loggedIn = true; // TODO add login state

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
        <ReorderIcon
          onClick={() => setSideNavigationVisible(!sideNavigationVisible)}
          sx={{ fontSize: 50 }}
        />
        <>Workout logger</>
        <div className="UserIcon">
          <PersonIcon sx={{ fontSize: 45 }} />
        </div>
      </div>
      <div className="MainContainer">
        {sideNavigationVisible ? (
          <div className="SideNavigation">
            <div className="NavigationItem">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
                end
              >
                <HomeIcon /> Home
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/AddWorkout"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <FitnessCenterIcon /> Add Workout
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/PastWorkouts"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <BarChartIcon /> Past Workouts
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/Settings"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <SettingsIcon /> Settings
              </NavLink>
            </div>
          </div>
        ) : null}
        <div className="DataContainer">{children}</div>
      </div>
    </div>
  );
};

export default NavigationContainer;
