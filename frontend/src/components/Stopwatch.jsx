import { useEffect, useState } from 'react';

const Stopwatch = ({ isRunning }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval); // Cleanup
  }, [isRunning]);

  return (
    <div className="text-4xl font-bold text-primary">
      {new Date(time * 1000).toISOString().substring(14, 19)}
    </div>
  );
};

export default Stopwatch;