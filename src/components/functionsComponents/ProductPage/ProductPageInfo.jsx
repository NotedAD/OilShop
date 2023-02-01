import productPage from "../../pages/Product Page/ProductPage.module.scss";

const ProductPageInfo = ({ img, head, check, inValid, price, body, prefix}) => {
  return (
    <>
      <div className={productPage.productPageInfo}>
        <div className={productPage.imgProductInfo}>
          <img src={img} alt="Product Image" />
          <hr />
        </div>
        <div className={productPage.productInfo}>
          <p>{head}</p>
          <p>
            {check} {inValid}
          </p>
          <p className={productPage.price}>{price}</p>
          <div>
            <button className={productPage.inCart}>В корзину</button>
            <button className={productPage.add}>+</button>1 шт.
            <button className={productPage.reduce}>-</button>
          </div>
          <button className={productPage.goCart}>Перейти к корзине</button>
        </div>
      </div>
      <div className={productPage.productInfoMore}>
        <a href='#'>Описание</a>
        <a href='#'>Характеристика</a>
        <p>{body}</p>
        <p>{prefix}</p>
        <hr />
      </div>
      <div className={productPage.moreProducts}>
        <p>С этими товарами также берут</p>
      </div>
    </>
  );
};

export default ProductPageInfo;
