import React from 'react';
import axios from 'axios';


class Book extends React.Component{
    BookDelete=()=>{
        console.log("bandysiu trinti "+this.props.Book.id);
         axios.delete(`http://localhost:8080/books/`+this.props.Book.id)
           .then(res => {
             console.log(res);
             console.log(res.data);
             window.location.reload();
           })
    
    }

    render(){
    return(
        
           
        <tbody>  
                    <tr>
            <td>id : {this.props.book.id} </td>
            <td>Book title: {this.props.book.title} </td>
            <td>Published years: {this.props.book.years} </td>
            <td>ISBN: {this.props.book.isbn} </td>
            <td>Price : {this.props.book.price} </td>
            <td>Count : {this.props.book.count} </td>
            <td>Author : {this.props.book.authors} </td>
        
            

           <td> <button onClick={this.BookDelete} >delete</button></td>
            </tr>
            </tbody>

            
        
    )
    }

}
export default Book;