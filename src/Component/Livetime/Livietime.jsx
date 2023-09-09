import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const LiveTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(currentDateTime, 'dd/MM/yyyy');
  const formattedTime = format(currentDateTime, 'HH:mm:ss');

  return (
    <div className='text-center text-sm'>
      <p className='font-bold'>{formattedDate}</p>
      <p className='font-bold'>{formattedTime}</p>
    </div>
  );
};

export default LiveTime;
