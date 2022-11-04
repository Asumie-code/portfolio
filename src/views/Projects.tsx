import Grid from "@mui/material/Grid"
import PCard from '../component/PCard'
import data from '../assets/data/data'
import useMediaQuery from '@mui/material/useMediaQuery'


const Projects = (): JSX.Element => {
    const screen_700 = useMediaQuery('(max-width: 700px)')
    return (
            <Grid  sx={{overflow: 'hidden', minHeight: 700}}alignItems='center' direction={screen_700? 'column' : 'row' } container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((project, index) => (
                    <Grid item  xs={2} sm={4} md={3} key={index}>
                        <PCard delay={100*(index**2)}imgs={project.imgs} sourceCodeLink={project.sourceCodeLink} link={project.link} mainImage={project.mainImage} projectTitle={project.title} desc={project.desc}/>
                    </Grid>
                ))}
            </Grid> 

    )
}



export default Projects; 