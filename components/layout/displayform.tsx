import React, { ReactNode } from 'react';
import styles from "@/styles/displayform.module.css"

interface DisplayFormProps {
  children: ReactNode;
}

const DisplayForm: React.FC<DisplayFormProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default DisplayForm;
