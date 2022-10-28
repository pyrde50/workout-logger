import React, { useState } from 'react';
import CustomTextField from '../TextField';
import './styles.css';
import { useTranslation } from 'react-i18next';

const WorkoutBackground = ({ data, defaultLarge }) => {
  const [showLarge, setShowLarge] = useState(defaultLarge ? true : false);
  const {t} = useTranslation();
  const dateString = [
    data.date.getDate(),
    data.date.getMonth() + 1,
    data.date.getFullYear(),
  ].join('.');
  if (showLarge || defaultLarge) {
    return (
      <div
        className="WorkoutBackgroundContainer"
        onClick={() => (defaultLarge ? null : setShowLarge(false))}
      >
        <div className="WorkoutInput">
          <h4>{t('workout')}</h4>
          <CustomTextField disabled={true} value={data.workout} width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>{t('reps')}</h4>
          <CustomTextField disabled={true} value={data.reps} width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>{t('sets')}</h4>
          <CustomTextField disabled={true} value={data.amount} width={'85%'} />
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
              disabled={true}
              value={data.weight}
              width={'85%'}
            />
            {data.unit}
          </div>
        </div>
        <div className="WorkoutInput">
          <h4>{t('date')}</h4>
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
        <h4 style={{ width: '60%' }}>{t('workout')}: {data.workout}</h4>
        <h4>{dateString}</h4>
      </div>
    );
  }
};

export default WorkoutBackground;
