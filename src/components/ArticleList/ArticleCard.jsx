import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ArticleCard = ({ articleData }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 420 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {articleData.author[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={articleData.title}
        subheader={Date(articleData.created_at)}
      />
      <CardMedia
        component="img"
        height="194"
        image={articleData.article_img_url}
        alt=""
      />
      <CardContent sx={{ padding: "0 1rem", marginTop: "1rem" }}>
        <Typography variant="body2" color="text.secondary">
          Author: {articleData.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Topic: {articleData.topic}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "flex-end", alignItems: "center" }}
      >
        <Link to={`${articleData.article_id}`}>
          <Button>
            View <ArrowRightIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
