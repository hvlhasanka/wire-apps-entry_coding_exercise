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

  const urlPath = 
    `${apiBaseUrl}/products/category/${resultCategoryAmended}?limit=${resultLimit}`;

  await axios.get(urlPath).then((response) => {
    productsArr = response.data as Array<ClothingItem>;
  }).catch((error) => {
    resError = error;
  });
  if (resError) {
    return [true, resError];
  }

  return [false, productsArr];
};

export default getProducts;
