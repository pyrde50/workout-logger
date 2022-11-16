import React from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';
import WorkoutInput from '../WorkoutInput';

const NewWorkout = ({ lines, setLines, workouts, defaultWorkout }) => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%' }}>
      <h2>{t('addWorkout')}</h2>
      {lines.map((item, index) => (
        <WorkoutInput
          key={index}
          index={index}
          item={item}
          workouts={workouts}
          setLines={setLines}
          lines={lines}
          defaultWorkout={defaultWorkout}
        />
      ))}
    </div>
  );
};

export default NewWorkout;
