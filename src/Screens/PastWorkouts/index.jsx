import React from 'react';
import { NavigationContainer, WorkoutBackground } from '../../Components';

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
  return (
    <NavigationContainer>
      <div>
        <h1>History</h1>
        {mockData.map((item, index) => (
          <WorkoutBackground data={item} key={index} defaultLarge={true} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
