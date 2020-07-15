import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

import IndecisionApp from './components/IndecisionApp'

class App extends React.Component{
    render(){
        return(
            <div>
            <IndecisionApp/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));