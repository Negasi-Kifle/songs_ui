import { Button, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UPDATE_SONG_BY_ID } from "../redux/sagas/types";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";
import { state } from "../interface";
import { setEditSongSlice } from "../redux/slice/edit_song";

// Props for the pop-up
interface PopUpProps {
    open: boolean; // Flag to show/close pop-up
    handleClose: () => void; // Show/close pop-up
}


const UpdateSongPopUp: React.FC<PopUpProps> = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({
        title: false,
        artist: false,
        album: false,
    });

    // Edited song from saga slice
    const editSong = useSelector((state: state) => state.editSong);


    // Handle change in input fields
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        let validationError = false;

        // Check if the value is empty
        if (value === "") {
            validationError = true;
        }

        // Update the song state
        dispatch(
            setEditSongSlice({
                ...editSong,
                [name]: value,
            })
        );

        // Update the error state
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationError,
        }));
    };

    // Handle genre change
    const handleGenreChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        dispatch(
            setEditSongSlice({
                ...editSong,
                genre: value,
            })
        );
    };

    // Handle error for required fields
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let validationError = false;

        // Check if the value is empty
        if (value === "") {
            validationError = true;
        }

        // Update the error state
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationError,
        }));
    };

    // Handle action when submit button clicked
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(errors).some((error) => error)) {
            return;
        }
        console.log(editSong);

        dispatch({
            type: UPDATE_SONG_BY_ID,
            editSong: editSong,
        })
        handleClose() // Close pop-up
    };

    return (
        <>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit song info</DialogTitle>
                <DialogContent>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Title"
                                name="title"
                                onBlur={handleBlur}
                                value={editSong.title}
                                onChange={handleChange}
                                error={errors.title}
                                helperText={errors.title && "Title is required"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Artist"
                                name="artist"
                                value={editSong.artist}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={errors.artist}
                                helperText={errors.artist && "Artist is required"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Album"
                                name="album"
                                value={editSong.album}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.album}
                                helperText={errors.album && "Album is required"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                                <Select
                                    fullWidth
                                    id="demo-simple-select"
                                    label="Genre"
                                    defaultValue="Jazz"
                                    name="genre"
                                    value={editSong.genre}
                                    onChange={handleGenreChange}
                                >
                                    <MenuItem value="Ambasel">Ambasel</MenuItem>
                                    <MenuItem value="Anchihoye">Anchihoye</MenuItem>
                                    <MenuItem value="Country">Country</MenuItem>
                                    <MenuItem value="Acoustic">Acoustic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={(e: any) => {
                            handleSubmit(e);
                        }}
                        variant="contained"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UpdateSongPopUp