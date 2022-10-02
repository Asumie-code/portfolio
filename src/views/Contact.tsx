import Form from "../component/Form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Contact = (): JSX.Element => {
    return (
        <>

            <Container sx={{ my: 10 }} >
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
                            
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Contact me
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                mb: '1.5rem'
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis provident sint neque cumque, quas perspiciatis modi eveniet magnam, natus aliquid ipsum distinctio ex exercitationem asperiores.
                        </Typography>
                        <Form />
                    </Paper>
                </Box>

            </Container>
        </>
    )
}



export default Contact; 