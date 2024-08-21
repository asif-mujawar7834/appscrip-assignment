"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import paymentsImage from "../../../../public/assets/images/payments.png";
import { metta_muse_links, quick_links } from "@/constants";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.input_container} onSubmit={() => {}}>
            <input placeholder="Enter your email" type="email" required />
            <button>subscribe</button>
          </form>
        </div>
        <div className={styles.footer_section1_links_container}>
          <div>
            <h2>contact us</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h2>currency</h2>
            <p>USD</p>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.container}>
        <div className={styles.footer_section_2}>
          <div>
            <h2>mettā muse</h2>
            <ul className={styles.navItems}>
              {metta_muse_links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul className={styles.navItems}>
              {quick_links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footer_section1_links_container}>
          <h2>follow us</h2>
          <div className={styles.socials_link_container}>
            <div className={styles.socials}>
              <Link href={"/"}>
                <span className={styles.social_icons}>
                  <FaInstagram />
                </span>
              </Link>
              <Link href={"/"} className={styles.social_icons}>
                <span className={styles.social_icons}>
                  <FaLinkedin />
                </span>
              </Link>
            </div>
            <div>
              <h2>mettā muse Accepts</h2>
              <Image
                alt="payments"
                src={paymentsImage}
                height={1000}
                width={1000}
                className={styles.payments_image}
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};
