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
import { getWorkouts } from '../../services/workoutService';

const Main = () => {
  const dispatch = useDispatch();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await getWorkouts(0, 'week');
        setSessions(data.sessions);
        setLoading(false);
      } catch (e) {
        console.log('Error: ', e);
        dispatch(
          showMessage({
            msg: t('loadError'),
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
        <h1>{t('latest')}</h1>
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
