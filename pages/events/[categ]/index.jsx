import { CategEvent } from "../../../src/components/events/categEvent";

const EventsCategPage = ({ data, pageName }) => {
  return <CategEvent data={data} pageName={pageName} />;
};
export default EventsCategPage;

//`getStaticPaths` is used in dinamic routes pages to pre-render all the paths specified in it.
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
// fallback to false allows to return 404 error if path doesn't match.


// `getStaticPaths` requires using `getStaticProps`. The `context` parameter gets the parameters and the categories from our data.
export async function getStaticProps(context) {
  const id = context?.params.categ;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
