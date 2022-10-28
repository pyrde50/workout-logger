import React, { useState } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';
import moment from 'moment';

const AddWorkout = () => {
  const [lines, setLines] = useState([
    { name: 'aaaaa', reps: 0, amount: 0, weight: 0, date: moment() },
  ]);
  console.log(lines, 'vittu23');
  return (
    <NavigationContainer>
      <NewWorkout lines={lines} setLines={setLines} />
    </NavigationContainer>
  );
};

export default AddWorkout;
