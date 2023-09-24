import axios from "axios";
import configs from "../../configs";

type Args = {
  resultCategory: string;
  resultLimit: number;
};
type SuccessResponse = [boolean, Array<any>];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = configs;

const getProducts = async (args: Args): Promise<SuccessResponse | ErrorResponse> => {
  const { resultCategory, resultLimit } = args;

  let productsArr: Array<any> = [];
  let resError: any;

  await axios.get(`${apiBaseUrl}/products/category/${resultCategory}?limit=${resultLimit}`).then((response) => {
    productsArr = response.data;
  }).catch((error) => {
    resError = error;
  });

  if (resError) {
    return [true, resError];
  }

  return [false, productsArr];
};

export default getProducts;
