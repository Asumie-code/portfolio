import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'



const Home = (): JSX.Element => {
    return (
        <>
            <CssBaseline />
            <Container >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            px: 5,
                            py: 6,

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
                            Lorem,<br /> ipsum dolor <br /> sit amet.
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