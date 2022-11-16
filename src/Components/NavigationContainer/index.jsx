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
import Modal from 'react-modal';
import { logout } from '../../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { hideMessage, showMessage } from '../../reducers/msgReducer';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button';
import { addDefaultSession } from '../../services/workoutService';
import CustomTextField from '../TextField';

const NavigationContainer = ({ children }) => {
  const user = useSelector((state) => state.user);
  const msg = useSelector((state) => state.msg.msg);
  const [workoutName, setWorkoutName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [sideNavigationVisible, setSideNavigationVisible] = useState(true);
  const loggedIn = true; // TODO add login state
  const [isOpen, setIsOpen] = useState(false);
  console.log(msg);

  const addDefaultWorkout = async () => {
    setShowInput(true);
  };

  const submitDefaultWorkout = async () => {
    const exercises = msg.data.exercises.map((item) => item.id);
    const data = { name: workoutName, exercises: exercises };
    const res = await addDefaultSession(data);
    if (res) {
      dispatch(
        showMessage({ type: 'Success', msg: 'Base workout add successful' }),
      );
    }
  };

  useEffect(() => {
    if (width > 1200 && loggedIn) {
      setSideNavigationVisible(true);
    } else {
      setSideNavigationVisible(false);
    }
  }, [width]);

  return (
    <div className="Container">
      <Modal
        className="Modal"
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
      >
        <div
          className="ModalContent"
          onClick={() => {
            window.localStorage.removeItem('user');
            dispatch(logout());
          }}
        >
          {t('logOut')}
        </div>
      </Modal>
      <div className="TopBar">
        <ReorderIcon
          onClick={() => setSideNavigationVisible(!sideNavigationVisible)}
          sx={{ fontSize: 50 }}
        />
        <>Workout logger</>
        <div className="RightHeader">
          <h4>{user?.user?.username ? user?.user?.username : ''}</h4>
          <div className="UserIcon" onClick={() => setIsOpen(true)}>
            <PersonIcon sx={{ fontSize: 45 }} />
          </div>
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
                <HomeIcon /> {t('home')}
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/AddWorkout"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <FitnessCenterIcon /> {t('addWorkout')}
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/PastWorkouts"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <BarChartIcon /> {t('pastWorkouts')}
              </NavLink>
            </div>
            <div className="NavigationItem">
              <NavLink
                to="/Settings"
                className={({ isActive }) =>
                  isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
                }
              >
                <SettingsIcon /> {t('settings')}
              </NavLink>
            </div>
          </div>
        ) : null}
        <div
          className={
            sideNavigationVisible ? 'DataContainer' : 'DataContainerFull'
          }
        >
          {children}
        </div>
      </div>
      {showInput ? (
        <div className="msgSuccess">
          <div className="exit" onClick={() => dispatch(hideMessage())}>
            <CloseIcon />
          </div>
          <div className="msgButton">{'Enter workout name'}</div>
          <CustomTextField
            height={'80%'}
            value={workoutName}
            onChange={(value) => setWorkoutName(value)}
          />
          <Button
            text={'Submit'}
            width={'15%'}
            height={'80%'}
            onClick={() => submitDefaultWorkout()}
          />
        </div>
      ) : msg?.type === 'Error' ? (
        <div className="msgError">
          <div className="exit" onClick={() => dispatch(hideMessage())}>
            <CloseIcon />
          </div>
          <div className="msgText">{msg.msg}</div>
        </div>
      ) : msg?.type === 'Success' ? (
        <div className="msgSuccess">
          <div className="exit" onClick={() => dispatch(hideMessage())}>
            <CloseIcon />
          </div>
          <div className="msgText">{msg.msg}</div>
        </div>
      ) : msg?.type === 'SuccessWithButton' ? (
        <div className="msgSuccess">
          <div className="exit" onClick={() => dispatch(hideMessage())}>
            <CloseIcon />
          </div>
          <div className="msgButton">{msg.msg}</div>
          <Button
            text={'Add'}
            width={'15%'}
            height={'80%'}
            onClick={() => addDefaultWorkout()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default NavigationContainer;
