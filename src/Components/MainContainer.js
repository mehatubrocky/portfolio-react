import React from 'react';
import {HomeContainer} from './HomeContainer';
import {About} from "./About";
import {Service} from "./Service";
import Skills from './Skills';
import MyWork from './MyWork';
import Footer from './Footer';
import Contacts from './Contacts';

export const MainContainer = () => {
  return (
    <div className="w-full h-auto">
        <HomeContainer/>
        <About />
        <Service />
        <Skills />
        <MyWork />
        <Contacts />
        <Footer />
    </div>
  );
};

export default MainContainer;