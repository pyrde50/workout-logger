import React, { useState } from 'react';
import './styles.css';
import ExerciseEntry from '../ExerciseEntry';

const Session = ({ data, defaultLarge }) => {
  const [showLarge, setShowLarge] = useState(defaultLarge ? true : false);
  const date = new Date(data.date);
  const dateString = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join('.');

  if (showLarge || defaultLarge) {
    return (
      <div
        className="SessionContainerLarge"
        onClick={() => (defaultLarge ? null : setShowLarge(false))}
      >
        <div className="SessionContainerHeader">
          <h4>Workout</h4>
          <h4>{dateString}</h4>
        </div>

        {data.exercises.map((exercise, index) => {
          return <ExerciseEntry key={index} data={exercise} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="SessionContainerSmall" onClick={() => setShowLarge(true)}>
        <h4 className="SessionHeader">Workout</h4>
        <h4>{dateString}</h4>
      </div>
    );
  }
};

export default Session;
