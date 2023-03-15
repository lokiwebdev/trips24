import Featured from "../../featured/Featured";
import FeaturedProperties from "../../featuredProperties/FeaturedProperties";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

import MailList from "../../layout/MailList";
import Navbar from "../../layout/Navbar";
import PropertyList from "../../propertyList/PropertyList";
import "./home.css";
import HeaderStays from "./HeaderStays";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderStays />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        {/* <MailList />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
