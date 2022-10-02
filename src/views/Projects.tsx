import Grid from "@mui/material/Grid"
import PCard from '../component/PCard'
import Container from "@mui/material/Container"

const Projects = (): JSX.Element => {
    return (
        <Container sx={{ my: 10 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <PCard />
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}



export default Projects; 