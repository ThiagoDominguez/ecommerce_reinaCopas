import { useState } from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Balance from "@mui/icons-material/Balance";

// Styles
import "./Product.scss";

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/451832/pexels-photo-451832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [selectedImg, setSelectedImg] = useState(0);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
          necessitatibus pariatur, veniam nisi ipsam ducimus dolores unde
          voluptates velit dolorum repellat laudantium aperiam debitis, facere
          repellendus iusto fuga a. Sapiente tempora sint quaerat quae,
          explicabo incidunt vel est quidem. Consequuntur modi facere voluptates
          blanditiis, nostrum optio voluptatum, ut fugit praesentium dolores sit
          sapiente omnis quasi, aliquam rem nam accusamus.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>
        <button className="add">
          <AddShoppingCart />
          AÑADIR AL CARRITO
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder />
            AÑADIR A FAVORITOS
          </div>
          <div className="item">
            <Balance /> COMPARAR
          </div>
        </div>
        <div className="info">
          <span>Proveedor:</span>
          <span>Tipo de producto:</span>
          <span>Etiquetas:</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPCION</span>
          <hr />
          <span>INFORMACION ADICIONAL</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
