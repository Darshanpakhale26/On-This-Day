import { motion } from "framer-motion";
import ShareButton from "./ShareButton";

const EventCard = ({ event }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-lg shadow-lg border dark:bg-gray-800 dark:text-white"
    >
      <h3 className="font-semibold text-lg">{event.text}</h3>
      <p className="text-gray-600">📆 Year: {event.year}</p>

      {/* Flex container for spacing */}
      <div className="flex items-center justify-between mt-4">
        {event.pages?.[0]?.content_urls?.desktop?.page && (
          <motion.a 
            href={event.pages[0].content_urls.desktop.page} 
            target="_blank"
            whileHover={{ scale: 1.1, color: "#2563eb" }} // Smooth hover effect
            className="text-blue-500 hover:underline"
          >
            🔗 Read More
          </motion.a>
        )}
        <ShareButton event={event} />
      </div>
    </motion.div>
  );
};

export default EventCard;
