import React from 'react'
import { Typography } from '@material-ui/core'

const SingleSauce = props => {
    const { sauce } = props;
    return (
      <div className="item">
        <Typography variant="headline" style={{color: 'slategrey', marginBottom: '0.5em', marginLeft: '1em'}}>{sauce.name}</Typography>
        <img src={sauce.image} alt={sauce.name}/>
      </div>
    )
}


export default SingleSauce
