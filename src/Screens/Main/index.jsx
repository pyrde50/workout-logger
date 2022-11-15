import React, { useState, useEffect } from 'react';
import { NavigationContainer, Button } from '../../Components';
import Session from '../../Components/Session';
import './styles.css';
import { get } from '../../api/helpers';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../reducers/msgReducer';

const Main = () => {
  const dispatch = useDispatch();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await get('workout_session/');
        setSessions(data);
        setLoading(false);
      } catch (e) {
        console.log('Error: ', e);
        dispatch(
          showMessage({
            msg: 'Failed to load data from server. Please try again later.',
            type: 'Error',
          }),
        );
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <div className="Container">
        <NavLink
          to="/AddWorkout"
          className={({ isActive }) =>
            isActive ? 'ActiveNavigationItem' : 'NonActiveNavigationItem'
          }
        >
          <Button
            text={t('addWorkout')}
            width={300}
            height={50}
            color={'#70C3FF'}
          />
        </NavLink>
        <h1>{t('history')}</h1>
        {loading ? (
          <Loader width={200} height={200} />
        ) : (
          sessions.map((item, index) => <Session key={index} data={item} />)
        )}
      </div>
    </NavigationContainer>
  );
};

export default Main;
