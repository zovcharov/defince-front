import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SmartChainRatings from '../../components/SmartChainRatings/SmartChainRatings';

import './HomePage.scss';

const firebaseConfig = {
  apiKey: "AIzaSyBGF0Ak9b0LWKd17_OpBfYlXHNt7Xfj7kY",
  authDomain: "dogefinance-dd6c8.firebaseapp.com",
  databaseURL: "https://dogefinance-dd6c8-default-rtdb.firebaseio.com",
  projectId: "dogefinance-dd6c8",
  storageBucket: "dogefinance-dd6c8.appspot.com",
  messagingSenderId: "383113985950",
  appId: "1:383113985950:web:f3d2543095a1a721bde08f",
  measurementId: "G-2MFL4KDLR8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db: any) {
  debugger
  const citiesCol = collection(db, 'partners');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
}

//getCities(db);

const HomePage = (): JSX.Element => (
  <PageWrapper>
    <div className="home-page">
      <SmartChainRatings />
    </div>
  </PageWrapper>
);

export default HomePage;
