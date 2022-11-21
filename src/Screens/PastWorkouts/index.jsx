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
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
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
    setCurrentPage(0);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await getWorkouts(currentPage, dateRange);
        setPages(data.pages);
        setCurrentPage(Number(data.page));
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
  }, [dateRange, currentPage]);

  return (
    <NavigationContainer>
      <div style={{ width: '100%' }}>
        <div className="HistoryHeader">
          <h1>{t('latest')}</h1>
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
        <div>
          {loading ? (
            <Loader width={200} height={200} />
          ) : (
            <div>
              {sessions.map((item, index) => (
                <Session key={index} data={item} />
              ))}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '80%',
                  paddingLeft: 10,
                }}
              >
                <h3
                  onClick={() =>
                    currentPage === 0
                      ? setCurrentPage(pages.length)
                      : setCurrentPage(Number(currentPage) - 1)
                  }
                >
                  Back
                </h3>
                <h3>Page {`${currentPage + 1}/${pages}`}</h3>
                <h3
                  onClick={() =>
                    currentPage === pages - 1
                      ? setCurrentPage(0)
                      : setCurrentPage(Number(currentPage) + 1)
                  }
                >
                  Forward
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </NavigationContainer>
  );
};

export default PastWorkouts;
