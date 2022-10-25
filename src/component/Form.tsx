import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSlideAnimation } from '../util/animationHooks'; 
import { type allowComponentProp } from '../util/typeUtil';
import { animated } from '@react-spring/web';

const AnimatedGridItem: allowComponentProp<typeof Grid> = animated(Grid)



const Form = (): JSX.Element => {
    const screen_700 = useMediaQuery('(max-width: 700px)')

    const [formInputs, setFormInputs] = useState<{
        email: string,
        message: string,
        name?: string,
        subject?: string

    }>({ email: '', message: '', name: '', subject: '' })


    const [popOpen, setpopOpen] = useState<{
        content: string,
        colorStatus: string,
        open: boolean
    }>(
        {
            content: '',
            colorStatus: '',
            open: false
        }
    )


    useEffect(() => {
        window.addEventListener('click', handlePopClose)
        return () => {
            window.removeEventListener('click', handlePopClose)
        }
    })

    const handlePopClose = (): void => {
        setpopOpen((prev) => ({
            ...prev,
            open: false
        }))
    }





    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


    const sendEmail = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response = await emailjs.send('service_8i4p5do', 'template_lcztgy6', formInputs, 'fXd413wtNKxbm83_9')

            setpopOpen({
                content: response.status === 200 ? 'Message Sent' : 'Something Went Wrong',
                colorStatus: response.status === 200 ? 'green' : 'error',
                open: true
            })


        } catch (e) {
            console.log(e)

            setpopOpen({
                content: 'Something Went Wrong',
                colorStatus: 'error',
                open: true
            })

        }
    }

    return (
        <Paper elevation={0} >
            <Grid
                data-testid='contact-form'
                container
                spacing={3}
                component='form'
                onSubmit={sendEmail}
            >
                <AnimatedGridItem style={useSlideAnimation(-1200)} item xs={12} sm={6}>
                    <TextField
                        id='name'
                        name='name'
                        label='Name'
                        fullWidth
                        autoComplete='given-name'
                        variant='standard'
                        value={formInputs.name}
                        onChange={handleChange}
                    />
                </AnimatedGridItem>
                <AnimatedGridItem style={useSlideAnimation(-900)} item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        type='email'
                        label='Email'
                        fullWidth
                        autoComplete='email'
                        variant='standard'
                        value={formInputs.email}
                        onChange={handleChange}

                    />
                </AnimatedGridItem>
                <AnimatedGridItem style={useSlideAnimation(-1500)} item xs={12} >
                    <TextField
                        id='subject'
                        name='subject'
                        label='Subject'
                        fullWidth
                        autoComplete='given-name'
                        variant='standard'
                        value={formInputs.subject}
                        onChange={handleChange}

                    />
                </AnimatedGridItem>
                <AnimatedGridItem style={useSlideAnimation(-1800)} item xs={12} >
                    <TextField
                        required
                        id='message'
                        name='message'
                        label='Message'
                        fullWidth
                        multiline
                        rows={6}
                        variant='standard'
                        value={formInputs.message}
                        onChange={handleChange}

                    />
                </AnimatedGridItem>
                <AnimatedGridItem style={useSlideAnimation(-2100)} item xs={12} sm={6}>
                    <Button type='submit' sx={{ mt: 1 }} variant='outlined'>Contact  Me! </Button>

                </AnimatedGridItem>
            </Grid>


            <Popover
                open={popOpen.open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: window.innerHeight - 100, left: screen_700 ? window.innerWidth - 110 : window.innerWidth - 200 }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                color='success'
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography color={popOpen.colorStatus} sx={{ p: 2 }}>{popOpen.content}</Typography>
            </Popover>

        </Paper>
    )
}



export default Form; 