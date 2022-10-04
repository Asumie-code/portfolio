import Form from "../component/Form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Contact = (): JSX.Element => {
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

        </>
    )
}



export default Contact; 