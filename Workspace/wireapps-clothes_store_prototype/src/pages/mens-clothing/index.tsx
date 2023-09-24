/**
 * MensClothing component
 */

import React from "react";
import { CardSection, ErrorBlock, Header, LoadingSpinner } from "../../components";
import styles from "./index.module.scss";
import { ClothingItem } from "../../types";
import getProducts from "../../services";

const MensClothing = () => {
  const [mensClothingFeedData, setMensClothingFeedData] = React.useState<Array<ClothingItem>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const getMensClothingFeed = async () => {
    setIsLoading(true);

    // Get men's clothing data
    const [isError, feedData] = await getProducts({
      resultCategory: "men's clothing",
      resultLimit: 4,
    });

    setIsLoading(false);

    if (isError) {
      console.error(isError);
      setIsError(isError);
      return;
    }

    // Replicating data array since the API is only able to return 4 results from the backend
    setMensClothingFeedData([
      ...feedData,
      ...feedData,
    ]);
  }

  React.useEffect(() => {
    getMensClothingFeed();
  }, []);

  return (
    <Header>
      <div className={styles.mensClothingContainer}>
        <p className={styles.mensContainerHeading}>
          Men's Clothing
        </p>
        {
          isLoading ?
            <LoadingSpinner />
            :
            isError ?
              <ErrorBlock label="Unable to retrieve men's clothing products" />
              :
              <CardSection 
                cardData={mensClothingFeedData}
              />
        }
      </div>
    </Header>
  );
};

export default MensClothing;
