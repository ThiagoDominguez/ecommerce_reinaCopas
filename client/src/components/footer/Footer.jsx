// Styles
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="item">
          <h1>Categorias</h1>
          <span>Vino Tinto</span>
          <span>Vino Blanco</span>
          <span>Vino Rosado</span>
          <span>Espumosos</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Paginas</span>
          <span>Tienda</span>
          <span>Comparar</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Sobre nosotros</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            debitis deserunt vel ullam animi, excepturi maiores nulla modi odit
            et recusandae obcaecati dolorem quisquam sint quae. Voluptatum
            dolore temporibus vitae.
          </span>
        </div>
        <div className="item">
          <h1>Contacto</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            debitis deserunt vel ullam animi, excepturi maiores nulla modi odit
            et recusandae obcaecati dolorem quisquam sint quae. Voluptatum
            dolore temporibus vitae.
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="left">
          <span className="logo">Reina de Copas</span>
          <span className="copyright">
            &#169; Todos los derechos reservados {new Date().getUTCFullYear()}
          </span>
        </div>
        <div className="right">
          <img src="/img/mp.png" alt="metodos de pago" />
          {/*//Todo:Agregar imagen de los metodos de pago */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
