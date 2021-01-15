import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import CoffeeCard from '../CoffeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div  style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/coffee.png'})` ,
            backgroundRepeat: 'no-repeat',
            backgroundSize:' 100% 100% ',
            width: "100%",
            height:'97vh'
        }}>

        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar position="static" color="transparent" elevation={0} style={{background: 'transparent', boxShadow: 'none',color:'black'}}>
                <Toolbar variant="dense" style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h4" color="inherit">
                    <header style={{fontSize:'60px' }}>
                      
                    </header>
                </Typography>
                <div>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Grid container spacing={24}>
           <Grid item xs={6}  style={{paddingTop:'22vh'}}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
                <header style={{fontSize:'60px' ,color:'white',textShadow:'inherit'}}>
                      Coffee.
                </header>
                <Divider/>
                <p style={{fontSize:'20px' ,color:'white',textShadow:'inherit'}}>Do you love a coffee? , Smell or Tast will make a good day for you.</p>
           </Grid>
           <Grid item xs={6}>
                
           </Grid>

        </Grid>
        
        </div>
    </div>
  );
}
