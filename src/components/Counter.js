import { useState } from "react";

const initialValues = {
  name: "Fruits",
  count: 0,
  price: 2.99,
  discount: 0,
};

function Counter() {
  const [product, setProduct] = useState(initialValues);

  const handlerPlus = () => {
    setProduct((prevProduct) => {
      return {
        ...product,
        count: prevProduct.count + 1,
      };
    });
  };

  const handlerMinus = () => {
    setProduct((prevProduct) => {
      return {
        ...product,
        count: prevProduct.count + -1,
      };
    });
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}

export default Counter;
