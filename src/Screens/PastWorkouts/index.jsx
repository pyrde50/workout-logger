import React from 'react';
import { NavigationContainer, WorkoutBackground } from '../../Components';
import { useTranslation } from 'react-i18next';

const mockData = [
  {
    workout: 'Bench Press',
    reps: 10,
    amount: 5,
    weight: 100,
    unit: 'KG',
    date: new Date(),
  },
  {
    workout: 'Bench Press',
    reps: 10,
    amount: 5,
    weight: 100,
    unit: 'KG',
    date: new Date(),
  },
  {
    workout: 'Bench Press',
    reps: 10,
    amount: 5,
    weight: 100,
    unit: 'KG',
    date: new Date(),
  },
  {
    workout: 'Bench Press',
    reps: 10,
    amount: 5,
    weight: 100,
    unit: 'KG',
    date: new Date(),
  },
  {
    workout: 'Bench Press',
    reps: 10,
    amount: 5,
    weight: 100,
    unit: 'KG',
    date: new Date(),
  },
];

const PastWorkouts = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <div>
        <h1>{t('history')}</h1>
        {mockData.map((item, index) => (
          <WorkoutBackground data={item} key={index} defaultLarge={true} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
