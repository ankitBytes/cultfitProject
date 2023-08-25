import { Box, Grid, Typography, Button } from "@mui/material"

import { css } from "@emotion/react"
import PassHome from "../passSection/pass";

const HeroSection = () => {
    return(
        <Box>
            <Grid container maxWidth={"lg"} sx={css`
                background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/a43278b2-bf11-4976-bd96-ffa71bb9e0f5.png");
                background-position: center;
                background-repeat: no-repeat;
                height: 100vh;
                background-size: cover;
                margin-top: 8vh;
                display: flex;
                flex-direction: column;
                justify-content: end;
            `}>
                <Box sx={css`
                    display: flex;
                    justify-content: center;
                `}>
                    <Button sx={css`
                        background-color: #fafafa;
                        padding: 1vh 1vw;
                        text-transform: uppercase;
                        font-weight: bold;
                        color: orange;
                        top: 8vh;

                        &:hover {
                            color: #000;
                            background-color: #fafafa;
                        }
                    `}>
                        Try For Free
                    </Button>
                </Box>
                <PassHome />
            </Grid>
        </Box>
    )
}

export default HeroSection;