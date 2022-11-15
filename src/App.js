import React from 'react';
import {Header, MainContainer} from './Components';
import { Navigate, Route , Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <AnimatePresence>
    <div>
      <Header/>
        <Routes>
          <Route  path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<MainContainer/>} />
        </Routes>
    </div>
    </AnimatePresence>
  );
};

export default App;
