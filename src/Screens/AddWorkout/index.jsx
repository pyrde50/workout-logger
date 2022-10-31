import React, { useState } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';
import moment from 'moment';

const AddWorkout = () => {
  const [lines, setLines] = useState([
    { name: 'aaaaa', reps: 0, amount: 0, weight: 0, date: moment() },
  ]);
  const [workouts, setWorkouts] = useState([{ id: 0, value: 'bench' }]);
  return (
    <NavigationContainer>
      <NewWorkout lines={lines} setLines={setLines} workouts={workouts} />
    </NavigationContainer>
  );
};

export default AddWorkout;
