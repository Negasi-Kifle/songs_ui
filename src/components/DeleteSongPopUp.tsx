import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DELETE_SONG_BY_ID } from "../redux/sagas/types";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../interface";

// Props for the pop-up
interface PopUpProps {
    open: boolean; // Flag to show/close pop-up
    handleClose: () => void; // Show/close pop-up
}


const DeleteSongPopUp: React.FC<PopUpProps> = ({ open, handleClose }) => {
    const dispatch = useDispatch();

    // Edited song from saga slice
    const deleteSong = useSelector((state: state) => state.song);

    // Handle action when submit button clicked
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({
            type: DELETE_SONG_BY_ID,
            deleteSong: deleteSong,
        })
        handleClose() // Close pop-up
    };

    return (
        <>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete Song</DialogTitle>
                <DialogContent>
                    <br></br>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={(e: any) => {
                            handleSubmit(e);
                        }}
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteSongPopUp