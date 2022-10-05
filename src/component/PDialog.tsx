import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



interface PDProps {
  title?: string,
  sourceCodeLink?: string,
  link?: string,
  imgs: string[]
  open: boolean,
  handleClose: () => void
}

const PDialog = ({ sourceCodeLink = '#', link = '#', imgs, title = 'default title', open, handleClose }: PDProps): JSX.Element => {

  const [current, setCurrent] = useState<number>(0)

  const handleNext = () => {
    if (current < imgs.length - 1) setCurrent((previous) => previous + 1)
  }


  const handlePrevious = () => {
    if (current > 0) setCurrent((previous) => previous - 1)
  }

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (

    <Dialog
      
      open={open}
      onClose={handleClose}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>
        <Card sx={{ maxWidth: 600 , mb: 2}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500"
            width="600"
            image={imgs[current]}
          />

          <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}>
            <Button size="small" disabled={(current === 0)} onClick={handlePrevious}>
               <ArrowBackIosNewIcon />
            </Button>
            <Button size="small" disabled={(current === imgs.length - 1)} onClick={handleNext}>
               <ArrowForwardIosIcon />
            </Button>
          </CardActions>
        </Card>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {[...new Array(1)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button href={sourceCodeLink}>
          <GitHubIcon sx={{ mr: 1 }} /> source code
        </Button>
        <Button href={link}>
          <LinkIcon sx={{ mr: 1 }} /> Link
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>

  );
}


export default PDialog