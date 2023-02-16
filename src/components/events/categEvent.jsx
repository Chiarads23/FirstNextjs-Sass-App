import Link from "next/link";
import Image from "next/image";

export const CategEvent = ({ data, pageName }) => {
  return (
    <div className="categ_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <div className="card">
              <Image
                alt={ev.title}
                width={300}
                height={200}
                src={ev.image}
                placeholder="blur"
                blurDataURL={ev.image}
              />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
