/**
 * Get Products service data function
 */

import axios from "axios";
import configs from "../../configs";
import { ClothingItem, ItemCategory } from "../../types";

type Args = {
  resultCategory: ItemCategory;
  resultLimit: number;
};
type SuccessResponse = [boolean, Array<ClothingItem>];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = configs;

const getProducts = async (args: Args): Promise<SuccessResponse | ErrorResponse> => {
  const { resultCategory, resultLimit } = args;
  
  let resultCategoryAmended = resultCategory.replace(" ", "%20");
  let productsArr: Array<any> = [];
  let resError: any;
  console.log(resultCategory);
  console.log(resultCategoryAmended);

  const urlPath = 
    `${apiBaseUrl}/products/category/${resultCategoryAmended}?limit=${resultLimit}`;
  console.log(urlPath);

  await axios.get(urlPath).then((response) => {
    productsArr = response.data as Array<ClothingItem>;
  }).catch((error) => {
    resError = error;
  });
  console.log(productsArr);
  if (resError) {
    return [true, resError];
  }

  return [false, productsArr];
};

export default getProducts;
