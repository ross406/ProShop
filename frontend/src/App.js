// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import Footer from './componenets/Footer';
// import Header from './componenets/Header';
// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import CartScreen from './screens/CartScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';

// // import ProfileScreen from './screens/ProfileScreen';

// import ShippingScreen from './screens/ShippingScreen';
// import PaymentScreen from './screens/PaymentScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
// import OrderScreen from './screens/OrderScreen';
// import UserListScreen from './screens/UserListScreen';
// import UserEditScreen from './screens/UserEditScreen';
// import ProductListScreen from './screens/ProductListScreen';
// import ProductEditScreen from './screens/ProductEditScreen';
// import OrderListScreen from './screens/OrderListScreen';
// import Loader from './componenets/Loader';

// const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main className='py-3'>
//         <Container>
//           <Route path='/order/:id' component={OrderScreen} />
//           <Route path='/shipping' component={ShippingScreen} />
//           <Route path='/payment' component={PaymentScreen} />
//           <Route path='/placeorder' component={PlaceOrderScreen} />
//           <Route path='/login' component={LoginScreen} />
//           <Route path='/register' component={RegisterScreen} />
//           <Route path='/profile' 
//          render={() => (
//           <Suspense fallback={<Loader />}>
//             <ProfileScreen />
//           </Suspense>
//         )}/>
//           <Route path='/product/:id' component={ProductScreen} />
//           <Route path='/cart/:id?' component={CartScreen} />
//           <Route path='/admin/userlist' component={UserListScreen} />
//           <Route path='/admin/orderlist' component={OrderListScreen} />
//           <Route path='/admin/user/:id/edit' component={UserEditScreen} />
//           <Route
//             path='/admin/productlist'
//             component={ProductListScreen}
//             exact
//           />
//           <Route
//             path='/admin/productlist/:pageNumber'
//             component={ProductListScreen}
//             exact
//           />
//           <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
//           <Route path='/search/:keyword' component={HomeScreen} exact />
//           <Route path='/page/:pageNumber' component={HomeScreen} exact />
//           <Route
//             path='/search/:keyword/page/:pageNumber'
//             component={HomeScreen}
//             exact
//           />
//           <Route path='/' component={HomeScreen} exact />
//         </Container>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// #######################################################################################################################################################################################

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Loader from './componenets/Loader';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

// Lazy loading components
const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const ProductScreen = lazy(() => import('./screens/ProductScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const RegisterScreen = lazy(() => import('./screens/RegisterScreen'));
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));
const ShippingScreen = lazy(() => import('./screens/ShippingScreen'));
const PaymentScreen = lazy(() => import('./screens/PaymentScreen'));
const PlaceOrderScreen = lazy(() => import('./screens/PlaceOrderScreen'));
const OrderScreen = lazy(() => import('./screens/OrderScreen'));
const UserListScreen = lazy(() => import('./screens/UserListScreen'));
const UserEditScreen = lazy(() => import('./screens/UserEditScreen'));
const ProductListScreen = lazy(() => import('./screens/ProductListScreen'));
const ProductEditScreen = lazy(() => import('./screens/ProductEditScreen'));
const OrderListScreen = lazy(() => import('./screens/OrderListScreen'));

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' render={() => (
            <Suspense fallback={<Loader />}><OrderScreen /></Suspense>
          )} />
          <Route path='/shipping' render={() => (
            <Suspense fallback={<Loader />}><ShippingScreen /></Suspense>
          )} />
          <Route path='/payment' render={() => (
            <Suspense fallback={<Loader />}><PaymentScreen /></Suspense>
          )} />
          <Route path='/placeorder' render={() => (
            <Suspense fallback={<Loader />}><PlaceOrderScreen /></Suspense>
          )} />
          <Route path='/login' render={() => (
            <Suspense fallback={<Loader />}><LoginScreen /></Suspense>
          )} />
          <Route path='/register' render={() => (
            <Suspense fallback={<Loader />}><RegisterScreen /></Suspense>
          )} />
          <Route path='/profile' render={() => (
            <Suspense fallback={<Loader />}><ProfileScreen /></Suspense>
          )} />
          <Route path='/product/:id' render={() => (
            <Suspense fallback={<Loader />}><ProductScreen /></Suspense>
          )} />
          <Route path='/cart/:id?' render={() => (
            <Suspense fallback={<Loader />}><CartScreen /></Suspense>
          )} />
          <Route path='/admin/userlist' render={() => (
            <Suspense fallback={<Loader />}><UserListScreen /></Suspense>
          )} />
          <Route path='/admin/orderlist' render={() => (
            <Suspense fallback={<Loader />}><OrderListScreen /></Suspense>
          )} />
          <Route path='/admin/user/:id/edit' render={() => (
            <Suspense fallback={<Loader />}><UserEditScreen /></Suspense>
          )} />
          <Route path='/admin/productlist' exact render={() => (
            <Suspense fallback={<Loader />}><ProductListScreen /></Suspense>
          )} />
          <Route path='/admin/productlist/:pageNumber' exact render={() => (
            <Suspense fallback={<Loader />}><ProductListScreen /></Suspense>
          )} />
          <Route path='/admin/product/:id/edit' render={() => (
            <Suspense fallback={<Loader />}><ProductEditScreen /></Suspense>
          )} />
          <Route path='/search/:keyword' exact render={() => (
            <Suspense fallback={<Loader />}><HomeScreen /></Suspense>
          )} />
          <Route path='/page/:pageNumber' exact render={() => (
            <Suspense fallback={<Loader />}><HomeScreen /></Suspense>
          )} />
          <Route path='/search/:keyword/page/:pageNumber' exact render={() => (
            <Suspense fallback={<Loader />}><HomeScreen /></Suspense>
          )} />
          <Route path='/' exact render={() => (
            <Suspense fallback={<Loader />}><HomeScreen /></Suspense>
          )} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;




