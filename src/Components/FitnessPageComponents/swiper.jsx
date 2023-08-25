import { Swiper, SwiperSlide } from "swiper/react";

import "../../Styles/Swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Box, Grid, Typography, Stack } from "@mui/material";

import { css } from "@emotion/react";

const ImageSwiper = () => {
  return (
    <Box
      sx={css`
        display: flex;
        justify-content: center;
        background-color: #05012c;
      `}
    >
      <Grid container maxWidth={"lg"}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <Grid item xs={12}>
            <SwiperSlide
              style={{
                background:
                  "url(https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/a8d63c6f-0fd7-48d9-b95e-0edb53c0b1db.png)",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Slide 1
            </SwiperSlide>
          </Grid>
          <Grid item xs={12}>
          <SwiperSlide
            style={{
              background: `url('https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/ef47bcb2-c25c-4753-8880-fa588910c092.jpg')`,
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            Slide 2
          </SwiperSlide>
          </Grid>
          <Grid item xs={12}>
          <SwiperSlide
            style={{
              background:
                "url(https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/dd4fa05e-d599-4a1f-b23f-5f65fb7ca2b7.jpg)",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Stack direction={{md: 'row', sm: 'column'}} width={"100%"}>
              <Box sx={{width: '50%'}}>
                <Typography>Upto 5 months extension free</Typography>
                <Typography>on cult pass HOME</Typography>
              </Box>
              <Box sx={{width: '50%'}}>
                <Typography>Ends In</Typography>
                <Box>
                  
                </Box>
              </Box>
            </Stack>
          </SwiperSlide>
          </Grid>
          <Grid item xs={12}>
          <SwiperSlide
            style={{
              background:
                "url(https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/840392e5-7a2c-4f23-9d7c-14f9be6c77f3.jpg)",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            Slide 4
          </SwiperSlide>
          </Grid>
        </Swiper>
      </Grid>
    </Box>
  );
};

export default ImageSwiper;
