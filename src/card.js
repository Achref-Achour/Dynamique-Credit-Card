import React, { Component } from 'react';
import Visa from './visa.png'
import Mastercard from './mastercard.png'
import Puce from './puce.png'
import './card.css';
import InputMask from 'react-input-mask';

var letters = /^[A-Za-z- ]+$/;


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company:'*********',
      number: '**** **** **** ****',
      code:'****',
      date:'**/**',
      name:'*******',
    };
  }
                        StateCompany =
                            (event) => { 
                              if ((event.target.value.match(letters))   && (event.target.value.length<=12)){
                              this.setState({company: event.target.value.toUpperCase()})
                            }}
                        StateNumber =
                          (event) => { 
                            /*if (event.target.value.length<=19){*/
                            this.setState({number: event.target.value})
                          }
                          StateCode =
                          (event) => { 
                            if (Number(event.target.value)   && (event.target.value.length<=4)){
                            this.setState({code: event.target.value})
                          }}
                          StateDate =
                          (event) => { 
                            /*if ((Number(event.target.value))   && (event.target.value.length<=5)){*/
                            this.setState({date: event.target.value})
                          }
                          StateName =
                          (event) => { 
                            if ((event.target.value.match(letters))   && (event.target.value.length<=12)){
                            this.setState({name: event.target.value})
                          }}
  render() {
    return (
      <div>
            <div className="background">
                  <div className="card">
                          <div className="card-top" >
                                  <div className="card-name">
                                      {this.state.company}
                                  </div>
                                  <div className="card-puce">
                                  <img src={Puce} width="20%" ></img> 
                                  </div>
                          </div>
                          <div className="card-bottom">
                                <div className="card-information" >
                                          <div className="card-number">
                                          {this.state.number}
                                          </div>
                                          <div className="card-detail">
                                              <div className="card-code">{this.state.code}</div>
                                              <div className="card-validation"> 
                                                    <div className="card-valid-thru">
                                                      <div><div>VALID</div> <div>THRU</div></div> 
                                                      <div>></div>
                                                    </div>
                                                    <div className="card-validation-date">
                                                          <div>MONTH/YEAR</div>
                                                          <div className="year-validation">{this.state.date}</div>
                                                    </div>
                                              </div>
                                          </div>
                                          <div  className="card-holder">
                                          {this.state.name}
                                          </div>
                                </div>
                                <div className="card-logo">
                                <img src={Visa} width="80%" ></img>
                                <img src={Mastercard} width="80%" ></img>
                                </div>                      
                          </div>
                    </div>
            
                    
            </div>
              <div>
              <form>
                <span>Company Name</span>      
                <input type="text" name="company" onChange={this.StateCompany} /><br/>
                <span>Card Number</span>
                <InputMask mask="9999 9999 9999 9999" maskChar='*' type="text" name="number" onChange={this.StateNumber}/><br/>
                <span>Card Code</span>
                <input type="text" name="number" onChange={this.StateCode}/><br/>
                <span>Validation Date</span>
                <InputMask  mask="99/99" maskChar='*' type="text" name="date" onChange={this.StateDate} /><br/>
                <span>Card Owner</span>
                <input type="text"  name="name" onChange={this.StateName}/><br/>
              </form>
              </div>
      </div>

    );
  }
  
}

export default Card;
