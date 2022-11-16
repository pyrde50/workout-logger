import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkoutInput from '../WorkoutInput';
import { CustomDropdownPicker } from '../../Components';
import moment from 'moment';

const ReadyMadeWorkouts = ({
  workouts,
  lines,
  setLines,
  readyWorkouts,
  defaultReadyMadeWorkout,
}) => {
  const { t } = useTranslation();
  const [workoutSelected, setWorkoutSelected] = useState('');

  const selectWorkoutPlan = (index, value) => {
    setWorkoutSelected(value);
  };
  useEffect(() => {
    if (workoutSelected && workoutSelected) {
      const found = readyWorkouts.find((item) => item.id === workoutSelected);
      if (found) {
        const exercises = found.exercises;

        setLines(
          exercises.map((item) => {
            return {
              exercise: item,
              reps: 0,
              amount: 0,
              weight: 0,
              date: moment(),
            };
          }),
        );
      }
    }
  }, [workoutSelected]);

  return (
    <div style={{ width: '100%' }}>
      <h2>{t('addReadyWorkout')}</h2>
      {lines.length > 0 ? (
        lines.map((item, index) => (
          <WorkoutInput
            key={index}
            index={index}
            item={item}
            workouts={workouts}
            setLines={setLines}
            lines={lines}
            setWorkoutSelected={setWorkoutSelected}
            defaultWorkout={defaultReadyMadeWorkout}
          />
        ))
      ) : (
        <CustomDropdownPicker
          value={workoutSelected}
          setValue={selectWorkoutPlan}
          items={readyWorkouts.map((item) => {
            return { id: item.id, value: item.name };
          })}
          index={0}
          backgroundColor={'#FFFFFF'}
          width={'25ch'}
        />
      )}
    </div>
  );
};

export default ReadyMadeWorkouts;
