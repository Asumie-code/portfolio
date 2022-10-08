import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import { styled } from "@mui/system";
import aboutSketch from '../sketches/aboutSketch'
import Sketch from 'react-p5'


const AboutBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden'

});



const About = (): JSX.Element => {
    return (
        <>
           
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            px: 5,
                            py: 6,
                            width: 0.5
                        },
                    }}
                >
                    <Paper 
                        sx={{
                            pl: 2
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Lorem,<br /> ipsum dolor <br /> sit amet.
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores. distinctio ex exercitationem asperiores
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, 
                        </Typography>
                        
                    </Paper>
                <AboutBackground mouseMoved={aboutSketch.mouseMoved} windowResized={aboutSketch.windowResized} setup={aboutSketch.setup} draw={aboutSketch.draw} />
                </Box>

        </>
    )
}



export default About; 