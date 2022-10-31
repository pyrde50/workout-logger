import React, { useState, useEffect } from 'react';
import { get } from '../../api/helpers';
import { NavigationContainer, WorkoutBackground } from '../../Components';
import { useTranslation } from 'react-i18next';

const PastWorkouts = () => {
  const [exercises, setExercises] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      const data = await get('exercises');
      setExercises(data);
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <div>
        <h1>{t('history')}</h1>
        {exercises.map((item, index) => (
          <WorkoutBackground data={item} key={index} defaultLarge={true} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
