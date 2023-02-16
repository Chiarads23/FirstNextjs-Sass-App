import { CategEvent } from "../../../src/components/events/categEvent";

const EventsCategPage = ({ data, pageName }) => {
  return <CategEvent data={data} pageName={pageName} />;
};
export default EventsCategPage;


export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        categ: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.categ;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
