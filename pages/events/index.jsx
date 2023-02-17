import { AllEvents } from "../../src/components/events/event-page";

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};
export default EventsPage;


// getStaticProps allows to pre-render the page (static) at build time using the props returned by getStaticProps
// it's necessary to EXPORT it to be able to use the props
export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

