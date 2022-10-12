import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'






const Form = (): JSX.Element => {

    const [formInputs, setFormInputs] = useState<{
        email: string,
        message: string,
        name?: string,
        subject?: string
        
    }>({ email: '', message: '', name: '', subject: '' })


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
            
        } catch (e) {
            // todo 
            console.log(e)
        }
    }

    return (
        <Paper elevation={0} >
            <Grid
                container
                spacing={3}
                component='form'
                onSubmit={sendEmail}
            >
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} >
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
                </Grid>
                <Grid item xs={12} >
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
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type='submit' sx={{ mt: 1 }} variant='outlined'>Contact  Me! </Button>

                </Grid>
            </Grid>
        </Paper>
    )
}



export default Form; 