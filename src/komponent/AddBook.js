import React from 'react';
import axios from 'axios';

export default class AddBook extends React.Component {
  state = {
    title: "",
    years: "",
    isbn : "",
    price : "",
    count: "",
    summary: ""
    
  }

  titleChange = event => {
    this.setState({ title: event.target.value });
  
  }
  yearsChange = event => {
    this.setState({ years: event.target.value });
  
  }
  isbnChange = event => {
    this.setState({isbn: event.target.value });
  
  }
  priceChange = event => {
    this.setState({price: event.target.value });
  
  }
  countChange = event => {
    this.setState({count: event.target.value });
  
  }
  summaryChange = event => {
    this.setState({summary: event.target.value });
  
  }

  refresh(){
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();

    

    axios.post(`http://localhost:8080/books`, {  
    title: this.state.title,
    years: this.state.years,
    isbn: this.state.isbn,
    price: this.state.price,
    count: this.state.count,
    bookSummary: this.state.summary
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <p>
          <label>
            Title:
            <input type="text" name="imone" onChange={this.titleChange} />
          </label>
          </p>
          <p>
          <label>  
            Years:
            <input type="text" name="gavejas" onChange={this.yearsChange} />
          </label>
          </p>
          <p>
          <label>  
            ISBN:
            <input type="text" name="numeris" onChange={this.isbnChange} />
          </label>
          </p>
        <p>
          <label>  
            Price:
            <input type="text" name="numeris" onChange={this.priceChange} />
          </label>
          </p>
        <p>
          <label>  
            Count:
            <input type="text" name="numeris" onChange={this.countChange} />
          </label>
          </p>
        <p>
          <label>  
            Summary:
            <input type="text" name="numeris" onChange={this.summaryChange} />
          </label>
          </p>
        
        
          <button type="submit" >Add</button>
          
        </form>
       
      </div>
    )
  }
}