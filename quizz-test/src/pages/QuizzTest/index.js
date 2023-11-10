import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizzTest = () => {
  const params = useParams();

  useEffect(() => {
    const words = params.slug.split('-');
    const id = words.pop().split('.')[0];
    console.log('id: ', id);
  }, [params]);

  return <h1>QuizzTest</h1>;
};

export default QuizzTest;
