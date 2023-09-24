/**
 * Header component
 */

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Args {
  children: JSX.Element | Array<JSX.Element>;
};

const Header = (args: Args) => {
  const { children } = args;

  return (
    <>
      <div className={styles.headerContainer}>
        <Link className={styles.headerContainerHeading} to={"/"}>
          Modern Walk
        </Link>
      </div>
      <hr className={styles.headerDivider} />
      {children}
    </>
  );
};

export default Header;
