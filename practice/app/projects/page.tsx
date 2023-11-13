import React from "react";
import Image from "next/image";
import gameFinderImage from "../../public/gamefinderimg.png";
import styles from "./styles.module.css";

export default function Projects() {
  return (
    <div>
      <div className="text-white text-2xl flex justify-center mb-4">
        Here are my projects
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
        <Image
          className={styles.img}
          src={gameFinderImage}
          alt="gamefinder"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
