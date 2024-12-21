import { Box, Grid } from "@chakra-ui/react";
import { HomeDescText, HomeText } from "./HomeText";
import { GridBox } from "./GridBox";

export const LowerSection = ({handleChange, heading, description, img, handleSection, category }) => {
    return (
        <Box
            m={'60px auto 60px'}
            w={['94%', '94%', '94%', '94%', '80%']}
            textAlign={'center'}
        >
            <HomeText>{heading}</HomeText>
            <HomeDescText>{description}</HomeDescText>

            <Grid
                onClick={() => {handleChange(category)}}
                gap={['10px', '10px', '10px', '10px', '20px']}
                templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]}
            >
                <GridBox source={img[0]} />
                <GridBox source={img[1]} />
                <GridBox source={img[2]} />
                <GridBox source={img[3]} />
            </Grid>
        </Box>
    );
}