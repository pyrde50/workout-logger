import React, { useState, useEffect } from 'react';
import { get } from '../../api/helpers';
import { NavigationContainer, WorkoutBackground } from '../../Components';
import { useTranslation } from 'react-i18next';
import Loader from '../../Components/Loader';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../reducers/msgReducer';
import { getWorkouts } from '../../services/workoutService';
import Session from '../../Components/Session';

const PastWorkouts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await getWorkouts();
        setSessions(data.sessions);
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
      <div style={{ width: '100%' }}>
        <h1>{t('history')}</h1>
        {loading ? (
          <Loader width={200} height={200} />
        ) : (
          sessions.map((item, index) => (
            <Session data={item} key={index} defaultLarge={true} />
          ))
        )}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
