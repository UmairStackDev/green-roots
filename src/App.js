import "./Fresh Cart.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Admin/Signup/SignUp";
import Appes from "./Appes";
import Signin from "./components/Admin/Signin/SignInForm";
import CategoryRegistration from "./components/Admin/CategoryRegistration/CategoryRegistration";
import ProductRegistration from "./components/Admin/ProductRegistration/ProductRegistration";
import NewPassword from "./components/Admin/NewPassword/NewPassword";
import ForgotPassword from "./components/Admin/Password/ForgotPassword";
import MainDashboard from "./components/Dashboard/MainDashboard";
// dashboard
import Dashboard from "./components/Dashboard/pages/Dashboard";
import Users from "./components/Dashboard/pages/Users";
import Messages from "./components/Dashboard/pages/Messages";
import FileManager from "./components/Dashboard/pages/FileManager";
import Analytics from "./components/Dashboard/pages/Analytics";
import Order from "./components/Dashboard/pages/Order";
import Saved from "./components/Dashboard/pages/Saved";
import Setting from "./components/Dashboard/pages/Setting";
import SingleProductDetails from "./components/SingleProductDetails/SingleProductDetails";
import CheckoutForm from "./components/Checkout/CheckoutForm";
import AllProduct from "./components/AllProduct/AllProduct";
import Healthbeauty from "./components/Healthbeauty/Healthbeauty";
import Medicine from "./components/Medicine/Medicine";
import HerbsSpices from "./components/HerbsSpices/HerbsSpices";
import EssentialOils from "./components/EssentialOils/EssentialOils";
import NaturalOils from "./components/NaturalOils/NaturalOils";

import CartPage from "./components/cartPage";
import AnyLogin from "./components/facebookLogin/AnyLogin";
import YourComponent from "./components/Checkout/YourComponent";
import UserSignup from "./components/UserSignup/UserSignup";
import SingleProductDetailstow from "./components/SingleProductDetailstwo/SingleProductDetailstwo";
import SingleProductDetailsthree from "./components/SingleProductDetailsthree/SingleProductDetailsthree";
import SingleProductDetailsfour from "./components/SingleProductDetailsfour/SingleProductDetailsfour";
import SingleProductDetailsfive from "./components/SingleProductDetailsfive/SingleProductDetailsfive";
import SingleProductDetailssix from "./components/SingleProductDetailssix/SingleProductDetailssix";
import SingleProductDetailseven from "./components/SingleProductDetailseven/SingleProductDetailseven";
import SingleProductDetailseight from "./components/SingleProductDetailseight/SingleProductDetailseight";
import SingleProductDetailshealth from "./components/SingleProductDetailshealth/SingleProductDetailshealth";
import SingleProductDetailsmedicine from "./components/SingleProductDetailsmedicine/SingleProductDetailsmedicine";
import SingleProductDetailsHerbs from "./components/SingleProductDetailsHerbs/SingleProductDetailsHerbs";
import SingleProductDetailsEssential from "./components/SingleProductDetailsEssential/SingleProductDetailsEssential";
import SingleProductDetailsNatural from "./components/SingleProductDetailsNatural/SingleProductDetailsNatural";
import About from "./homeAbout/About";
import Story from "./homeAbout copy/Story";
import Vison from "./homeVison/Vison";
import SearchBox from "./components/SearchBox";
import Checkoutbank from "./components/Checkoutbank/Checkoutbank";
import OderDetails from "./components/Dashboard/pages/CustomerDetails";
import Details from "./components/Dashboard/pages/OrderDetails";
import CustomerDetails from "./components/Dashboard/pages/CustomerDetails";
import OrderDetails from "./components/Dashboard/pages/OrderDetails";
import SingleProductDetailsAllproduct from "./components/SingleProductDetailsAllproduct/SingleProductDetailsAllproduct";
import NewHome from "./components/NewHome/NewHome";
// import SearchBar from "./components/AllProduct/SearchComponent";


function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/NewHome" element={<NewHome />} />
            <Route path="/" element={<Appes />} />
            <Route path="/Checkoutbank" element={<Checkoutbank />} />
            <Route path="/SearchBox" element={<SearchBox />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/Vison" element={<Vison />} />
            <Route path="/About" element={<About />} />
            <Route path="/MainDashboard" element={<MainDashboard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/CategoryRegistration" element={<CategoryRegistration />} />
            <Route path="/ProductRegistration" element={<ProductRegistration />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/NewPassword" element={<NewPassword />} />
            <Route path="/SignIn" element={<Signin />} />


            <Route path="/CheckoutForm" element={<CheckoutForm />} />
            <Route path="/AllProduct" element={<AllProduct />} />
            <Route path="/Healthbeauty" element={<Healthbeauty />} />
            <Route path="/Medicine" element={<Medicine />} />
            <Route path="/HerbsSpices" element={<HerbsSpices />} />
            <Route path="/EssentialOils" element={<EssentialOils />} />
            <Route path="/NaturalOils" element={<NaturalOils />} />
            <Route path="/AnyLogin" element={<AnyLogin />} />
            <Route path="/YourComponent" element={<YourComponent />} />
            <Route path="/UserSignup" element={<UserSignup />} />
            {/* single product  */}
            <Route path="/products/:id" element={<SingleProductDetails />} />
            <Route path="/SingleProductDetailstow/:id" element={<SingleProductDetailstow />} />
            <Route path="/SingleProductDetailsthree/:id" element={<SingleProductDetailsthree />} />
            <Route path="/SingleProductDetailsfour/:id" element={<SingleProductDetailsfour />} />
            <Route path="/SingleProductDetailsfive/:id" element={<SingleProductDetailsfive />} />

            <Route path="/SingleProductDetailssix/:id" element={<SingleProductDetailssix />} />
            <Route path="/SingleProductDetailseven/:id" element={<SingleProductDetailseven />} />
            <Route path="/SingleProductDetailseight/:id" element={<SingleProductDetailseight />} />
            <Route path="/SingleProductDetailshealth/:id" element={<SingleProductDetailshealth />} />
            <Route path="/SingleProductDetailsmedicine/:id" element={<SingleProductDetailsmedicine />} />
            <Route path="/SingleProductDetailsHerbs/:id" element={<SingleProductDetailsHerbs />} />
            <Route path="/SingleProductDetailsEssential/:id" element={<SingleProductDetailsEssential />} />
            <Route path="/SingleProductDetailsNatural/:id" element={<SingleProductDetailsNatural />} />
            {/* <Route path="/SearchBar" element={<SearchBar />} /> */}
            <Route path="/SingleProductDetailsAllproduct/:id" element={<SingleProductDetailsAllproduct />} />

            {/* admin panel    */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/CustomerDetails" element={<CustomerDetails />} />
            <Route path="/OrderDetails" element={<OrderDetails />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
