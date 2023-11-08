import React from "react";
import styles from "./style.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className="ml-10">2023&copy;Koder90</h3>
      <ul className="flex justify-center mr-10 mt-2">
        <li className="mr-5">
          <Link href="https://www.facebook.com/jerko.zlopasa">
            <BiLogoFacebook size={30} />
          </Link>
        </li>
        <li className="mr-5">
          <Link href="https://www.linkedin.com/in/jerko-zlopasa/">
            <BiLogoLinkedin size={30} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/">
            <BiLogoTwitter size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
