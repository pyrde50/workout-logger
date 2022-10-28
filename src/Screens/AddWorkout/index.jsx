import React, { useState } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';

const AddWorkout = () => {
  const [lines, setLines] = useState([
    { name: 'aaaaa', reps: 0, amount: 0, weight: 0, date: new Date() },
  ]);
  return (
    <NavigationContainer>
      <NewWorkout lines={lines} setLines={setLines} />
    </NavigationContainer>
  );
};

export default AddWorkout;
