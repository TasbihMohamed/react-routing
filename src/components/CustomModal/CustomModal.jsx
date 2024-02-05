import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Fade } from '@mui/material';
// import { keyframes } from "styled-components";

export default function CustomModal({ modalButton, img }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Stack sx={{
        position: "relative",
      }}>
        <Button onClick={handleOpen}
          sx={{
            border: 0,
            p: 0,
            '&:focus': {
              border: '0px',
            },

          }}
        >{modalButton}</Button>
        {open &&

            <Stack sx={{
              position: "absolute",
              backgroundColor: '#19A9B4', opacity: 0.8, border: 4, width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <AddIcon
                className='plus'
                style={{ color: 'white', fontSize: "135px", fontWeight: "800" }} />

            </Stack>
   
        }
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          p: 4,
        }}>
          {modalButton}
        </Box>
      </Modal>
    </div >
  );
}