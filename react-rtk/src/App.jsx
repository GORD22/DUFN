import React, { Component } from 'react';
import './App.css';
import DeleteConfirmation from './components/DeleteConfirmation';
import { store } from './store/store';
import { increment } from './store/CountSlice';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormOpen: false, value: '' };
  
    this.incrementHandler = this.incrementHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm = () => {
    this.setState(state => ({ isFormOpen: !state.isFormOpen }));
  };

  incrementHandler() {
    this.setState({
      value: store.getState().toString()
    });
    store.subscribe(() => this.state.value);
    store.dispatch(increment());
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <button className='btn__start' onClick={this.toggleForm}>
            Click Here
          </button>
          <span className='count__delete'>{this.state.value}</span>
        </header>
  
        <main>
          {this.state.isFormOpen &&
            <DeleteConfirmation  onClose={this.toggleForm} increment={this.incrementHandler}/>
          }
        </main>
      </div>
    );
  }
}
