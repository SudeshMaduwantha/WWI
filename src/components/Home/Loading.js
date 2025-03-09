"use client";
import styles from "../../styles/Home/Loading.module.css";

const Loading = ({ onComplete }) => {
  return (
    <div className={styles.loadingContainer}>
      <img src="/Loading.gif" alt="Loading..." className={styles.loadingGif} />
    </div>
  );
};

export default Loading;
