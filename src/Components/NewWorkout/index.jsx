import React from 'react';
import CustomTextField from '../TextField';
import { Button } from '..';
import './styles.css';

const NewWorkout = ({ lines, setLines }) => {
  const changeData = (index, value) => {
    const line = lines[index];
    const newLine = {
      ...line,
      ...value,
    };
    setLines(
      lines.map((item, i) => {
        if (index !== i) {
          return item;
        } else {
          return newLine;
        }
      }),
    );
  };
  return (
    <div style={{ width: '100%' }}>
      <h2>Add new Workout</h2>
      {lines.map((item, index) => (
        <div className="AddWorkoutBackgroundContainer" key={index}>
          <div className="WorkoutInput">
            <h4>Workout</h4>
            <CustomTextField
              width={'85%'}
              value={item.name}
              onChange={(value) => changeData(index, { name: value })}
            />
          </div>
          <div className="WorkoutInput">
            <h4>Reps</h4>
            <CustomTextField
              width={'85%'}
              value={item.reps}
              onChange={(value) => changeData(index, { reps: value })}
            />
          </div>
          <div className="WorkoutInput">
            <h4>Amount</h4>
            <CustomTextField
              width={'85%'}
              value={item.amount}
              onChange={(value) => changeData(index, { amount: value })}
            />
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
                width={'85%'}
                value={item.weight}
                onChange={(value) => changeData(index, { weight: value })}
              />
              KG
            </div>
          </div>
          <div className="WorkoutInput">
            <h4>Date</h4>
            <CustomTextField
              width={'85%'}
              value={item.date}
              onChange={(value) => changeData(index, { date: value })}
            />
          </div>
          {index === 0 ? (
            <div className="WorkoutInput">
              <Button text={'SUMBIT'} width={'100%'} height={'40%'} />
              <div style={{ height: 10 }} />
              <Button
                text={'ADD NEW LINE'}
                width={'100%'}
                height={'40%'}
                onClick={() =>
                  setLines(
                    lines.concat({
                      name: '',
                      reps: 0,
                      amount: 0,
                      weight: 0,
                      date: new Date(),
                    }),
                  )
                }
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default NewWorkout;
