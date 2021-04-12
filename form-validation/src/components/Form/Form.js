import React from 'react'
import './Form.scss'
import Input from './../Input/Input'

class Form extends React.Component {
  constructor() {
    super();
    this.defaultState = {
      login: {name: 'login', label: 'Login Id', type: 'text', value: '', error: '', validations: ['presence']},
      email: {name: 'email', label: 'Email', type: 'text', value: '', error: '', validations: ['presence', 'email']},
      name: {name: 'name', label: 'Name', type: 'text', value: '', error: '', validations: ['presence']},
      timezone: {name: 'timezone', label: 'Time Zone', type: 'select', value: '', error: '', options: [['gmt', 'GMT'], ['gmt1', 'GMT+1'], ['gmt2', 'GMT+2']], validations: ['presence'] },
      home: {name: 'home', label: 'Home', type: 'text', value: '', error: '', validations: ['presence', 'url']},
      about: {name: 'about', label: 'About Me', type: 'textarea', rows: '8', cols: '40', value: '', error: '', validations: ['presence', 'length-50']},
      notification: {name: 'notification', label: 'Receive notifications of comments.', type: 'checkbox', checked: 'false', error: '', validations: ['presence']},
    };
    this.state = this.defaultState;
  }
  
  validateInput () {
    // TODO - Implement this
    return true
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.validateInput()) {
      console.log(this.state)
      alert('Successfully submitted');
      this.setState(this.defaultState)
    }
  }

  onChangeHandler (event) {
    console.log(event.target)
    this.setState({
      ...this.state,
      [event.target.name]: {...this.state[event.target.name], value: event.target.value, checked: event.target.checked}
    })
  }

  render() { 
    return (
      <div className = "container">
        <div className = 'center-text heading'>Registration Form </div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          {Object.keys(this.state).map((key, index) => {
            return <Input {...this.state[key]} onChange={(event) => { this.onChangeHandler(event) }}  key={index}/>
          })}
          <h6>You will be sent an email when someone posts comments on your blog or album</h6>
          <h5 className = 'center-text'>Your password will be mailed to you</h5>
          <Input type='submit' value='Go' inputClass='heading' containerClass='center-text' />
        </form>
      </div>      
    )    
  }
}

export default Form