import { Paper, Typography, } from "@mui/material";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import homeSketch from '../sketches/homeSketch'
import Sketch from 'react-p5'
import { animated, useSpring } from '@react-spring/web'
import { type allowComponentProp } from "../util/typeUtil";
import AnimatedLetter from "../component/AnimatedLetter";
import {colors, randomInt} from '../util/util'
import {useSlideAnimation} from '../util/animationHooks'

// work around to component prop issue, you can't export Animated button for some reason
const AnimatedButton: allowComponentProp<typeof Button> = animated(Button)
const AnimatedTypography: allowComponentProp<typeof Typography> = animated(Typography)







const HomeBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: -6.8,
    left: 0,
    zIndex: -1

});





const Home = (): JSX.Element => {


   
    const [buttonAnimation, set] = useSpring(() => ({
        from: {
            opacity: 0,
            translate: -900,
            scale: 1

        },
        to: {
            opacity: 1,
            translate: 0,
            scale: 1
        },
    }))

    const screen_700 = useMediaQuery('(max-width: 700px)')
    const screen_1290 = useMediaQuery('(max-width: 1290px)')

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        px: 5,
                        py: 6,
                        width: screen_1290 ? 1 : 0.5,
                    },
                    backgroundColor: 'transparent',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        px: 0,
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}
                >
                    <AnimatedTypography
                        variant='h1'
                        component='h1'
                        sx={{
                            fontSize: (screen_700 ? '3rem' : '5.2rem'),
                            fontWeight: 400,
                            '& > span': {
                                fontSize: (screen_700 ? '3rem' : '5.2rem'),
                                fontWeight: 400,
                                lineHeight: '0'
                            }
                        }}
                        style={useSlideAnimation()}
                    >
                        {Array.from("Hi,").map((item, index) => (
                            <AnimatedLetter
                                key={`${index}_${item}`}
                                hoverColor={colors[randomInt(colors.length)]}
                                letter={item}
                            />

                        ))}
                        <br />
                        {Array.from("I'm").map((item, index) => (
                            <AnimatedLetter
                                key={`${index}_${item}`}
                                hoverColor={colors[randomInt(colors.length)]}
                                letter={item}
                            />

                        ))} {Array.from("Issam").map((item, index) => (item === ' ' ? ' ' :
                            <AnimatedLetter
                                key={`${index}_${item}`}
                                hoverColor={colors[randomInt(colors.length)]}
                                letter={item}
                                color='primary'
                            />

                        ))}


                        <br />
                        {Array.from("Web developer.").map((item, index) => (item === ' ' ? ' ' :
                            <AnimatedLetter
                                key={`${index}_${item}`}
                                hoverColor={colors[randomInt(colors.length)]}
                                letter={item}
                            />

                        ))}

                    </AnimatedTypography>
                    <Typography
                        component='p'
                        sx={{
                            mb: 3,
                            fontSize: (screen_700 ? '0.75rem' : '1rem')
                        }}
                    >
                        Lorem,  ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <AnimatedButton
                        onMouseEnter={() => set({ scale: 1.1 })}
                        onMouseLeave={() => set({ scale: 1 })}
                        component={NavLink}
                        to='/contact'
                        sx={{
                            width: screen_700 ? .8 * 220 : 220,
                            height: screen_700 ? .8 * 50 : 50,

                        }}
                        style={buttonAnimation}
                        variant='outlined'
                    >
                        Contact  Me!
                    </AnimatedButton>

                </Paper>
            </Box>
            <HomeBackground mouseMoved={homeSketch.mouseMoved} windowResized={homeSketch.windowResized} setup={homeSketch.setup} draw={homeSketch.draw} />

        </>
    )
}



export default Home; 