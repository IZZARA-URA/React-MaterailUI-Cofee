import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import body1 from './body1.jpg'
import body2 from './body2.jpg'
import body3 from './body3.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
        width:'100%'
    },
    
  }));

const Body = () => {
    const classes = useStyles();
return(
    <div>
        <div style={{height:'80vh'}}>
            <Grid container spacing={3} >
               <Grid container xs={12} style={{padding:'50px',justifyContent:'center',fontSize:'25px'}}>
                    Location 
               </Grid>
               <Grid container xs={12} spacing={2} style={{padding:'50px',justifyContent:'center'}}>
                    <Grid item xs={3}  >
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={body1}
                            title="Fill In The Blank"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cafe : Fill In The Blank
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                            A very homely and wood-drive cafe setting, it’s almost like stepping into IKEA at Fill In The Blank.
                            They have really friendly staff greeting you as you step in, and also a small workshop area that sells merchandise like hand-made bags and accessories. Very much a lifestyle store cum cafe.
                            They serve really sweet desserts like Strawberry pancakes with Ice cream and also tasty salads as well as sandwiches.
                            </Typography>

                                <Typography gutterBottom variant="subtitle1">
                                Location :
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Fill In The Blank:28/10 Sukhumvit Soi 61, Bangkok, Thailand | Tel: +66094-556-2920/+6602-000-4828
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Read More
                                </Button>
                            </CardActions>
                    </Grid>

                    <Grid item xs={3} >
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={body2}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cafe : Karmakamet Secret World
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">

                                This not-so-secret secret diner has got to be one of the most beautiful cafes we’ve ever been to. It’s worth a visit just for the experience itself (but no worries the food is pretty awesome as well). The ambiance here deserves a 10/10.
                                The trickle of natural sunlight coupled with a rustic, homely design makes you feel like you stepped into a ‘secret world’ especially when contrasted with the busy bike-filled streets of Bangkok almost right behind it.
                                Now onto the food, items are slightly on the pricey side and Karmakamet may not serve the most exquisite dishes but like I said, it’s all about the experience here. The famous dessert Strawberry in the Clouds is a must-try. The other dishes like their pastas weren’t too outstanding but I’d recommend the Crab Pasta if you are intending to get one.
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                Location :
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Address: 10110, 30/1 Sukhumvit Rd, Khlong Tan, Khlong Toei, Bangkok 10110, Thailand | Tel: 02 262 0700-1
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Read More
                                </Button>
                            </CardActions>
                    </Grid>

                    <Grid item xs={3} >
                    <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={body3}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Cafe : Warm Wood Cafe
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            The first thing that caught our attention was the beautiful interior design which reminded us of a cosy little hut. Even though this was literally smack in the middle of a busy street, the cafe’s ambiance was so calming and relaxing, we paid no attention to the hustle and bustle right outside. Perfect for a quiet brunch and small talk with friends, I can’t think of a better way to start the morning.
                            Famed for the yuzu dip, we found the churros to be rather average in texture and could do with much more crunch. The yuzu dip however, was light and refreshing, giving a good citrusy punch to the chewy sticks of goodness.
                            Even though it was brunch time, we went for the truffle risotto because it looked so appetizing we simply didn’t want to give it a miss! Slightly on the pricier side, this risotto did not disappoint in terms of flavor but could surely do with a softer rice texture. We also got the breakfast pancake which was well-seasoned and perfect to start the day with. (Posting an insta picture also got us complementary chocolate cake bites haha.)
                            </Typography>

                            <Typography gutterBottom variant="subtitle1">
                                Location :
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Address: 141 Soi Thong Lo 10, Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand | Tel: +66 2 714 9974
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Read More
                            </Button>
                        </CardActions>
                     </Grid>
               </Grid>
               <div style={{display:'flex', justifyContent:'space-around'}}>
                   
               </div>
            </Grid>
        </div>
    </div>
)
}

export default Body