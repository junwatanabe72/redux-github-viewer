import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//components
import Header from './components/Header/Header';
import Body from './components/Body';
//styled-components
import styled from 'styled-components';
//modal
import Modal from 'react-modal';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fab, fas, far);

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
