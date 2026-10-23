
import Image from "next/image";

export default function UniversityPartners() {
  return (
    <section className="university-partners">
      <Image
        src="/Univesities.png"
        alt="Our partner universities"
        width={1440}
        height={150}
        className="university-partners-image"
        priority
      />
    </section>
  );
}
