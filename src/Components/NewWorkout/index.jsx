import React from 'react';
import CustomTextField from '../TextField';
import { Button } from '..';
import './styles.css';

const NewWorkout = () => {
  return (
    <div style={{ width: '100%' }}>
      <h2>Add new Workout</h2>
      <div className="WorkoutBackgroundContainer">
        <div className="WorkoutInput">
          <h4>Workout</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>Reps</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>Amount</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>Weight</h4>
          <div
            style={{
              'flex-direction': 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomTextField width={'85%'} />
            KG
          </div>
        </div>
        <div className="WorkoutInput">
          <h4>Date</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <Button text={'SUMBIT'} width={'100%'} height={'40%'} />
          <div style={{ height: 10 }} />
          <Button text={'ADD NEW LINE'} width={'100%'} height={'40%'} />
        </div>
      </div>
    </div>
  );
};

export default NewWorkout;
