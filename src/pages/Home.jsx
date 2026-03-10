import Hero_Section from "../components/home-subsections/Hero_Section";
import Featured_Category from "../components/home-subsections/Featured_Category";
import Featured_Product from "../components/home-subsections/Featured_Product";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero_Section />
      <Featured_Category />
      <Featured_Product />
      <NewsLetter />
    </div>
  );
};

export default Home;
