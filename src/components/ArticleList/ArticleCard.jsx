import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { TopicRounded } from "@mui/icons-material";

export const ArticleCard = ({ articleData }) => {
  return (
    <Card sx={{ width: 345, height: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar" >
              {articleData.author[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={articleData.title}
          subheader={new Date(articleData.created_at).toLocaleDateString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={articleData.article_img_url}
          alt=""
          sx={{ objectFit: 'cover'}} 
        />
        <CardContent sx={{ padding: "0 1rem", marginTop: "1rem", display: 'flex', gap: '1rem' }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <Chip icon={<AccountCircleIcon fontSize="small" color="primary"/>} label={articleData.author} variant="outlined" />
        <Chip icon={<TopicRounded fontSize="small" color="primary"/>} label={articleData.topic} variant="outlined" />
        </Box>
        </CardContent>
      </div>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "flex-end", alignItems: "center" }}
      >
        <Link to={`/articles/${articleData.article_id}`}>
          <Button>
            View <ArrowRightIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
