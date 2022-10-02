import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"



const About = (): JSX.Element => {
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
                </Box>

            </Container>
        </>
    )
}



export default About; 