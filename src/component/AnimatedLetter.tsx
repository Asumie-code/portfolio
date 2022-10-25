import Typography from '@mui/material/Typography'
import { animated, useSpring, config } from '@react-spring/web'
import { type allowComponentProp, } from '../util/typeUtil'


const AnimatedTypography: allowComponentProp<typeof Typography> = animated(Typography)

interface animatedLetterProps {
    letter?: string,
    color?: string,
    hoverColor?: string
}

const AnimatedLetter = ({ letter = 'A', color = '#fff', hoverColor = '#ffe2653' }: animatedLetterProps): JSX.Element => {


    const [letterAnimation, setLetterAnimation] = useSpring(() => ({

        scaleX: 1,
        scaleY: 1,
        color: color === 'primary' ? '#577BFF' : color,
        config: {
            ...config.wobbly,
            mass: 2,
            tension: 1000
        },
    }))


    return (
        <AnimatedTypography
            data-testid='animated-typography'
            component='span'
            style={letterAnimation}
            onMouseEnter={() => setLetterAnimation({ loop: true, color: hoverColor, scaleY: 1.5, scaleX: 0.8 })}
            onMouseLeave={() => setLetterAnimation({ color: color === 'primary' ? '#577BFF' : color, scaleY: 1, scaleX: 1 })}
            color={color}
            sx={{
                display: 'inline-block'
            }}
        >
            {letter}
        </AnimatedTypography>
    )
}


export default AnimatedLetter