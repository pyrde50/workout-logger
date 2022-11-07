import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
  Button,
  WorkoutBackground,
} from '../../Components';
import './styles.css';
import { get } from '../../api/helpers';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';

const Main = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await get('exercises');
      setExercises(data);
      setLoading(false);
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
          <Loader />
        ) : (
          exercises.map((item, index) => (
            <WorkoutBackground data={item} key={index} />
          ))
        )}
      </div>
    </NavigationContainer>
  );
};

export default Main;
