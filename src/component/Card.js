import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Link, Grid, Box } from '@mui/material';
import { AspectRatio } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ newsData }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {
          newsData?.map((details) => {
            console.log(details.urlToImage && details.author);
            return (
                (details.urlToImage ) && (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={details?.title} >
                  {
      
                      <Card>
                        <AspectRatio color={'#fff'} sx={{ padding: 1 }}>
                            <CardMedia component={'img'} image={details?.urlToImage} alt={details?.description} />
                        </AspectRatio>
                        <CardContent>
                          <Typography gutterBottom variant="h5" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', 
                            display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}  component="div"
                          > {details?.title} </Typography>
                          <Typography sx={{
                            overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical'
                          }}
                            gutterBottom variant='h6'> {details?.description} </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" variant={'contained'} fullWidth>
                            <Link component={RouterLink} to={details?.url} target="_blanks" sx={{ textDecoration: 'none', color: 'white' }} >Read More</Link>
                          </Button>
                        </CardActions>
                      </Card>
                  }
                </Grid>
                )
            )
          })
        }
      </Grid>
    </Box>
  );
}

export default ProductCard;
