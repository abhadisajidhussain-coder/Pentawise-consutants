import Image from "next/image";

export default function UniversityPartners() {
  return (
    <section className="university-partners">
      <div className="university-track">
        <Image
          src="/universities logo.png"
          alt="Our partner universities"
          width={1440}
          height={150}
          className="university-partners-image"
          priority
        />
        <Image
          src="/universities logo.png"
          alt=""
          aria-hidden={true}
          width={1440}
          height={150}
          className="university-partners-image"
        />
      </div>
    </section>
  );
}

