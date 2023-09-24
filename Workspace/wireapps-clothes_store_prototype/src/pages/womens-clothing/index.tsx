/**
 * WomensClothing component
 */

import React from "react";
import { CardSection, ErrorBlock, Header, LoadingSpinner } from "../../components";
import styles from "./index.module.scss";
import { ClothingItem } from "../../types";
import getProducts from "../../services";

const WomensClothing = () => {
  const [womensClothingFeedData, setWomensClothingFeedData] = React.useState<Array<ClothingItem>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const getWomensClothingFeed = async () => {
    setIsLoading(true);

    // Get womens's clothing data
    const [isError, feedData] = await getProducts({
      resultCategory: "women's clothing",
      resultLimit: 4,
    });

    setIsLoading(false);

    if (isError) {
      console.error(isError);
      setIsError(isError);
      return;
    }

    // Replicating data array since the API is only able to return 4 results from the backend
    setWomensClothingFeedData([
      ...feedData,
      ...feedData,
    ]);
  }

  React.useEffect(() => {
    getWomensClothingFeed();
  }, []);

  return (
    <Header>
      <div className={styles.womensClothingContainer}>
        <p className={styles.womensContainerHeading}>
          Women's Clothing
        </p>
        {
          isLoading ?
            <LoadingSpinner />
            :
            isError ?
              <ErrorBlock label="Unable to retrieve women's clothing products" />
              :
              <CardSection 
                cardData={womensClothingFeedData}
              />
        }
      </div>
    </Header>
  );
};

export default WomensClothing;
