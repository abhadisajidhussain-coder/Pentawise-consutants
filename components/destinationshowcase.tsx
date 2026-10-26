import Image from "next/image";


const destinations = [
  { image: "/destinations/canada.png" },
  { image: "/destinations/ireland.png" },

  { image: "/destinations/cyprus.png" },
  { image: "/destinations/turkey.png" },

  { image: "/destinations/usa.png" },
  { image: "/destinations/malaysia.png" },

  { image: "/destinations/finland.png" },
  { image: "/destinations/sweden.png" },

  { image: "/destinations/uk.png" },
  { image: "/destinations/malta.png" },

  { image: "/destinations/germany.png" },
  { image: "/destinations/france.png" },

  { image: "/destinations/australia.png" },
  { image: "/destinations/uae.png" },

  { image: "/destinations/spain.png" },
  { image: "/destinations/poland.png" },

  { image: "/destinations/new%20zealand.png" },
  { image: "/destinations/sweden_1.png" },
];

const columns = [
  [destinations[0], destinations[1]],     // 1: Canada, Ireland
  [destinations[2], destinations[3]],     // 2: Cyprus, Turkey
  [destinations[4], destinations[5]],     // 3: USA, Malaysia
  [destinations[6], destinations[7]],     // 4: Finland, Sweden
  [destinations[8], destinations[9]],     // 5: UK, Malta
  [destinations[10], destinations[11]],   // 6: Germany, France
  [destinations[12], destinations[13]],   // 7: Australia, UAE
  [destinations[14], destinations[15]],   // 8: Spain, Poland
  [destinations[16], destinations[17]],   // 9: New Zealand, Sweden_1
];

export default function DestinationShowcase() {
  return (
    <section className="destination-showcase">
      <h2 className="destination-showcase-heading">
        Pick Your Perfect
        <br />
        Destination
      </h2>

      <div className="destination-columns">
        {columns.map((column, index) => (
          <div
            className={`destination-column destination-column-${index + 1}`}
            key={index}
          >
            {column.map((destination) => (
              <div
              className="destination-card"
              key={destination.image}
            >
              <Image
                src={destination.image}
                alt="Destination"
                className="destination-image"
                width={300}
                height={420}
                sizes="(max-width: 480px) 18vw, (max-width: 768px) 11vw, 12vw"
              />
            </div>
            ))}
            <div className="destination-placeholder" />
          </div>
        ))}
      </div>
    </section>
  );
}
