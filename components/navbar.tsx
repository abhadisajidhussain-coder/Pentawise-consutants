"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Countries", href: "/countries" },
  { label: "Universities", href: "/universities" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="navbar-brand">
          <Link href="/" aria-label="Home">
            <Image
              src="/pentawise logo.png"
              alt="Pentawise logo"
              width={120}
              height={70}
              priority
              className="navbar-logo"
            />
          </Link>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar-action">
          <a
            href="https://wa.me/"
            className="consultation-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="consultation-icon">
                <Phone size={16} strokeWidth={2} />
            </span>

            <span className="consultation-text">
              <span>Book a free Expert</span>
              <span>Consultancy Call</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
