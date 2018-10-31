import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AlbumList from './components/AlbumList';
import Business from './components/Business';
import Reviews from './components/Reviews';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import ReviewForm from './components/ReviewForm';


 const RouterComponent = () => {

   return (

     <Router>

      <Scene key='root' hideNavBar>

     <Scene key='Auth'>
       <Scene key='MainP' component={MainPage} title='الصفحة الرئيسية' />
       <Scene key='Login' component={LoginForm} backTitle="رجوع" title='تسجيل الدخول' />
       <Scene key='Register' component={Register} backTitle="رجوع" title='التسجيل' />
      </Scene>

      <Scene key='Main'>
        <Scene key='business' component={AlbumList} backTitle="رجوع" title='Businesses'initial />
        <Scene key='businessInner' component={Business} backTitle="رجوع" title='Businesse detiles' />
        <Scene key='reviews' component={Reviews} backTitle="رجوع" title='Reviews' />
        <Scene key='reviewForm'component={ReviewForm} backTitle="رجوع" title='ReviewForm' />

      </Scene>

      </Scene>

     </Router>

   );
 };

 export default RouterComponent;
