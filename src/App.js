import React from "react"
import 'antd/dist/antd.css'
import './App.css';
import Counter from './components/Counter'




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      count2: 0
    }
  }

  handlePlusClick = () => {
    if (this.state.count <= this.state.count2) {
      this.setState({ count: this.state.count + 1 })
    }  
    if (this.state.count === this.state.count2) {
      this.setState({ count2: this.state.count2 + 1 })
    }
  } 

  handleMoinsClick = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  handlePlusClick2 = () => {
    this.setState({ count2: this.state.count2 + 1 })
      
  } 


  handleMoinsClick2 = () => {
    if (this.state.count2 > 0) {
      this.setState({ count2: this.state.count2 - 1 })
    }
    if (this.state.count === this.state.count2 && this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }
    render() {
      return (
        <> 
          <h1>
            Counter
          </h1>
          <Counter count={this.state.count} increment={this.handlePlusClick} substract={this.handleMoinsClick}/>
          <Counter count={this.state.count2} increment={this.handlePlusClick2} substract={this.handleMoinsClick2}/>
        </>

          
      );
    }

}


export default App;
