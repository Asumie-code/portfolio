import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import aboutSketch from '../sketches/aboutSketch'
import Sketch from 'react-p5'


const AboutBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden',

});



const About = (): JSX.Element => {

    const screen_700 = useMediaQuery('(max-width: 700px)')

    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: screen_700 ? 'column' : 'row',
                    '& > :not(style)': {
                        px: 5,
                        py: 6,
                        width: screen_700 ? 1 : 0.5,

                    },
                }}
            >
                <Paper>
                    <Typography
                        color='primary'
                        variant='h2'
                        component='h2'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '2.8rem' : '3.75rem'
                        }}
                    >
                        Lorem,<br /> ipsum dolor <br /> sit amet.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores. distinctio ex exercitationem asperiores
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque,
                    </Typography>

                </Paper>
                <AboutBackground
                    sx={{
                        px: screen_700 ? 0 : 5
                    }}
                    mouseMoved={aboutSketch.mouseMoved}
                    windowResized={aboutSketch.windowResized}
                    setup={aboutSketch.setup}
                    draw={aboutSketch.draw}
                />

            </Box>

        </>
    )
}



export default About; 