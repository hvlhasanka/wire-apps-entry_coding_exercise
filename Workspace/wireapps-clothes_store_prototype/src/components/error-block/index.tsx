/**
 * ErrorBlock component
 */

import styles from "./index.module.scss";
import { VscError } from "react-icons/vsc";

interface Props {
  label: string;
};

const ErrorBlock = (props: Props) => {
  const { label } = props;

  return (
    <div className={styles.errorBlockContainer}>
      <div className={styles.errorBlockContainerErrorIcon}>
        <VscError />
      </div>
      <p className={styles.errorBlockContainerLabel}>
        {label}
      </p>
    </div>
  ); 
};

export default ErrorBlock;
