import React from 'react'
import './Style.css' ;

const Card = ({book}) => {
    console.log(book)
  return (
      <> 
      {
          book.map((item)=>{
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail ;
            if(thumbnail!= undefined ){
                             return(
              <> 
                <div className='card'>
    
        <img src={thumbnail} alt=""/>
        <div className='bottom'>
            <h3 className='title'>{item.volumeInfo.title}</h3>
            <p className='description'>{item.volumeInfo.description}</p>
        </div>
    </div>
              </>
              ) 
            }

          })
      }
 
    </>
  )
}

export default Card