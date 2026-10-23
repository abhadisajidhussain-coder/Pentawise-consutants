import Image from "next/image";
const services = [
  {
    image: "/CC icon.png",
    title: "Career Counselling",
    description: (
      <>
        Our expert advisors help you understand
        <br />
        your strengths, interests, and academic
        <br />
        goals. We provide one-on-one guidance
        <br />
        to choose the right study path and career
        <br />
        direction, ensuring every decision aligns
        <br />
        with your long-term ambitions.
      </>
    ),
  },
  {
    image: "/FYF icon.png",
    title: "Find Your Fit",
    description: (
      <>
        We assist you in selecting the ideal
        <br />
        course, university, and destination that
        <br />
        match your profile and aspirations. With
        <br />
        insights from our global partner network
        <br />
        across 20+ countries, you’ll find an
        <br />
        academic environment where you can
        <br />
        truly thrive.
      </>
    ),
  },
  {
    image: "/SS icon.png",
    title: "Scholarship Support",
    description: (
      <>
        Pentawise helps you explore and apply
        <br />
        for scholarships that match your eligibility.
        <br />
        From identifying opportunities to refining
        <br />
        applications and essays, our team
        <br />
        maximizes your chances of receiving
        <br />
        financial aid.
      </>
    ),
  },
  {
    image: "/DS icon.png",
    title: "Document Support",
    description: (
      <>
        Navigating paperwork can be
        <br />
        overwhelming, we make it effortless. Our
        <br />
        consultants review and organize your
        <br />
        academic, financial, and identity
        <br />
        documents to ensure accuracy and
        <br />
        compliance with university and visa
        <br />
        requirements.
      </>
    ),
  },
  {
    image: "/VS icon.png",
    title: "Visa Support",
    description: (
      <>
        Our visa experts provide personalized,
        <br />
        step-by-step guidance for your student
        <br />
        visa application. We help you prepare
        <br />
        documents, schedule interviews, and
        <br />
        meet all requirements, making your visa
        <br />
        process smooth, stress-free, and
        <br />
        successful.
      </>
    ),
  },
  {
    image: "/TG icon.png",
    title: "Travel Guidance",
    description: (
      <>
        We prepare you for life abroad with
        <br />
        detailed pre-departure sessions covering
        <br />
        travel, accommodation, cultural
        <br />
        adaptation, and essential checklists
        <br />
        ensuring you feel confident and ready
        <br />
        from day one at your new university.
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3 className="service-title">
              <span className="service-icon" aria-hidden="true">
                <Image src={service.image} alt={service.title} width={23} height={23} />
              </span>
              {service.title}
            </h3>

            <p className="service-description">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
