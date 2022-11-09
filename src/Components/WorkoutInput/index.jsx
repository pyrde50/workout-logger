import React from 'react';
import CustomTextField from '../TextField';
import { Button } from '..';
import DatePicker from '../DatePicker';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@mui/icons-material/Cancel';
import { CustomDropdownPicker } from '..';

const WorkoutInput = ({ index, item, workouts, setLines, lines }) => {
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
          width={'85%'}
          index={index}
        />
        {/*<CustomTextField
              width={'85%'}
              value={item.name}
              onChange={(value) => changeData(index, { name: value })}
      />*/}
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
      {index === 0 ? (
        <div className="WorkoutInput">
          <h4>{t('date')}</h4>
          <DatePicker
            value={item.date}
            onChange={(value) => changeData(index, { date: value })}
          />
        </div>
      ) : null}
      {index === 0 ? (
        <div className="WorkoutInput">
          <Button text={t('submit')} width={'100%'} height={'40%'} />
          <div style={{ height: 10 }} />
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
        </div>
      ) : null}
      {index !== 0 ? (
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
