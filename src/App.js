// import logo from "./logo.svg";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
// } from "@aws-amplify/ui-react";

// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }


// export default withAuthenticator(App);

import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UIEditReview, ReviewNavBar, ReviewCardCollection, UINewReview, DiaryCreateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><ReviewNavBar/><ReviewCardCollection/></div>}/>
        <Route exact path='/new' element={<UINewReview/>} />
        <Route exact path='/edit' element={<UIEditReview/>} />
        <Route exact path='/create' element={<DiaryCreateForm/>} />
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);
