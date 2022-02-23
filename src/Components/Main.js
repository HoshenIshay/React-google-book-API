import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'
import './Style.css' ;

const Main = () => {
    const [search , setSearch] = useState("")
    const [bookData , setData] = useState([])
    const searchBook = (e) =>{
        
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDmaWwa0CLnqZPP4TDJD7To-dNNqO0J10Q' +'&maxResults=10')
            .then(res =>setData(res.data.items))
            .catch(err =>console.log(err))
     
    }
  return (
      <div>
    <div className='header'>
        <div className='row1'>
            <h1>Google Books APIs</h1>
        </div>
        <div className='row2'>
            <h2>Find Your Book ...</h2>
            <div className='search'>
                <input type="text"
                 placeholder='Search'
                 value={search}
                 onChange={e=>setSearch(e.target.value)}
                 />
                 <button onClick={searchBook}>Search</button>
            </div>
            
        </div>
      
    </div>
      <div className='container'>   
            {
            <Card book={bookData}/>
            }
        </div>
    </div>
  )
}
export default Main