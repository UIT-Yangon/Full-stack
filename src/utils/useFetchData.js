import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const useFetchData = (url, reduxAction = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(data)

        // Dispatch to Redux if a reduxAction is provided
        if (reduxAction) {
          dispatch(reduxAction(response.data));
        }

        // Save data to sessionStorage
        sessionStorage.setItem(url, JSON.stringify(response.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch, reduxAction]);

  return { data, loading, error };
};

export default useFetchData;
