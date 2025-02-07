import getImageApi from "./getImageApi";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";

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
      <Grid2 container spacing={2} sx={{ m: 5 }}>
        {images.map((image: any) => (
          <Grid2 size={{ xs: 12, sm: 8, md: 4 }} key={image.id}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt={image.title}
              src={image.download_url}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
export default Apifetch;
