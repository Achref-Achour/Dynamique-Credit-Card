import React, { Component } from 'react';
import Visa from './visa.png'
import Mastercard from './mastercard.png'
import Puce from './puce.png'

import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="background">
            <div className="card">
                    <div className="card-top" >
                            <div className="card-name">
                                CREDIT CARD
                            </div>
                            <div className="card-puce">
                            <img src={Puce} width="20%" ></img> 
                            </div>
                    </div>
                    <div className="card-bottom">
                          <div className="card-information" >
                                    <div className="card-number">
                                      123 456 789 123
                                    </div>
                                    <div className="card-detail">
                                        <div className="card-code">5422</div>
                                        <div className="card-validation"> 
                                              <div className="card-valid-thru">
                                                <div><div>VALID</div> <div>THRU</div></div> 
                                                <div>></div>
                                              </div>
                                              <div className="card-validation-date">
                                                    <div>MONTH/YEAR</div>
                                                    <div className="year-validation">11/50</div>
                                              </div>
                                        </div>
                                    </div>
                                    <div  className="card-holder">
                                       CARD HOLDER
                                    </div>
                          </div>
                          <div className="card-logo">
                          <img src={Visa} width="80%" ></img>
                          <img src={Mastercard} width="80%" ></img>
                          </div>                      
                    </div>
              </div>
      </div>
    );
  }
}

export default Card;
