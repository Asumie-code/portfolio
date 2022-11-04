import { Paper, Typography } from "@mui/material";
import Link from '@mui/material/Link'
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chart from '../component/Chart'
import { type allowComponentProp } from "../util/typeUtil";
import { animated } from '@react-spring/web'
import { useSlideAnimation } from "../util/animationHooks";
import { colors, randomInt } from '../util/util'
import AnimatedLetter from '../component/AnimatedLetter'
import { NavLink } from 'react-router-dom';




// work around to component prop issue, you can't export this component for some reason
const AnimatedTypography: allowComponentProp<typeof Typography> = animated(Typography)



const skills = [
    {
        name: 'Front-end',
        value: 85,
        color: '#B3D3FF',


    },
    {
        name: 'Back-end',
        value: 60,
        color: '#ED4D47',

    },
    {
        name: 'ReactJS',
        value: 78,
        color: 'primary',

    },
    {
        name: 'NodeJS',
        value: 65,
        color: '#2BAD43',

    },
]

const Skills = (): JSX.Element => {

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
                        pl: 5
                    }}
                >
                    <AnimatedTypography
                        color='primary'
                        variant='h2'
                        component='h2'
                        sx={{
                            mb: '1.5rem',
                            '& > span': {
                                fontSize: matches ? '2.3rem' : '3.75rem',
                                lineHeight: '0'

                            }
                        }}
                        style={useSlideAnimation()}
                    >
                        {Array.from('Skills &').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        <br />
                        {Array.from('Experience').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))}
                        {/* <br />
                        {Array.from('sit amet.').map((item, index) => (
                            item === ' ' ? ' ' :
                                <AnimatedLetter
                                    key={`${index}_${item}`}
                                    hoverColor={colors[randomInt(colors.length)]}
                                    letter={item}
                                    color='primary'
                                />
                        ))} */}
                        
                        
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches ? '0.8rem' : '1rem'
                        }}
                        style={useSlideAnimation(-600)}

                    >
                       I've been coding and programming for five years, through those five years I've been constantly learning and developing my skills, I am flexible when it comes to learning or using new technologies and concepts. 
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches ? '0.8rem' : '1rem'
                        }}
                        style={useSlideAnimation(-900)}

                    >
                        I can create responsive websites that are easy to use, and high-performing, that follows industry standards and best practices. My main field is front-end development, HTML, CSS, JS, TypeScript, building web apps, features, animations, and interactive UI.
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches ? '0.8rem' : '1rem'
                        }}
                        style={useSlideAnimation(-1200)}

                    >
                      As for the Back-end I have  comparable experience to my Front-end experience, I can Build API from scratch using technologies like NodeJS, ExpressJs, MongoDB. or Implement complex logic, like authentication, File streaming, or data handling 
                    </AnimatedTypography>
                    <AnimatedTypography
                        component='p'
                        sx={{
                            mb: '1.5rem',
                            fontSize: matches ? '0.8rem' : '1rem'
                        }}
                        style={useSlideAnimation(-1500)}

                    >
                        visit my <Link href='' underline='none'>LinkedIn</Link> to get to know me. or just <Link component={NavLink} to='/contact' underline='none'>contact</Link> me.
                    </AnimatedTypography>

                </Paper>
                <Paper
                    sx={{

                    }}
                >
                    <List>
                        {skills.map((skill, index) => (
                            <ListItem key={skill.name} sx={{ display: 'inline-block', mb: 5 }}>
                                <Typography
                                    variant='h6'
                                    component='h6'
                                    color={skill.color}
                                    sx={{
                                        fontSize: matches ? '1rem' : '1.25rem',
                                        mb: 1
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                                <Chart
                                    value={skill.value}
                                    backgroundColor='#373737'
                                    color={skill.color}
                                    speed={15 - (4 * index)}
                                />
                            </ListItem>
                        ))}
                    </List>


                </Paper>
            </Box>

        </>
    )
}



export default Skills; 