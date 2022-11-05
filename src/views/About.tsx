import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import aboutSketch from '../sketches/aboutSketch'
import Sketch from 'react-p5'
import { type allowComponentProp } from "../util/typeUtil";
import { animated } from '@react-spring/web'
import { useSlideAnimation } from "../util/animationHooks";
import AnimatedLetter from "../component/AnimatedLetter";
import { colors, randomInt } from '../util/util'
import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom';



// work around to component prop issue, you can't export this component for some reason
const AnimatedTypography: allowComponentProp<typeof Typography> = animated(Typography)



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
                    <AnimatedTypography
                        color='primary'
                        variant='h2'
                        component='h2'
                        sx={{
                            mb: '1.5rem',
                            '& > span': {
                                fontSize: screen_700 ? '2.3rem' : '3.75rem', 
                                lineHeight: '0'

                            }
                        }}
                        style={useSlideAnimation()}
                    >
                        {Array.from('Intro,').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        <br />
                        {Array.from('About Me').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'
                        }}
                        style={useSlideAnimation(-900)}
                    >
                      I'm a Full Stack Web Developer located in Tunisia. I'm passionate about building software and UI. I like everything that is related to visual design. from animation to interesting UI designs. 
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                        style={useSlideAnimation(-1200)}
                    >
                     Highly-organised person, problem solver, attentive to details. I like to draw and  3d model and  read, Feel free to check my art <Link href='https://www.artstation.com/asumie_art' underline='none'>portfolio</Link>. I like to use my coding skills in my everyday life ex: scrapping the web and generating assets for my art. 
                     I speak English and Arabic, I can read and understand french.
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                        style={useSlideAnimation(-1500)}
                    >
                        Interested in Front-end and Machine Learning. and building unique UI.  
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                        style={useSlideAnimation(-1800)}
                    >
                         <Link component={NavLink} to='/contact' underline='none'>Let's make something speacial</Link>
                    </AnimatedTypography>

                </Paper>
                <AboutBackground
                    sx={{
                        px: screen_700 ? 0 : 5
                    }}
                    preload={aboutSketch.preload}
                    mousePressed={aboutSketch.mousePressed}
                    windowResized={aboutSketch.windowResized}
                    setup={aboutSketch.setup}
                    draw={aboutSketch.draw}
                />

            </Box>

        </>
    )
}



export default About; 