import axios from "axios";
import dayjs from "dayjs";

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/events";   // Wikipedia API endpoint for events on this day

export const fetchEvents = async (date) => {
  try {
    const response = await axios.get(`${WIKI_API}/${date}`);
    return response.data.events || [];
  } catch (error) {
    console.error("Error fetching Wikipedia events:", error);
    return [];
  }
};

export const getFormattedDate = (offset = 0) => {
  return dayjs().add(offset, "day").format("MM/DD");
};
