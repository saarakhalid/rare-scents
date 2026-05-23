
import Aboutus from "../about";
import Collections from "../collection";
import Products from "../product";
import NewIn from "../product/newin/new";
import Testimonials from "../reviews";
import Home from "./home";
import QuoteSection from "./quote";
import HowItWorks from "./works";

const ViewPage = () => (
    <>
      <Home />
      <QuoteSection/>
      <NewIn/>
      <Products/>
      <HowItWorks/>
      <Collections/>
      <Aboutus/>
      <Testimonials/>
      
    </>
  );
   
  export default ViewPage;