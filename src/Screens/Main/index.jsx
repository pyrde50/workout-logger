import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
  Button,
  WorkoutBackground,
} from '../../Components';
import './styles.css';
import { get } from '../../api/helpers';
import { useTranslation } from 'react-i18next';


const Main = () => {
  const [exercises, setExercises] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      const data = await get('exercises');
      setExercises(data);
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <div className="Container">
        <Button
          text={t('addWorkout')}
          width={300}
          height={50}
          onClick={() => null}
        />
        <h1>{t('history')}</h1>
        {exercises.map((item, index) => (
          <WorkoutBackground data={item} key={index} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default Main;
