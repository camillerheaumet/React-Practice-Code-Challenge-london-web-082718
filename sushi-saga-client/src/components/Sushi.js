import React from 'react'

const Sushi = ({sushi, eatSushi, eatenSushis}) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => eatSushi(sushi)}>
          {eatenSushis.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} width="100%" alt="img"/>
            
          }
      </div>
      <h4 className="sushi-details">
        {sushi['name']} - ${sushi['price']}
      </h4>
    </div>
  )
}

export default Sushi