import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pagina/Auth/login';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
        </Routes>
        
      </Router>
    </Fragment>
  );
}

export default App;
