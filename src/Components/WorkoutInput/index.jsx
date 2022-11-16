import React, { useState } from 'react';
import CustomTextField from '../TextField';
import { Button } from '..';
import DatePicker from '../DatePicker';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@mui/icons-material/Cancel';
import { CustomDropdownPicker } from '..';
import './styles.css';
import { toJSON, addSession } from '../../services/workoutService';
import Loader from '../Loader';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../reducers/msgReducer';

const WorkoutInput = ({
  index,
  item,
  workouts,
  setLines,
  lines,
  setWorkoutSelected,
  defaultWorkout,
  readyWorkouts,
  workoutSelected,
}) => {
  const dispatch = useDispatch();
  const [sendingReq, setSendingReq] = useState(false);
  const { t } = useTranslation();

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

  const changeDropdownValue = (index, value) => {
    const line = lines[index];
    const newLine = {
      ...line,
      ...{ exercise: value },
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

  const compareArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    } else {
      if (array1.map((item, index) => item === array2[index]).includes(false)) {
        return false;
      } else {
        return true;
      }
    }
  };

  // Submit the new workout
  const submitWorkout = async () => {
    try {
      setSendingReq(true);
      // Filter empty lines + give in right JSON format
      const data = toJSON(lines, workouts);
      //Send the data to the server
      const response = await addSession(data);
      if (response) {
        if (setWorkoutSelected) {
          setWorkoutSelected('');
          const workouts = data.exercises.map((item) => item.id).sort();
          const ready = readyWorkouts.map((item) => item.exercises.sort());
          if (ready.find((item) => compareArrays(workouts, item))) {
            dispatch(
              showMessage({
                msg: 'Uploading workout successful!',
                type: 'Success',
              }),
            );
          } else {
            dispatch(
              showMessage({
                msg: 'Uploading workout successful! Would you like to edit the previous base to match this workout?',
                type: 'SuccessWithButton',
                data: data,
                selected: workoutSelected,
              }),
            );
          }
        } else {
          const workouts = data.exercises.map((item) => item.id).sort();
          const ready = readyWorkouts.map((item) => item.exercises.sort());
          if (ready.find((item) => compareArrays(workouts, item))) {
            dispatch(
              showMessage({
                msg: 'Uploading workout successful!',
                type: 'Success',
              }),
            );
          } else {
            dispatch(
              showMessage({
                msg: 'Uploading workout successful! Would you like to add this workout as a base workout?',
                type: 'SuccessWithButton',
                data: data,
              }),
            );
          }
        }
        setLines(defaultWorkout);
      }
    } catch (e) {
      console.log('Error: ', e);
      dispatch(
        showMessage({
          type: 'Error',
          msg: 'Base workout addition failed, please try again later!',
        }),
      );
    } finally {
      setSendingReq(false);
    }
  };

  return (
    <div className="AddWorkoutBackgroundContainer" key={index}>
      <div className="WorkoutInput">
        <h4>{t('workout')}</h4>
        <CustomDropdownPicker
          items={workouts}
          setValue={changeDropdownValue}
          value={
            item?.exercise < 0 || item.exercise === undefined
              ? ''
              : workouts.find((workout) => workout.id === item?.exercise)?.id
          }
          width="85%"
          index={index}
        />
      </div>
      <div className="WorkoutInput">
        <h4>{t('reps')}</h4>
        <CustomTextField
          width={'85%'}
          value={item.reps}
          onChange={(value) => changeData(index, { reps: value })}
        />
      </div>
      <div className="WorkoutInput">
        <h4>{t('sets')}</h4>
        <CustomTextField
          width={'85%'}
          value={item.amount}
          onChange={(value) => changeData(index, { amount: value })}
        />
      </div>
      <div className="WorkoutInput">
        <h4>{t('weight')}</h4>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <CustomTextField
            width={'90%'}
            value={item.weight}
            onChange={(value) => changeData(index, { weight: value })}
          />
          KG
        </div>
      </div>
      {index === 0 ? (
        <div className="WorkoutInput">
          <h4>{t('date')}</h4>
          <div id="DatePickerContainer">
            <DatePicker
              value={item.date}
              onChange={(value) => changeData(index, { date: value })}
            />
          </div>
        </div>
      ) : null}
      {index === lines.length - 1 ? (
        <div className="WorkoutInput" id="AddWorkoutButtons">
          {sendingReq ? (
            <Button
              text={<Loader />}
              disabled={true}
              width={'100%'}
              height={'40%'}
              onClick={async () => await submitWorkout()}
            />
          ) : (
            <Button
              text={t('submit')}
              width={'100%'}
              height={'40%'}
              onClick={async () => await submitWorkout()}
            />
          )}
          <div style={{ height: 10 }} />
          {sendingReq ? (
            <Button
              text={t('addNewLine')}
              width={'100%'}
              height={'40%'}
              disabled={true}
              onClick={() =>
                setLines(
                  lines.concat({
                    exercise: '',
                    reps: 0,
                    amount: 0,
                    weight: 0,
                    date: new Date(),
                  }),
                )
              }
            />
          ) : (
            <Button
              text={t('addNewLine')}
              width={'100%'}
              height={'40%'}
              onClick={() =>
                setLines(
                  lines.concat({
                    exercise: '',
                    reps: 0,
                    amount: 0,
                    weight: 0,
                    date: new Date(),
                  }),
                )
              }
            />
          )}
        </div>
      ) : null}
      {workoutSelected || index !== 0 ? (
        <div className="Delete">
          <CancelIcon
            className="Icon"
            color={'error'}
            onClick={() =>
              setLines(
                lines.filter((item, i) => {
                  return i !== index;
                }),
              )
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default WorkoutInput;
