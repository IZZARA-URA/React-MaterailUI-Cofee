import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
    return(
        <div>
            <Grid style={{ backgroundColor:'#273e47',height:'40vh' ,flexDirection:'row',alignSelf:'flex-start'}}>
                    <Grid spacing={2} style={{display:'flex',justifyContent:'space-around',color:'white',paddingTop:'8vh'}}>
                        <div style={{padding:'18px'}}>
                            <Typography gutterBottom variant="subtitle1" style={{fontSize:'25px',fontWeight:'bold'}}>
                                FILL IN THE BLANK
                            </Typography>
                            <Grid spacing={3} style={{display:'flow',width:'150px'}}>
                                <InstagramIcon/>
                                <FacebookIcon/>
                                <YouTubeIcon/>
                            </Grid>
                        </div>
                        <div style={{padding:'18px'}}>
                            <Typography gutterBottom variant="subtitle1" style={{fontSize:'25px',fontWeight:'bold'}}>
                                KARMAKMAET SECRET WORLD
                            </Typography>
                            <Grid spacing={3} style={{display:'flex',width:'150px'}}>
                                <InstagramIcon/>
                                <FacebookIcon/>
                                <YouTubeIcon/>
                            </Grid>
                        </div>
                        <div style={{padding:'18px'}}>
                            <Typography gutterBottom variant="subtitle1" style={{fontSize:'25px',fontWeight:'bold'}}>
                                WARM WOOD CAFE
                            </Typography>
                            <Grid spacing={3} style={{display:'flex',width:'150px'}}>
                                <InstagramIcon/>
                                <FacebookIcon/>
                                <YouTubeIcon/>
                            </Grid>
                        </div>
                    </Grid>
            </Grid>
           
            <div style={{ backgroundColor:'#202c39', height:'3vh', justifyContent:'space-around',display:'flex',color:'white',paddingTop:'4px'}}>
            Copyright by U Cafe . All rights reserved. 2021
            </div>
        </div>
    )
}

export default Footer