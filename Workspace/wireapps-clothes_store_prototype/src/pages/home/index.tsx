/**
 * Home page component
 */

import React from "react";
import styles from "./index.module.scss";
import getProducts from "./../../services/index";
import { Link, Outlet } from "react-router-dom";
import { CardSection, Header } from "../../components";
import { ClothingItem } from "../../types";

const Home = () => {
  const [flashSaleFeedData, setFlashSaleFeedData] = React.useState<Array<ClothingItem>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const getFlashSaleFeed = async () => {
    setIsLoading(true);

    // Get flash sale data for "Men's clothing" category
    const [isErrorMens, feedDataMens] = await getProducts({
      resultCategory: "men's clothing",
      resultLimit: 2,
    });
    // Get flash sale data for "Women's clothing" category
    const [isErrorWomens, feedDataWomens] = await getProducts({
      resultCategory: "women's clothing",
      resultLimit: 2,
    });

    setIsLoading(false);
    
    if (isErrorMens) {
      console.error(isErrorMens);
      setIsError(isErrorMens);
      return;
    }
    if (isErrorWomens) {
      console.error(isErrorWomens);
      setIsError(isErrorWomens);
      return;
    }

    setFlashSaleFeedData([
      feedDataMens[0],
      feedDataWomens[0],
      feedDataMens[1],
      feedDataWomens[1],
    ]);
  };

  React.useEffect(() => {
    getFlashSaleFeed();
  }, []);

  return (
    <Header>
      <div className={styles.flashSaleContainer}>
        <p className={styles.flashSaleContainerHeading}>
          Flash Sale
        </p>
        <CardSection cardData={flashSaleFeedData}/>
      </div>
      <div className={styles.categoriesContainer}>
        <Link to={"mens-clothing"}>
          Mens Clothing
        </Link>
        <Link to={"womens-clothing"}>
          Womens Clothing
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </Header>
  );
};

export default Home;
