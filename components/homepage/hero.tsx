import React from "react";
import styles from "@/styles/homepage/hero.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/homepage/hero-background.jpg"
        fill
        objectFit="cover"
        alt="Hero background"
        className={styles.backgroundImage}
      />

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={7000}
        className={styles.carouselContent}
      >
        <div className={styles.carouselSlide}>
          <h1 className={styles.carouselText}>Character Sheet Management</h1>
        </div>
        <div className={styles.carouselSlide}>
          <h1 className={styles.carouselText}>Campaign Management</h1>
        </div>
        <div className={styles.carouselSlide}>
          <h1 className={styles.carouselText}>Realtime Updates</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
