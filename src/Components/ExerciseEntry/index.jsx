import React from 'react';
import CustomTextField from '../TextField';
import './styles.css';
import { useTranslation } from 'react-i18next';
const ExerciseEntry = ({ data }) => {
  const { t } = useTranslation();
  // All parameters that not needed to show

  const ignoreList = ['id', '_id', '__v'];

  return (
    <div className="ExercisesFlexBox">
      {Object.entries(data).map((pair) => {
        const key = pair[0];
        const value = pair[1];

        if (!ignoreList.includes(key)) {
          return (
            <div key={key} className="ExerciseInputEntry">
              <h4 className="InputHeader">{t(key)}</h4>
              <CustomTextField disabled={true} value={value} width={'85%'} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ExerciseEntry;
