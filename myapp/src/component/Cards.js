import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

const Cards = ({ data }) => {
  return (
    <>
      {
        data.map((element, k) => {
          return (
            <>
              <Card className="card_style" >
                <Card.Img variant="top" className="card_img" src={element.imgdata} />

                <div className="card_body">

                  <div className="upper_data">
                    <h4>{element.rname}</h4>
                    <span>{element.rating} ★</span>
                  </div>

                  <div className="lower_data">
                    <h5>{element.address}</h5>
                    <span>{element.price}</span>
                  </div>

                  <div className="last"></div>
                  
                  <div className="footer">
                    <img src={element.arrimg} className="aimg" alt=""/>
                    <p>{element.somedata}</p>
                    <img src={element.delimg} className="dimg" alt=""/>
                  </div>

                </div>
              </Card>
            </>
          )
        })
      }
    </>
  )
}

export default Cards
