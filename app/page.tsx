
import FAQs from "../components/FAQs";
import Counter from "../components/counter";
import Image from "next/image";


export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-trust">
          
            <div className="student-avatars">
              <Image
                src="/group.png"
                alt="Student community"
                width={90}
                height={32}
                className="student-trust-image"
              />
            </div>


          <p>Trusted By 1000&apos;s of Students</p>
        </div>

        <h1>
          Vibing Your Way To
          <br />
          Global Campuses
        </h1>

        <p className="hero-description">
          Pentawise is your trusted partner for studying abroad,
          guiding you to top universities across 20+ countries.
          With multiple of
          <br/>
          successful student journeys, we make
          global education simple, personalized, and full of
          possibilities.
        </p>

        
          <div className="hero-stats">
          <div className="hero-stat">
            <h2><Counter end={20} suffix="+" /></h2>
            <p>Countries Panel</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={500} suffix="+" /></h2>
            <p>Partner Universities</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={50000} suffix="+" /></h2>
            <p>Courses Available</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={10} suffix="+" /></h2>
            <p>Years Of Experience</p>
          </div>
        </div>

      </section>

      <FAQs />
    </>
  );
}
