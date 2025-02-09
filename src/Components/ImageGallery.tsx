import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

const ImageGallery = ({ images }) => {
  return (
    <Grid container spacing={4} sx={{ m: 5, marginTop: 10 }}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <Box
            component="img"
            sx={{ width: "100%", height: "100%" }}
            alt={image.author}
            src={image.download_url}
          />
          <Typography textAlign="center">{image.author}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
