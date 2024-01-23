import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css"

const Cardtemplate = (props) => {
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 385}}>
      <CardMedia
        sx={{ height: 280}}
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.linkbt}>{props.button}</Button>
      </CardActions>
    </Card>
        
        
        </div>

    )

}

export default Cardtemplate