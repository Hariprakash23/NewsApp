import './App.css';

// class based component we will use

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize= 5;
  const [progress,setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          
          <LoadingBar
          color='red' // loading bar color
          progress={progress} 
          />
          

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageLimit={pageSize} catagory={'general'} country={'in'}/> } />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageLimit={pageSize} catagory={'general'} country={'in'}/> } />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageLimit={pageSize} catagory={'sports'} country={'in'}/> } />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageLimit={pageSize} catagory={'technology'} country={'in'}/> } />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageLimit={pageSize} catagory={'entertainment'} country={'in'}/> } />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageLimit={pageSize} catagory={'health'} country={'in'}/> } />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageLimit={pageSize} catagory={'science'} country={'in'}/> } />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageLimit={pageSize} catagory={'business'} country={'in'}/> } />

          </Routes>

        </Router>
      </div>


    )
  
}
export default App