import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {

  const featuredEvenets = getFeaturedEvents();

  return (
    <div>
      
      <EventList items = {featuredEvenets}/>
    </div>
  );
}

export default HomePage;
