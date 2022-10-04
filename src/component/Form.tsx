import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'





const Form = (): JSX.Element => {
    return (
        <Paper elevation={0} sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id='name'
                        name='name'
                        label='Name'
                        fullWidth
                        autoComplete='given-name'
                        variant='standard'
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button sx={{mt: 1}} variant='outlined'>Contact  Me! </Button>

                </Grid>
            </Grid>
        </Paper>
    )
}



export default Form; 