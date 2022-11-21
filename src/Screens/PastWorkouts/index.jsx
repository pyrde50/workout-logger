import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '../../Components';
import { useTranslation } from 'react-i18next';
import Loader from '../../Components/Loader';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../reducers/msgReducer';
import { getWorkouts } from '../../services/workoutService';
import CustomDropdownPicker from '../../Components/DropdownPicker';
import Session from '../../Components/Session';
import './styles.css';

const PastWorkouts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [dateRange, setDateRange] = useState('');
  const { t } = useTranslation();

  const filters = [
    { id: 'week', value: 'week' },
    { id: 'month', value: 'month' },
    { id: 'last_month', value: 'last month' },
    { id: 'year', value: 'year' },
  ];

  const setNewDateRange = (index, value) => {
    setDateRange(value);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await getWorkouts(dateRange);
        setSessions(data.sessions);
      } catch (e) {
        console.log('Error: ', e);
        dispatch(
          showMessage({
            msg: 'Failed to load data from server. Please try again later.',
            type: 'Error',
          }),
        );
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [dateRange]);
  return (
    <NavigationContainer>
      <div style={{ width: '100%' }}>
        <div className="HistoryHeader">
          <h1>{t('history')}</h1>
          {/* ADD LANGUAGE SUPPORT HERE */}
          <div className="DateFilterContainer">
            <h4 className="DateFilterText">Choose date</h4>
            <CustomDropdownPicker
              items={filters}
              setValue={setNewDateRange}
              value={dateRange}
              width="85%"
              index={0}
              backgroundColor={'#FFFFFF'}
            />
          </div>
          <div></div>
        </div>
        {loading ? (
          <Loader width={200} height={200} />
        ) : (
          sessions.map((item, index) => (
            <Session data={item} key={index} defaultLarge={true} />
          ))
        )}
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
