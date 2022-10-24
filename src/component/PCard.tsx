import  {useState } from 'react' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PDialog from './PDialog'
import { useScaleAnimation } from "../util/animationHooks";
import { type allowComponentProp } from '../util/typeUtil';
import { animated } from '@react-spring/web';

const AnimatedCard: allowComponentProp<typeof Card> = animated(Card)


interface PCardProps {
  mainImage: string,
  projectTitle?: string,
  sourceCodeLink?: string, 
  link?: string,
  imgs: {original: string}[],
  delay?: number
}

const PCard = ({imgs, link, sourceCodeLink, projectTitle = 'Default Title', mainImage, delay}: PCardProps): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen =  () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>

    <AnimatedCard sx={{ '&:hover': {boxShadow: '0px 0px 5px 5px  #2E4FF2'},maxWidth: 345 }} style={useScaleAnimation(delay)}>
      <CardActionArea sx={{}}onClick={handleOpen}>
        <CardMedia
          component="img"
          height="240"
          image={mainImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
        </CardContent>
      </CardActionArea >
    </AnimatedCard>
    <PDialog imgs={imgs} link={link} sourceCodeLink={sourceCodeLink} title={projectTitle} open={open} handleClose={handleClose} />
    </div>
  );
}


export default PCard; 