import { useEffect, useState } from "react";
import { fetchEvents, getFormattedDate } from "../utils/fetchEvents";
import EventCard from "../components/EventCard";

const Home = () => {
  const [eventsToday, setEventsToday] = useState([]);
  const [eventsTomorrow, setEventsTomorrow] = useState([]);
  const [eventsYesterday, setEventsYesterday] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      setEventsToday(await fetchEvents(getFormattedDate(0)));
      setEventsTomorrow(await fetchEvents(getFormattedDate(1)));
      setEventsYesterday(await fetchEvents(getFormattedDate(-1)));
    };

    loadEvents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold my-4">🎉 Today's Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsToday.map((event, index) => <EventCard key={index} event={event} />)}
      </div>
    </div>
  );
};

export default Home;
