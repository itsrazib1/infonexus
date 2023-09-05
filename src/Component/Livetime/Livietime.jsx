import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className='font-bold'>{format(currentTime, 'HH:mm:ss')}</p>
    </div>
  );
};

export default LiveTime;
