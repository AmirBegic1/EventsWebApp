import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {

  return (
    <div>
      
      <EventList items = {props.events}/>
    </div>
  );
}

export async function getStaticProps(){
  const featuredEvenets = await getFeaturedEvents();

  return {
    props:{
      events: featuredEvenets
    }
  }
}

export default HomePage;
