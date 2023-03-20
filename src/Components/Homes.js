import React from 'react'
import Fotter from './Fotter'
import {  Grid} from '@mui/material'
import Homecontent from './Homecontent';


function Homes() {
  return (
    <Grid container direction={'column'}>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <Homecontent />
        </Grid>
      <Grid item xs={false} sm={2}/>
      </Grid>
      <Fotter />
    </Grid>
  )
}

export default Homes
