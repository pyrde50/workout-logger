import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';
import moment from 'moment';
import { get } from '../../api/helpers';
import ReadyMadeWorkouts from '../../Components/ReadyMadeWorkouts';
import Loader from '../../Components/Loader';

const AddWorkout = () => {
  const [lines, setLines] = useState([
    { exercise: -1, reps: 0, amount: 0, weight: 0, date: moment() },
  ]);
  const [readyLines, setReadyLines] = useState([]);
  const [readyWorkouts, setReadyWorkouts] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await get('exercise_names/');
        const finalRes = res.map((item) => {
          return { id: item.id, value: item.exercise };
        });
        setWorkouts(finalRes);
        const resWorkouts = await get('workouts/');
        setReadyWorkouts(resWorkouts);
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
        <NewWorkout lines={lines} setLines={setLines} workouts={workouts} />
        {!loading ? (
          <ReadyMadeWorkouts
            lines={readyLines}
            setLines={setReadyLines}
            workouts={workouts}
            readyWorkouts={readyWorkouts}
            excercise_names={workouts}
          />
        ) : (
          <Loader width={200} height={200} />
        )}
      </div>
    </NavigationContainer>
  );
};

export default AddWorkout;
