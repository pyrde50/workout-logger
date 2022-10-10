import React from 'react';
import {
  NavigationContainer,
  Button,
  WorkoutBackground,
} from '../../Components';
import './styles.css';

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
  return (
    <NavigationContainer>
      <div className="Container">
        <Button
          text={'Add Workout'}
          width={300}
          height={50}
          onClick={() => null}
        />
        <h1>History</h1>
        {mockData.map((item, index) => (
          <WorkoutBackground data={item} key={index} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default Main;
