import { useState, useEffect } from "react";

const useElapsedTime = (orderTime: string) => {
  const [elapsedTime, setElapsedTime] = useState<string>("");

  useEffect(() => {
    const calculateElapsedTime = () => {
      const orderDate = new Date(orderTime);
      const now = new Date();
      const difference = now.getTime() - orderDate.getTime();

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setElapsedTime(`${hours}h ${minutes}m ${seconds}s`);
    };

    // Update every second
    const interval = setInterval(calculateElapsedTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [orderTime]);

  return elapsedTime;
};

export default useElapsedTime;
