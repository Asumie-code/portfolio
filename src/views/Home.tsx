import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'



const Home = (): JSX.Element => {
    return (
        <>
           
            <Container sx={{my: 10}} >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            px: 5,
                            py: 6,
                            width: 0.6

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

                            }}
                        >
                            Hi,<br /> I'm Issam <br /> Web developer.
                        </Typography>
                        <Typography
                            component='p'
                            sx={{

                            }}
                        >
                            Lorem,  ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Button variant='outlined'>Contact  Me! </Button>
                    </Paper>
                </Box>

            </Container>
        </>
    )
}



export default Home; 