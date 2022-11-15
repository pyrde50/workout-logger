import React from 'react';
import CustomTextField from '../TextField';
import './styles.css';

const ExerciseEntry = ({ data }) => {
  // All parameters that not needed to show
  const ignoreList = ['id', '__v', 'name', '_id'];

  return (
    <div className="ExerciseEntryContainer">
      <div className="ExerciseInputEntry">
        <h4 className="InputHeader">Exercise</h4>
        <CustomTextField disabled={true} value={data.name} width={'85%'} />
      </div>

      {Object.entries(data).map((pair) => {
        const key = pair[0];
        const value = pair[1];

        if (!ignoreList.includes(key)) {
          return (
            <div key={key} className="ExerciseInputEntry">
              <h4 className="InputHeader">{key}</h4>
              <CustomTextField disabled={true} value={value} width={'85%'} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ExerciseEntry;
