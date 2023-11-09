import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";
import PhotoSlider from "../../components/slider/PhotoSlider";
import Slider from "../../components/slider/Slider";

// Styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <Slider /> */}
      <PhotoSlider />
      <FeaturedProducts type="recomendados" />
      <Categories />
      <FeaturedProducts type="tendencias" />
      <Contact />
    </div>
  );
};

export default Home;
