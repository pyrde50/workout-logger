import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';
import moment from 'moment';
import { get } from '../../api/helpers';

const AddWorkout = () => {
  const [lines, setLines] = useState([
    { exercise: '', reps: 0, amount: 0, weight: 0, date: moment() },
  ]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await get('exercise_names/');
      const finalRes = res.map((item) => {
        return { id: item.id, value: item.exercise };
      });
      setWorkouts(finalRes);
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <NewWorkout lines={lines} setLines={setLines} workouts={workouts} />
    </NavigationContainer>
  );
};

export default AddWorkout;
