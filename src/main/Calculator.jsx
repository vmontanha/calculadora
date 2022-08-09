import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
          displayValue: '0',
          clearDisplay: false,
          operation: null,
          values: [0, 0],
          current: 0
}
export default class Calculator extends Component {

          state = { ...initialState }

          constructor(props) {
                    super(props)
                    this.clear = this.clear.bind(this);
                    this.setOperation = this.setOperation.bind(this);
                    this.addDigit = this.addDigit.bind(this);
          }

          clear() {
                    this.setState({ ...initialState })
          }

          setOperation(operation) {
                    // console.log(operation)
                    if (this.state.current === 0) {
                              this.setState({ operation, current: 1, clearDisplay: true })

                    } else {
                              const equals = operation === '='
                              const currentOperation = this.state.operation

                              const values = [...this.state.values]
                              values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                              values[1] = 0

                              this.setState({
                                        displayValue: values[0],
                                        operation: equals ? null : operation,
                                        current: equals ? 0 : 1,
                                        clearDisplay: !equals,
                                        values
                              })
                    }
          }


          addDigit(n) {
                    if (n === ',' && this.state.displayValue.includes('.')) {
                              return
                    }

                    const clearDisplay = this.state.displayValue === '0'
                              || this.state.clearDisplay
                    const currentValue = clearDisplay ? '' : this.state.displayValue
                    const displayValue = currentValue + n
                    this.setState({ displayValue, clearDisplay: false })

                    if (n !== '.') {
                              const i = this.state.current
                              const newValue = parseFloat(displayValue)
                              const values = [...this.state.values]
                              values[i] = newValue
                              this.setState({ values })
                              // console.log(values)
                    }

          }

          render() {
                    return (
                              <div className="calculator">
                                        <Display value={this.state.displayValue} />

                                        <Button currentLabel="AC" label="AC" click={this.clear} topoperation />
                                        <Button currentLabel="+/-" click={this.setOperation} topoperation />
                                        <Button currentLabel="%" label="%" click={this.clear} topoperation />
                                        <Button currentLabel="÷" label="/" click={this.setOperation} operation />
                                        <Button currentLabel="7" label="7" click={this.addDigit} />
                                        <Button currentLabel="8" label="8" click={this.addDigit} />
                                        <Button currentLabel="9" label="9" click={this.addDigit} />
                                        <Button currentLabel="×" label="*" click={this.setOperation} operation />
                                        <Button currentLabel="4" label="4" click={this.addDigit} />
                                        <Button currentLabel="5" label="5" click={this.addDigit} />
                                        <Button currentLabel="6" label="6" click={this.addDigit} />
                                        <Button currentLabel="-" label="-" click={this.setOperation} operation />
                                        <Button currentLabel="1" label="1" click={this.addDigit} />
                                        <Button currentLabel="2" label="2" click={this.addDigit} />
                                        <Button currentLabel="3" label="3" click={this.addDigit} />
                                        <Button currentLabel="+" label="+" click={this.setOperation} operation />
                                        <Button currentLabel="0" label="0" click={this.addDigit} double btnzero />
                                        <Button currentLabel="," label="," click={this.addDigit} />
                                        <Button currentLabel="=" label="=" click={this.setOperation} operation />
                              </div>
                    )
          }
}