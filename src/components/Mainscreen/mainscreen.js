import Header from "../Header/header";
import Footer from "../Footer/footer";
import Features from "../Features/feature"
import Products from "../Products/product"
import Sloganmaker from "../Slogan/sloganMaker";
function Mainscreen() {
  return (
    <div>
      <Header />
      <Sloganmaker/>
      <Features/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default Mainscreen;