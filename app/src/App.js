import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Index from "../src/Properties/index";
import About from "../src/Properties/about";
import Chatbox from "../src/Properties/chatbox";
import News from "../src/Properties/news";
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';


function App() {
  ReactDOM.render( 
    
    <div>
      
      <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={ <Chatbox/>} />
          <Route path="/news" element={ <News/>} />

        </Routes>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>,
    document.getElementById('root')
    );
}

export default App;
