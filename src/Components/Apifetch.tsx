import getImageApi from "./getImageApi";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";

const Apifetch = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImageApi().then((data: any) => {
      setImages(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Grid2 container spacing={10} sx={{ m: 5, marginTop: 10 }}>
        {images.map((image: any) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={image.id}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
              }}
              alt={image.title}
              src={image.download_url}
            />
            <Typography textAlign="center">{image.author}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
export default Apifetch;
