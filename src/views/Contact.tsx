import Form from "../component/Form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';


const Contact = (): JSX.Element => {

    const screen_700 = useMediaQuery('(max-width: 700px)')
    const screen_1290 = useMediaQuery('(max-width: 1290px)')

    return (
        <>

                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            px: 5,
                            py: 6,
                            width: screen_1290? 1 : 0.5
                        },
                    }}
                >
                    <Paper
                        sx={{
                            
                        }}
                    >
                        <Typography
                            color='primary'
                            variant='h2'
                            component='h2'
                            sx={{
                                mb: '1.5rem',
                                fontSize: screen_700? '2.8rem' : '3.25rem'
                            }}
                        >
                            Contact me
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                mb: '1.5rem',
                                fontSize: screen_700? '0.8rem' : '1rem'
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