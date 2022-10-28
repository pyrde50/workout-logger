import React from 'react';
import CustomTextField from '../TextField';
import { Button } from '..';
import './styles.css';
import { useTranslation } from 'react-i18next';

const NewWorkout = () => {
  const {t} = useTranslation();
  return (
    <div style={{ width: '100%' }}>
      <h2>{t("addWorkout")}</h2>
      <div className="WorkoutBackgroundContainer">
        <div className="WorkoutInput">
          <h4>{t("workout")}</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>{t("reps")}</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>{t("sets")}</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <h4>{t("weight")}</h4>
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
          <h4>{t("date")}</h4>
          <CustomTextField width={'85%'} />
        </div>
        <div className="WorkoutInput">
          <Button text={t("submit")} width={'100%'} height={'40%'} />
          <div style={{ height: 10 }} />
          <Button text={t("addNewLine")} width={'100%'} height={'40%'} />
        </div>
      </div>
    </div>
  );
};

export default NewWorkout;
