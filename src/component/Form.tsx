import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'





const Form = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id='firstName'
                    name='firstname'
                    label='First Name'
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
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                    variant='standard'
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    required
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
                    id='subject'
                    name='subject'
                    label='Subject'
                    fullWidth
                    autoComplete='given-name'
                    variant='standard'
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant='outlined'>Contact  Me! </Button>

            </Grid>
        </Grid>
    )
}



export default Form; 