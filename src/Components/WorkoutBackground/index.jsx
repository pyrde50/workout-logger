import React, { useState } from 'react';
import CustomTextField from '../TextField';
import './styles.css';

const WorkoutBackground = ({ data }) => {
  const [showLarge, setShowLarge] = useState(false);

  const dateString = [
    data.date.getDate(),
    data.date.getMonth() + 1,
    data.date.getFullYear(),
  ].join('.');
  if (showLarge) {
    return (
      <div
        className="WorkoutBackgroundContainer"
        onClick={() => setShowLarge(false)}
      >
        <div className="WorkoutInput">
          <h4>Workout</h4>
          <CustomTextField disabled={true} value={data.workout} width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>Reps</h4>
          <CustomTextField disabled={true} value={data.reps} width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>Amount</h4>
          <CustomTextField disabled={true} value={data.amount} width={'85%'} />
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
            <CustomTextField
              disabled={true}
              value={data.weight}
              width={'85%'}
            />
            {data.unit}
          </div>
        </div>
        <div className="WorkoutInput">
          <h4>Date</h4>
          <CustomTextField disabled={true} value={dateString} width={'85%'} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="WorkoutBackgroundContainerSmall"
        onClick={() => setShowLarge(true)}
      >
        <h4 style={{ width: '60%' }}>workout: {data.workout}</h4>
        <h4>{dateString}</h4>
      </div>
    );
  }
};

export default WorkoutBackground;
