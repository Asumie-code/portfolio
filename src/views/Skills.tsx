import { Paper, Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const skills = [
    {
        name: 'Front-end',
        value: 75
    },
    {
        name: 'Back-end',
        value: 75
    },
    {
        name: 'ReactJS',
        value: 50
    },
    {
        name: 'NodeJS',
        value: 50
    },
]

const Skills = (): JSX.Element => {
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
                            pl: 5
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
                    <Paper
                        sx={{

                        }}
                    >
                        <List>
                            {skills.map((skill) => (
                                <ListItem key={skill.name} sx={{display: 'inline-block'}}>
                                    <Typography
                                        variant='h6'
                                        component='h6'

                                    >
                                        {skill.name}
                                    </Typography>
                                    <Slider disabled defaultValue={skill.value} aria-label="Disabled slider" />
                                </ListItem>
                            ))}
                        </List>


                    </Paper>
                </Box>

        </>
    )
}



export default Skills; 