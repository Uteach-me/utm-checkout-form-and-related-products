import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('/products')
      .then((response) => {
        this.setState({
          products: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;