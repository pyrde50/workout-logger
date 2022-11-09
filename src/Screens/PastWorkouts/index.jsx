import React, { useState, useEffect } from 'react';
import { get } from '../../api/helpers';
import { NavigationContainer, WorkoutBackground } from '../../Components';
import { useTranslation } from 'react-i18next';
import Loader from '../../Components/Loader';

const PastWorkouts = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await get('exercises');
        setExercises(data);
      } catch (e) {
        console.log('Error: ', e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <div>
        <h1>{t('history')}</h1>
        {loading ? (
          <Loader width={200} height={200} />
        ) : (
          exercises.map((item, index) => (
            <WorkoutBackground data={item} key={index} defaultLarge={true} />
          ))
        )}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
