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
                        {Array.from('Lorem,').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        <br />
                        {Array.from('ipsum dolor').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        <br />
                        {Array.from('sit amet.').map((item, index) => (
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                        style={useSlideAnimation(-1200)}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores. distinctio ex exercitationem asperiores
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: screen_700 ? '0.8rem' : '1rem'

                        }}
                        style={useSlideAnimation(-1500)}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque,
                    </AnimatedTypography>

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