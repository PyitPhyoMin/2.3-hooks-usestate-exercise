import { useState } from "react";

/* In addition to the assignment tasks, include the followings for Edison's Additional code challenge.[PhyoMin]
UI: Add checkbox with a label "lock"
If "lock" is checked, button + and - should not change the value
If "lock" is unchecked, button + and - works as usual
By default, the lock checkbox is unchecked (use this as default value)
In a single handler function, you should use setState once
handlerMinus and handlerPlus should be 1 liner (spread operator and ternary operator)*/

const initialValues = {
  name: "Fruits",
  count: 0,
  price: 2.99,
  discount: 0,
};


function Discount() {
  const [product, setProduct] = useState(initialValues);
  const [checkedBox, setCheckedBox] = useState();
  
  //Handler for checkbox change event.[PhyoMin]
  const handlerLock = (e) => {
    e.target.checked ? (setCheckedBox(true)) : (setCheckedBox(false));
  };

  const handlerPlus = () => {
    if (checkedBox !== true) {
      setProduct((prevProduct) => {return {...prevProduct, count: prevProduct.count + 1,
                                    discount: prevProduct.count + 1 >= 5 ? 20 : 0,
        };
      });
    }
  };
  //Handler for minus button click and prevent negative number.[PhyoMin]
  const handlerMinus = () => {
    if (checkedBox !== true) {
      setProduct((prevProduct) => {return {...prevProduct, 
    count: prevProduct.count - 1 < 0 ? 0 : prevProduct.count - 1, discount: prevProduct.count - 1 >= 5 ? 20 : 0,
        };
      });
    }
  };
  //Handler for reset button.[PhyoMin]
  const handlerReset = () => setProduct(initialValues);
  
  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <input className="checkBox" type="checkbox" id="lockBox" onChange={handlerLock}>
      </input>
      <label htmlFor="lockBox">LOCK</label>
      <h2>Product Price: {product.price}</h2>
      <h2>Discount: {product.discount}%</h2>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
}

export default Discount;
