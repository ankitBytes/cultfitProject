import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Detail = () => {
  return (
    <Box>
      <Grid
        container
        display={"flex"}
        width={"100%"}
        justifyContent={"space-evenly"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item md={4} width={"100%"}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
              alt=""
              style={{ width: "100%" }}
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </Grid>
          <Grid item md={4} width={"100%"}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
              alt="image2"
              style={{
                width: "100%",
              }}
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20vh 0",
          }}
        >
          <Grid item md={3.5} xs={8}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_3,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
              alt=""
              style={{ width: "100%" }}
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </Grid>
          <Grid item md={3.5} xs={8}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
              alt=""
              style={{ width: "100%", padding: "10vh 0 0 0" }}
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </Grid>
          <Grid item md={3.5} xs={8}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
              alt=""
              style={{ width: "100%" }}
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </Grid>
        </Box>

        <Box
          sx={{
            background: `url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"), url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg")`,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left, right",
            backdropFilter: "blur(15px)",
          }}
        >
          <Grid
            maxWidth={"lg"}
            sx={{
              display: "flex",
            }}
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
          </Grid>
          <Grid
            maxWidth={"lg"}
            sx={{
              display: "flex",
              paddingTop: "3vh",
            }}
            data-aos="zoom-out"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid item md={3}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-8.png"
                alt=""
                style={{ width: "95%", borderRadius: "1rem" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Detail;
