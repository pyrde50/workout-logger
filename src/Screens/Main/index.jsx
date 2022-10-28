import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
  Button,
  WorkoutBackground,
} from '../../Components';
import './styles.css';
import { get } from '../../api/helpers';

const Main = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await get('exercises');
      setExercises(data);
    };
    fetch();
  }, []);
  return (
    <NavigationContainer>
      <div className="Container">
        <Button
          text={'Add Workout'}
          width={300}
          height={50}
          onClick={() => null}
        />
        <h1>History</h1>
        {exercises.map((item, index) => (
          <WorkoutBackground data={item} key={index} />
        ))}
      </div>
    </NavigationContainer>
  );
};

export default Main;
