import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';




const Home = (): JSX.Element => {
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
                        variant='h1'
                        component='h1'
                        sx={{
                            mb: 3,
                            fontWeight: 400

                        }}
                    >
                        Hi,<br /> I'm Issam <br /> Web developer.
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            mb: 3
                        }}
                    >
                        Lorem,  ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Button
                        component={NavLink}
                        to='/contact'
                        sx={{ width: 220, height: 50 }}
                        variant='outlined'
                    >
                        Contact  Me!
                    </Button>
                </Paper>
            </Box>

        </>
    )
}



export default Home; 