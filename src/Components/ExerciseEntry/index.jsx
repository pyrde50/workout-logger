import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CustomTextField from '../TextField';
import './styles.css';

const ExerciseEntry = ({ data }) => {
  const dimensions = useWindowDimensions();
  // All parameters that not needed to show
  const ignoreList = ['id', 'name', '_id', 'reps', '__v']; // add __v here when sets come

  const ignoreListSecondRow = ['id', 'name', '_id', 'weight', 'Exercise']; // add __v here when sets come
  return (
    <div
      className={
        dimensions.width < 850
          ? 'ExerciseEntryContainerColumn'
          : 'ExerciseEntryContainer'
      }
    >
      <div className="ExerciseEntryContainerRow">
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
      <div className="ExerciseEntryContainerRow">
        {Object.entries(data).map((pair) => {
          const key = pair[0];
          const value = pair[1];

          if (!ignoreListSecondRow.includes(key)) {
            return (
              <div key={key} className="ExerciseInputEntry">
                <h4 className="InputHeader">{key}</h4>
                <CustomTextField disabled={true} value={value} width={'85%'} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ExerciseEntry;
