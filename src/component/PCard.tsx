import  {useState } from 'react' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PDialog from './PDialog'


interface PCardProps {
  img: string,
  projectTitle?: string, 
}

const PCard = ({projectTitle = 'Default Title', img}: PCardProps): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen =  () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Card>
    <PDialog title={projectTitle} open={open} handleClose={handleClose} />
    </div>
  );
}


export default PCard; 