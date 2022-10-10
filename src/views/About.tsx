import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import aboutSketch from '../sketches/aboutSketch'
import Sketch from 'react-p5'


const AboutBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden',
    minWidth: 400,
    minHeight: 400,
    

});



const About = (): JSX.Element => {

    const matches = useMediaQuery('(max-width: 700px)')



    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: matches ? 'column' : 'row',
                    '& > :not(style)': {
                        px: 5,
                        py: 6,
                        width: matches ? 1 : 0.5
                    },
                }}
            >
                <Paper
                    sx={{
                        px: 6
                    }}
                >
                    <Typography
                        variant='h2'
                        component='h2'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches ? '2.8rem' :  '3.75rem'
                        }}
                    >
                        Lorem,<br /> ipsum dolor <br /> sit amet.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches?  '0.8rem' : '1rem'
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches?  '0.8rem' : '1rem'

                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores. distinctio ex exercitationem asperiores
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches?  '0.8rem' : '1rem'

                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque,
                    </Typography>

                </Paper>
                <AboutBackground
                    sx={{ 
                        px: matches? 0 : 5
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