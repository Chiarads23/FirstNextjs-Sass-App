import Link from "next/link";
import Image from "next/image";

export const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <div className="card">
              <Image alt={ev.title} width={400} height={300} src={ev.image} />
              <h2>{ev.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
