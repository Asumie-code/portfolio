import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';
import { styled } from "@mui/system";
import homeSketch from '../sketches/homeSketch'
import Sketch from 'react-p5'

const HomeBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: -7,
    left: -8,
    zIndex: -1

});





const Home = (): JSX.Element => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        px: 5,
                        py: 6,
                        width: 0.5,
                    },
                    backgroundColor: 'transparent',
                }}
            >
                <Paper
                    sx={{
                        px: 0,
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}
                >
                    <Typography
                        variant='h1'
                        component='h1'
                        sx={{
                            mb: 3,
                            fontSize: '5.5rem',
                            fontWeight: 400,

                        }}
                    >
                        Hi,<br />I'm Issam<br />Web developer.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: 3
                        }}
                    >
                        Lorem,  ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Button
                        component={NavLink}
                        to='/portfolio/contact'
                        sx={{ width: 220, height: 50 }}
                        variant='outlined'
                    >
                        Contact  Me!
                    </Button>
                </Paper>
            </Box>
            <HomeBackground mouseMoved={homeSketch.mouseMoved} windowResized={homeSketch.windowResized} setup={homeSketch.setup} draw={homeSketch.draw} />

        </>
    )
}



export default Home; 