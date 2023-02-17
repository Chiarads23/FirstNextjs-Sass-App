import { SingleEvent } from "../../../src/components/events/single-event";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { allEvents } = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        categ: path.city,
        idSingleEvent: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const idSingleEvent = context.params.idSingleEvent;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => idSingleEvent === ev.id);
  return {
    props: { data: eventData },
  };
}
