import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const MiniArticle = (props) => {
  const { title, imgSrc } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgSrc} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MiniArticle;

const useStyles = makeStyles({
  root: {
    minWidth: 750,
  },
  media: {
    height: 140,
  },
});
