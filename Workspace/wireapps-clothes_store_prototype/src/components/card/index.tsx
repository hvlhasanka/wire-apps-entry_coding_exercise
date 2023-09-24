import { ClothingItem } from "../../types";
import styles from "./index.module.scss"

interface Props {
  cardData: ClothingItem;
  cardCategoryType: "MENS-CATEGORY" | "WOMENS-CATEGORY";
};

const Card = (props: Props) => {
  const { 
    cardData: {
      title,
      price,
      description,
      image,
    },
    cardCategoryType,
  } = props;

  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardHeading}>
        {title}
      </p>
      <img src={image} alt="card-item-cloth" className={styles.cardImage} />
      <div className={`
        ${styles.cardFooterBlock} ${cardCategoryType === "MENS-CATEGORY" ?
          styles.cardFooterBlockMens
          :
          styles.cardFooterBlockWomens
        }
      `}>
        <p className={styles.cardPrice}>
          {`Rs ${price}`}
        </p>
        <p className={styles.cardDescription}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
