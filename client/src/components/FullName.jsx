import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FullName = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    fetchFullName();
  }, []);

  const fetchFullName = async () => {
    try {
      const first = await axios.get('http://localhost:8000/firstname');
      const middle = await axios.get('http://localhost:8000/middlename');
      const last = await axios.get('http://localhost:8000/lastname');
      setFirstname(first.data.firstname);
      setMiddlename(middle.data.middlename);
      setLastname(last.data.lastname);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        {firstname} {middlename} {lastname}
      </h1>
    </div>
  );
};

export default FullName;
