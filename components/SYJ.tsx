
"use client";

import Image from "next/image";

export default function StartYourJourney() {
  return (
    <section className="journey-section">
      <div className="journey-card">
        <div className="journey-image">
          <Image
            src="/SYJ convocation image.png"
            alt="Graduate celebrating graduation"
            width={400}
            height={400}
          />
        </div>

        <div className="journey-content">
          <h2>Start Your Journey<br />Today</h2>

          <form className="journey-form">
            <input type="text" placeholder="Name*" required />
            <input type="text" placeholder="City*" required />
            <input
              type="text"
              placeholder="Desired Country*"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
