import React from 'react';
import axios from 'axios';
import Book from './Book'


 class Books extends React.Component {

  state ={
      books:[]
    }
   
  
  
    componentDidMount() {
      axios.get(`http://localhost:8080/books`)
        .then(res => {
          console.log(res)
          const books = res.data;
          this.setState({ books });
        })
    }
  
   
    render(){
      let knygos = this.state.books.map((book)=>{
          return  <Book key={book.id} book={book}/>
      })
      return(
         < div>   
        <p>Books</p>
          <table>
          {knygos}
          </table>
          </div>
          
      )
  }

  }
export default Books;