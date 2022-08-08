import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

export default class Calculator extends Component {

          constructor(props) {
                    super(props)
                    this.clear.bind(this.clear)
                    this.setOperation.bind(this.setOperation)
                    this.addDigit.bind(this.addDigit)
          }

          clear() {
                    console.log('Limpar')
          }

          setOperation(operation) {
                    console.log(operation)
          }

          addDigit(n) {
                    console.log(n)
          }

          render() {
                    return (
                              <div className="calculator">
                                        <Display value="0" />
                                        <Button label="AC" click={this.clear} topoperation />
                                        <Button label="+/-" click={this.clear} topoperation />
                                        <Button label="%" click={this.clear} topoperation />
                                        <Button label="÷" click={this.setOperation} operation />
                                        <Button label="7" click={this.addDigit} />
                                        <Button label="8" click={this.addDigit} />
                                        <Button label="9" click={this.addDigit} />
                                        <Button label="×" click={this.setOperation} operation />
                                        <Button label="4" click={this.addDigit} />
                                        <Button label="5" click={this.addDigit} />
                                        <Button label="6" click={this.addDigit} />
                                        <Button label="-" click={this.setOperation} operation />
                                        <Button label="1" click={this.addDigit} />
                                        <Button label="2" click={this.addDigit} />
                                        <Button label="3" click={this.addDigit} />
                                        <Button label="+" click={this.setOperation} operation />
                                        <Button label="0" click={this.addDigit} double btnzero />
                                        <Button label="," click={this.addDigit} />
                                        <Button label="=" click={this.setOperation} operation />
                              </div>
                    )
          }
}