import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./styles/BasketSidebar.module.css";

function BasketSidebar({ state, clickHandler }) {
  const { total, itemsCounter, checkout } = state;

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity :</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
