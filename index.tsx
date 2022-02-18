import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

function ComFunction(){
  return <p>Soy el componente de funcion</p>;
}

class CompClass extends Component {
    render(){
      return <p>Soy el compnente de Clase</p>;
    }
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <CompClass/>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
