import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const colors = ['#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'];

class Controller extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: colors[0],
            color : colors[0],
            transitionDuration: "0.8s"
        };
        this.reload = this.reload.bind(this);
    }

    reload() {
        console.log(colors[Math.floor(Math.random()*10)]);
        var c = Math.floor(Math.random()*10);
        this.setState(state => ({
            backgroundColor: colors[c],
            color: colors[c]
          }));
    }

    render() { 
        App()
        return (
            <div className="Main" style={this.state}>
                <p>hjgjh</p>
                <div className="Box">
                    <p id="tag" style={{color: this.state.color}}>»</p>
                    <p id="quote" style={{color: this.state.color}}><App /></p>
                    <button id="getNew" style={{color: this.state.backgroundColor}} onClick={this.reload}>New Quote</button>
                </div>
                <p id="footer">by chemotharepy</p>
            </div>
        );
    }
}

render(<Controller />, document.getElementById("root"))


serviceWorker.unregister();
