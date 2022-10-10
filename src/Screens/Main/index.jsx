import React from 'react';
import { NavigationContainer, Button } from '../../Components';
import './styles.css';

const Main = () => {
  return (
    <NavigationContainer>
      <div className="Container">
        <Button text={'Add Workout'} width={300} height={50} />
        <h1>History</h1>
      </div>
    </NavigationContainer>
  );
};

export default Main;
