"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { theme } from '../theme';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

type CardInfoProps = {
  startIcon: any,
  title: string;
}

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function CardInfo({startIcon, title}: CardInfoProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%", padding: "0px 30px", backgroundColor: theme.palette.secondary.main }}>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
          <IconButton sx={{color: "white"}}>
            {startIcon}
          </IconButton>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={<Typography color="white">{title}</Typography>}
        //subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/seed/picsum/200/300"
        alt="Paella dish"
      />
      {/* <Image src="https://picsum.photos/seed/picsum/200/300" alt="Paella dish" unoptimized width={200} height={300} /> */}
      <CardContent>
      <Typography variant="h5" color="white">
          Leading Crypto Casino
        </Typography>
        <Typography variant="h6" color="white">
          Leading Crypto Casino More Text to be Written
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button fullWidth variant="contained" style={{backgroundColor: "#2556e8"}}>{`Go to ${title}`}</Button>
      </CardActions>
    </Card>
  );
}