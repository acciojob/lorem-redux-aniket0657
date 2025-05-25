import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIpsum } from '../redux/actions';

const IpsumViewer = () => {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchIpsum());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default IpsumViewer;

