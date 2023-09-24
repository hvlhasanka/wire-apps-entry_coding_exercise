/**
 * Card Section component
 */

import React from "react";
import { Card } from "..";
import { ClothingItem, ItemCategory } from "../../types";
import styles from "./index.module.scss";

interface Props {
  cardData: Array<ClothingItem>;
};

const CardSection = (props: Props) => {
  const {
    cardData,
  } = props;

  const getCardItemCategory = React.useCallback((dataItemCategory: ItemCategory) => {
    return dataItemCategory === "men's clothing" ? "MENS-CATEGORY" : "WOMENS-CATEGORY";
  }, []);

  return (
    <div className={styles.cardSectionContainer}>
      {cardData.map((data, index) => {
        return (
          <Card
            key={index}
            cardData={data}
            cardCategoryType={getCardItemCategory(data.category)}
          />
        );
      })}
    </div>
  );
}

export default CardSection;
