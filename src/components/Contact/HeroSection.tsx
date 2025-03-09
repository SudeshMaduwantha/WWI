"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Contact/Herosection.module.css";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/Contact/HeroImage.jpg)` }}
      ></div>
      <div className={styles.content}>
        <h2>Get in Touch with</h2>
        <h1>World-Wise International</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          dignissimos similique, optio ab atque possimus eius autem fugit quos
          dolore?
        </p>
      </div>
    </div>
  );
}
