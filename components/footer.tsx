
import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Send } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Countries", href: "/countries" },
      { label: "Services", href: "/services" },
      { label: "Universities", href: "/universities" },
      { label: "Contact Us", href: "/contact" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
  {
    title: "Countries",
    links: [
      { label: "Austria", href: "/countries" },
      { label: "Cyprus", href: "/countries" },
      { label: "Spain", href: "/countries" },
      { label: "New Zealand", href: "/countries" },
      { label: "Ireland", href: "/countries" },
      { label: "Finland", href: "/countries" },
    ],
  },
  {
    title: "Countries",
    links: [
      { label: "Poland", href: "/countries" },
      { label: "Hungary", href: "/countries" },
      { label: "USA", href: "/countries" },
      { label: "UK", href: "/countries" },
      { label: "Australia", href: "/countries" },
      { label: "Germany", href: "/countries" },
    ],
  },
  {
    title: "Countries",
    links: [
      { label: "Turkey", href: "/countries" },
      { label: "UAE", href: "/countries" },
      { label: "Canada", href: "/countries" },
      { label: "Malaysia", href: "/countries" },
      { label: "Sweden", href: "/countries" },
      { label: "France", href: "/countries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link href="/" aria-label="Pentawise home">
            <Image
              src="/pentawise logo.png"
              alt="Pentawise Consultants"
              width={100}
              height={75}
              className="footer-logo"
            />
          </Link>

          <h2>Your Partner in Global Education</h2>

          <div className="footer-divider"></div>

            <p className="footer-description">
            Pentawise is a trusted study abroad consultancy guiding students
            to top universities across 20+ countries. With personalized
            <br />
            counseling, scholarship guidance, and visa support, we make your
            global education journey smooth and stress-free.
            </p>

            <div className="footer-divider"></div>
        </div>

        <div className="footer-columns">
          {footerColumns.map((column, index) => (
            <div className="footer-column" key={`${column.title}-${index}`}>
              <h3>{column.title}</h3>

              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <a href="tel:+924687456416">+92 4687456416</a>
            <a href="mailto:info.pentawise@gmail.com">
              info.pentawise@gmail.com
            </a>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Globe size={19} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <MessageCircle size={19} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Send size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
       
        <Image
          src="/PoweredbyImage 2.png"
          alt="H2H8 Studio"
          width={100}
          height={38}
          className="h2h8-logo"
        />
      </div>
    </footer>
  );
}
