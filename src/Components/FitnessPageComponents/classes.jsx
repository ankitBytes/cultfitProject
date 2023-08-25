import { Box, Grid, Typography, Button } from "@mui/material";
import { css } from "@emotion/react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../Styles/classesSwiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ClassesCard = () => {
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            background: '#000'
        }}>
        <Grid container maxWidth={"lg"}> 

        <Grid item sx={{
            width: '100%',
            textAlign: 'center',
            padding: '5vh 0',
        }}> 
            <Typography variant="h5" sx={{
                color: 'rgb(255 255 255 / 80%)'
            }}>AT-CENTER</Typography>
            <Typography variant="h3" sx={{
                color: '#fafafa',
                fontWeight: 'bold',
                paddingTop: '1rem'
            }}>Trainer-led group classes</Typography>
        </Grid>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/c88b72d2-8962-47f3-894b-165c20c34b05.jpeg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{height: '60vh'}}>
            <Box sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                transition: all 0.5s;

                &:hover {
                    scale: 1.1;
                    .button {
                        display: flex;
                    }
                }
            `}>
                <Button className="button" sx={{
                    bottom: 0,
                    top: '85%',
                    background: 'rgb(255 255 255 / 10%)',
                    color: '#fafafa',
                    fontWeight: 'bold',
                    display: 'none',
                    left: '35%',

                    "&:hover" : {
                        background: 'rgb(255 255 255 / 20%)'
                    }
                }}>Explore</Button>
            </Box>
        </SwiperSlide>
      </Swiper>
      </Grid>
      </Box>
    )
}

export default ClassesCard;