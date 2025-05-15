import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const placeholderImages = [
  "https://picsum.photos/id/10/600/400",
  "https://picsum.photos/id/20/600/400",
  "https://picsum.photos/id/30/600/400",
  "https://picsum.photos/id/40/600/400",
  "https://picsum.photos/id/50/600/400",
  "https://picsum.photos/id/60/600/400",
];

const generateBlogData = () => {
  const titles = [
    "The Art of Sculpture Making",
    "Ancient Techniques in Modern Art",
    "Exploring Cultural Heritage",
    "Materials That Shape History",
    "From Clay to Masterpiece",
    "Preserving Traditional Crafts",
  ];

  return titles.map((title, index) => ({
    id: index + 1,
    title,
    image: placeholderImages[index],
    shortDesc:
      "Discover the fascinating journey from raw materials to timeless artistry in this detailed exploration.",
    fullDesc:
      "In this article, we delve into the meticulous process of transforming raw clay into a finished sculpture, highlighting each phase including molding, carving, drying, and firing. This tradition, steeped in cultural heritage, continues to evolve with modern interpretations while preserving the essence of its roots...",
    date: "May 15, 2025",
    author: "Rudra Arts",
  }));
};

const blogData = generateBlogData();

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Container sx={{ py: 13 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Artisan Blog
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Discover the world of traditional craftsmanship and stories behind
          each masterpiece.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogData.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ maxWidth: 345, mx: "auto", borderRadius: 3, boxShadow: 4 }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="author">
                    {blog.author[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={blog.title}
                subheader={blog.date}
              />
              <CardMedia
                component="img"
                height="194"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {blog.shortDesc}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedId === blog.id}
                  onClick={() => handleExpandClick(blog.id)}
                  aria-expanded={expandedId === blog.id}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                in={expandedId === blog.id}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph>{blog.fullDesc}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
