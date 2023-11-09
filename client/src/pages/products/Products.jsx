import { useParams } from "react-router-dom";
import { useState } from "react";
import List from "../../components/list/List";
// Styles
import "./Products.scss";

const Products = () => {
  const id = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categoria del producto</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Vino tinto</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Vino blanco</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Vino rosado</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filtro por precio</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Precio (Menor primero)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="des"
              value="des"
              onChange={(e) => setSort("des")}
            />
            <label htmlFor="des">Precio (Mayor primero)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List /*catId={catId}*/ maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
