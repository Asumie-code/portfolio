import Form from "../component/Form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from "../component/Map";
import { type allowComponentProp } from "../util/typeUtil";
import { animated } from '@react-spring/web'
import { useSlideAnimation } from "../util/animationHooks";
import AnimatedLetter from "../component/AnimatedLetter";
import { colors, randomInt } from '../util/util'



// work around to component prop issue, you can't export this component for some reason
const AnimatedTypography: allowComponentProp<typeof Typography> = animated(Typography)



const Contact = (): JSX.Element => {

    const screen_700 = useMediaQuery('(max-width: 700px)')
    const screen_1290 = useMediaQuery('(max-width: 1290px)')

    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: screen_700 ? 'column' : 'row',
                    '& > :not(style)': {
                        px: 5,
                        py: 6,
                        width: screen_1290 ? 1 : 0.5
                    },
                }}
            >
                <Paper
                    sx={{

                    }}
                >
                    <AnimatedTypography
                        color='primary'
                        variant='h2'
                        component='h2'
                        sx={{
                            mb: '1.5rem',
                            '& > span': {
                                fontSize: screen_700 ? '2.3rem' : '3.25rem',
                                lineHeight: '0'
                                
                            }
                        }}
                        style={useSlideAnimation()}
                    >
                        {Array.from('Contact me').map((item, index) => (
                            item === ' '? ' ' : 
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
                        style={useSlideAnimation(-600)}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                    </AnimatedTypography>
                    <Form />
                </Paper>
                <Paper>
                    <Map />
                </Paper>
            </Box>

        </>
    )
}



export default Contact; 