import React from 'react';
import {
  NavigationContainer,
  Button,
  WorkoutBackground,
} from '../../Components';
import './styles.css';
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

const Main = () => {
  const {t} = useTranslation();
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
        {mockData.map((item, index) => (
          <WorkoutBackground data={item} key={index} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default Main;
