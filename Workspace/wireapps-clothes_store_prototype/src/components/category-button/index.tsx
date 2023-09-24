/**
 * CategoryButton component
 */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

type ButtonCategoryValue = {
  onButtonClickPath: string;
  buttonHeading: string;
};

const mensButtonCategoryValue: ButtonCategoryValue = {
  onButtonClickPath: "mens-clothing",
  buttonHeading: "Men's clothing",
}

const womensButtonCategoryValue: ButtonCategoryValue = {
  onButtonClickPath: "womens-clothing",
  buttonHeading: "Women's clothing",
};

interface Props {
  cardCategoryType: "MENS-CATEGORY" | "WOMENS-CATEGORY";
};

const CategoryButton = (props: Props) => {
  const {
    cardCategoryType,
  } = props;

  const [buttonCategoryValue, setButtonCategoryValue] = React.useState<ButtonCategoryValue | undefined>(undefined);

  React.useEffect(() => {
    setButtonCategoryValue(
      cardCategoryType === "MENS-CATEGORY" ?
        mensButtonCategoryValue
        :
        womensButtonCategoryValue);
  }, [cardCategoryType]);

  return (
    <Link className={
      `${styles.categoryButton} ${cardCategoryType === "MENS-CATEGORY" ?
      styles.categoryButtonMens : styles.categoryButtonWomens}`
    } to={buttonCategoryValue?.onButtonClickPath!}>
      <p className={styles.categoryHeading}>
        {buttonCategoryValue?.buttonHeading}
      </p>
    </Link>
  );
}; 

export default CategoryButton;
