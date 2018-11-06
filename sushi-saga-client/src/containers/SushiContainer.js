import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi  eatenSushis={props.eatenSushis} eatSushi={props.eatSushi} sushi={sushi} key={sushi.id}/>).slice(props.currentFour, props.currentFour + 4)}
        <MoreButton showMoreSushi={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer