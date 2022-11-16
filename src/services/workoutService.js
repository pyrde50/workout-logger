import axios from 'axios';
const baseUrl = 'https://workout-logger-backend.onrender.com/api';

/**
 * Create the json of format:
 * {
 *  exercises: [
 *    {
 *      id: ID,
 *      name: name of exercise
 *      ...other params
 *    }
 *  ]
 * }
 */
export const toJSON = (exercises, workouts) => {
  const exerciseList = [];
  const date = exercises[0].date?._d.toJSON();

  // Change the format
  for (let entry of exercises) {
    if (Number.isInteger(entry.exercise)) {
      const newObject = {};
      delete Object.assign(newObject, entry, { ['id']: entry['exercise'] })[
        'exercise'
      ];
      delete newObject.date;

      //Exercise needs a name
      if (workouts[newObject.id]) {
        newObject.name = workouts[newObject.id].value;
        exerciseList.push(newObject);
      }
    }
  }

  return {
    date: date,
    exercises: exerciseList,
  };
};

export const addSession = async (data) => {
  const user = window.localStorage.getItem('user');
  const token = JSON.parse(user).token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(`${baseUrl}/workout_session`, data, config);

  if (response.status > 300) {
    return;
  } else {
    return response.data;
  }
};

export const addDefaultSession = async (data) => {
  const user = window.localStorage.getItem('user');
  const token = JSON.parse(user).token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(`${baseUrl}/workouts`, data, config);

  if (response.status > 300) {
    return;
  } else {
    return response.data;
  }
};

export const getWorkouts = async () => {
  const user = window.localStorage.getItem('user');
  const token = JSON.parse(user).token;
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const response = await axios.get(
    'https://workout-logger-backend.onrender.com/api/workout_session',
    config,
  );

  return response.data;
};
