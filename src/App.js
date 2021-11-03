import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/Pages/AboutUs/AboutUs';
import AddAnService from './component/Pages/AddAnService/AddAnService';
import ContactUs from './component/Pages/ContactUs/ContactUs';
import Home from './component/Pages/Home/Home/Home';
import Login from './component/Pages/Login/Login';
import ManageAllOrders from './component/Pages/ManageAllOrders/ManageAllOrders';
import MyOrder from './component/Pages/MyOrder/MyOrder';
import NewUser from './component/Pages/NewUser/NewUser';
import NotFound from './component/Pages/NotFound/NotFound';
import PlaceOrder from './component/Pages/PlaceOrder/PlaceOrder';
import Register from './component/Pages/Register/Register';
import Footer from './component/Pages/Shared/Footer/Footer';
import Header from './component/Pages/Shared/Header/Header';
import GalleryPage from './component/Pages/Tour/GalleryPage/GalleryPage';
import TourPage from './component/Pages/Tour/TourPage/TourPage';
import TourPerPage from './component/Pages/Tour/TourPerPage/TourPerPage';
import AuthProvider from './hooks/AuthProvider/AuthProvider';
import PrivateRoute from "./component/Pages/PrivateRoute/PrivateRoute"
import UpdateProfile from './component/Pages/UpdateProfile/UpdateProfile';
import MyProfile from './component/Pages/MyProfile/MyProfile';
import BookingComplete from './component/Pages/BookingComplete/BookingComplete';

function App() {
  
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute exact path="/home">
          <Home></Home>
        </PrivateRoute>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/offers">
          <TourPage></TourPage>
        </Route>
        <PrivateRoute path="/booking-complete">
          <BookingComplete></BookingComplete>
        </PrivateRoute>
        <PrivateRoute path="/offers/:id">
          <TourPerPage></TourPerPage>
        </PrivateRoute>
        <PrivateRoute path="/add-services">
          <AddAnService></AddAnService>
        </PrivateRoute>
        <PrivateRoute path="/my-order">
          <MyOrder></MyOrder>
        </PrivateRoute>
       
        <PrivateRoute path="/my-profile">
          <MyProfile></MyProfile>
        </PrivateRoute>
        <PrivateRoute path="/update-profile">
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
        <PrivateRoute path="/place-order">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <PrivateRoute path="/manage-orders">
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute exact path="/gallery">
          <GalleryPage></GalleryPage>
        </PrivateRoute>
        <PrivateRoute path="/NewUser">
          <NewUser></NewUser>
        </PrivateRoute>
        <Route path="/about-us">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
