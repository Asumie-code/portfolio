import Grid from "@mui/material/Grid"
import PCard from '../component/PCard'
import data from '../assets/data/data'
import useMediaQuery from '@mui/material/useMediaQuery';


const Projects = (): JSX.Element => {
    const matches = useMediaQuery('(max-width: 700px)')


    return (
            <Grid  alignItems='center' direction={matches? 'column' : 'row' } container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((project, index) => (
                    <Grid item xs={2} sm={4} md={3} key={index}>
                        <PCard imgs={project.imgs} sourceCodeLink={project.sourceCodeLink} link={project.link} mainImage={project.mainImage} projectTitle={project.title}/>
                    </Grid>
                ))}
            </Grid>

    )
}



export default Projects; 