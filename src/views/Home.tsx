import { Paper, Typography, } from "@mui/material";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import homeSketch from '../sketches/homeSketch'
import Sketch from 'react-p5'
import { animated, useSpring } from '@react-spring/web'

type allowComponent<muiComponentType> = ReturnType<typeof animated> | muiComponentType
const AnimatedButton: allowComponent<typeof Button> = animated(Button)
const AnimatedTypography: allowComponent<typeof Typography> = animated(Typography)



const HomeBackground = styled(Sketch)({
    margin: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: -6.8,
    left: 0,
    zIndex: -1

});





const Home = (): JSX.Element => {


    const styles = useSpring({
        from: {
            opacity: 0,
            translate: -300
        },
        to: {
            opacity: 1,
            translate: 0
        }
    })



    const [value, set] = useSpring(() => ({
        from: {
            opacity: 0,
            translate: -300,
            y: 100,
            color: '#fff',

        },
        to: {
            opacity: 1,
            translate: 0,
            y: 100,
            color: '#fff'
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
                            }
                        }}
                        style={styles}
                    >
                        Hi,<br /> I'm<Typography color='primary' component='span'> Issam</Typography><br />Web developer.
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
                        onMouseEnter={() => set({ y: 0, color: "#000" })}
                        onMouseLeave={() => set({  y: 100, color: "#fff" })}
                        component={NavLink}
                        to='/contact'
                        sx={{
                            width: screen_700 ? .8 * 220 : 220,
                            height: screen_700 ? .8 * 50 : 50,
                        }}
                        style={value}
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