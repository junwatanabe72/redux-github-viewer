import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Templates/Header';
import Body from './components/Templates/Body';
import Modal from './Container/ModalContainer';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      <Router basename="/redux-github-viewer">
        <Header />
        <Body />
        <Modal />
      </Router>
    </div>
  );
}

export default App;
