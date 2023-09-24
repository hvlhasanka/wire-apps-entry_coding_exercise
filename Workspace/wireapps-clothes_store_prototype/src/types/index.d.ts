type Configs = {
  apiBaseUrl: string;
};

type ItemCategory = "men's clothing" | "women's clothing";

type ClothingItem = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: ItemCategory,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
};

export {
  Configs,
  ItemCategory,
  ClothingItem,
};
