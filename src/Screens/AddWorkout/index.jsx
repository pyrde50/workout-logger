import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '../../Components';
import NewWorkout from '../../Components/NewWorkout';
import moment from 'moment';
import { get } from '../../api/helpers';
import ReadyMadeWorkouts from '../../Components/ReadyMadeWorkouts';
import Loader from '../../Components/Loader';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from '../../reducers/msgReducer';

const AddWorkout = () => {
  const msg = useSelector((state) => state.msg.msg);
  const defaultWorkout = [
    { exercise: -1, reps: 0, sets: 0, weight: 0, date: moment() },
  ];
  const defaultReadyMadeWorkout = [];
  const dispatch = useDispatch();
  const [lines, setLines] = useState(defaultWorkout);
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
        dispatch(
          showMessage({
            msg: 'Failed to load data from server. Please try again later.',
            type: 'Error',
          }),
        );
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [msg?.data]);
  return (
    <NavigationContainer>
      <div className="AddWorkoutContainer">
        <NewWorkout
          lines={lines}
          setLines={setLines}
          workouts={workouts}
          defaultWorkout={defaultWorkout}
          readyWorkouts={readyWorkouts}
        />
        {!loading ? (
          <ReadyMadeWorkouts
            lines={readyLines}
            setLines={setReadyLines}
            workouts={workouts}
            readyWorkouts={readyWorkouts}
            excercise_names={workouts}
            defaultReadyMadeWorkout={defaultReadyMadeWorkout}
          />
        ) : (
          <Loader width={200} height={200} />
        )}
      </div>
    </NavigationContainer>
  );
};

export default AddWorkout;
