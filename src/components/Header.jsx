import { useEffect, useState } from "react";
import dayjs from "dayjs";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [time, setTime] = useState(dayjs().format("hh:mm:ss A"));   // Initialize time with current time

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📅 On This Day</h1>
        <p className="text-lg font-semibold">{dayjs().format("MMMM DD, YYYY")} | {time}</p>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
