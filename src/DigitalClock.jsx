import { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // every 1000 millisecond(every second) we will update the state of time with the new current date and time
      setTime(new Date());
    }, 1000);

    // add a clean up function, if we ever unmount our digital clock we dont want it to continue running
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // We will also need a function to format time

  function formatTime() {
    // we need to get hours, minutes and seconds of out time state variable
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // the meridium am/pm
    const meridium = hours >= 12 ? 'PM' : 'AM';

    // Converting from military time
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds)} ${meridium}`;
  }

  // Fixing the leading 0 of time
  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
