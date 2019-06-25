import React from 'react';
import {Header} from './components/Header';
import {Leftnavi} from './components/Leftnavi';
import {Body} from './components/Body';

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-lg-2" style={{border: 1+'px solid #ccc', height: 750}}>
          <Leftnavi />
        </div>
        <div className="col-lg-10" style={{border: 1+'px solid #ccc', height: 750}}>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
