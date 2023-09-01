// components/Button.tsx
import React from "react";
import Link from "next/link";
import styles from "@/styles/homepage/home-button.module.css";

//Type declaration for the button
type ButtonProps = {
  text: string;
  linkPath: string;
};

const Button: React.FC<ButtonProps> = ({ text, linkPath }) => {
  return (
    <div className={styles.container}>
      <Link href={linkPath}>
        <div className={styles.buttonStyle}>{text}</div>
      </Link>
    </div>
  );
};

export default Button;
