import { useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

interface PDProps {
  title?: string,
  sourceCodeLink?: string,
  link?: string,
  open: boolean,
  handleClose: () => void
}

const PDialog = ({ sourceCodeLink = '#', link = '#', title = 'default title', open, handleClose }: PDProps): JSX.Element => {


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
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {[...new Array(10)]
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
          <GitHubIcon sx={{mr: 1}}/> source code
        </Button>
        <Button href={link}>
          <LinkIcon sx={{mr: 1}} /> Link
          </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>

  );
}


export default PDialog