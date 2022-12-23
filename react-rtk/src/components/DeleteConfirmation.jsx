import React from 'react';
import './css/DeleteConfirmation.css';
import ReactDOM from 'react-dom';



const root = document.getElementById('root');

export default class DeleteConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }
  
  componentDidMount() {
    root.appendChild(this.element);
  }

  componentWillUnmount() {
    root.removeChild(this.element);
  }

  render() {

    return ReactDOM.createPortal(
      <div className='deleteConfirmation' id='deleteConfirmation'>
      <div className='del__header'>
        <h4 className='del__title'>Удаление пользователя</h4>
        <div className='del__cross' onClick={this.props.onClose}>
        <svg className='icon__cross' width="11" height="12" viewBox="0 0 11 12" >
        <path d="M0.475529 1.00092C0.768422 0.708027 1.2433 0.708027 1.53619 1.00092L5.50586 4.97059L9.47553 1.00092C9.76842 0.708027 10.2433 0.708027 10.5362 1.00092C10.8291 1.29381 10.8291 1.76869 10.5362 2.06158L6.56652 6.03125L10.5362 10.0009C10.8291 10.2938 10.8291 10.7687 10.5362 11.0616C10.2433 11.3545 9.76842 11.3545 9.47553 11.0616L5.50586 7.09191L1.53619 11.0616C1.2433 11.3545 0.768422 11.3545 0.475529 11.0616C0.182636 10.7687 0.182636 10.2938 0.475529 10.0009L4.4452 6.03125L0.475529 2.06158C0.182636 1.76869 0.182636 1.29381 0.475529 1.00092Z" />
        </svg>
        </div>

      </div>
      <div className='del__subtitle'>
        Вы действительно хотите удалить этого пользователя с платформы?
      </div>

      <div className='del__text'>
        Это действие нельзя будет отменить!
      </div>

      <div className='del__btn'>
        <button className='btn__cancel' onClick={this.props.onClose}>
          <span className='span__cancel'>Отмена</span>
        </button>

        <button className='btn__delete' onClick={() => {this.props.increment(); this.props.onClose()}}>
          <span className='span__delete'>Удалить</span>
        </button>
      </div>
    </div>,
    this.element
    )
  }
}




