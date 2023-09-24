/**
 * LoadingSpinner component
 */

import styles from "./index.module.scss";
import RingLoadingSpinner from "../../assets/loading-spinner/ring-loading-spinner.svg";

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <img
        src={RingLoadingSpinner}
        alt="loading-spinner"
        className={styles.loadingSpinner}
      />
    </div>
  );
};

export default LoadingSpinner;
