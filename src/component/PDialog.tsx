import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Card from '@mui/material/Card';
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import './pdialog.css'



interface PDProps {
  title?: string,
  sourceCodeLink?: string,
  link?: string,
  imgs: { original: string }[]
  open: boolean,
  handleClose: () => void
}

const PDialog = ({ sourceCodeLink = '#', link = '#', imgs, title = 'default title', open, handleClose }: PDProps): JSX.Element => {

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
        <Card sx={{ maxWidth: 600, mb: 2 }}>
          <ImageGallery
            additionalClass='mybutton'
            showPlayButton={false}
            items={imgs}
          />
        </Card>
        <DialogContentText
          id="scroll-dialog-description"
        >
          Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
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