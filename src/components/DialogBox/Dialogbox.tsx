import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import animationData from '../sucess.json'; // Import the JSON file
const BootstrapDialog = (props: any) => {
   return (
      <Dialog
         {...props}
         PaperProps={{
            style: {
               borderRadius: '10px', // Add border radius
               padding: '16px', // Add padding
               display: "flex",
               alignItems: "center",
            },
         }}
      />
   );
};
export interface DialogTitleProps {
   id: string;
   children?: React.ReactNode;
   onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
   const { children, onClose, ...other } = props;
   return (
      <DialogTitle sx={{ m: 0, p: 0.5 }} {...other}>
         {children}
         {onClose ? (
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
         ) : null}
      </DialogTitle>
   );
}
export default function CustomizedDialogs(props: any) {
   const { open, setOpen, title, content } = props;
   const handleClickOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };
   return (
      <div style={{}}>
         <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
         >
            <DialogActions style={{ display: "flex", justifyContent: "center", padding: 0 }}>
               <Lottie style={{ width: "64px", height: "64px" }} animationData={animationData} />
            </DialogActions>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
               <DialogActions style={{ display: "flex", justifyContent: "center" }} >
                  <Typography style={{ fontSize: 24, font: "Archivo", lineHeight: "100%", fontWeight: 600, color: "#1E293B" }}>{title}</Typography>  </DialogActions>
            </BootstrapDialogTitle>
            <DialogContent style={{ alignItems: "center", display: "flex" }}>
               <Typography style={{ fontSize: 16, font: "Archivo", lineHeight: "150%", fontWeight: 400, color: "#475569", textAlign: "center" }}>
                  {content}
               </Typography>
            </DialogContent>
            <DialogActions style={{ display: "flex", justifyContent: "center" }}>
               <Button variant='contained' style={{ backgroundColor:"#06B6D4" }} autoFocus onClick={handleClose}>
                  Explore more
               </Button>
            </DialogActions>
         </BootstrapDialog>
      </div>
   );
}