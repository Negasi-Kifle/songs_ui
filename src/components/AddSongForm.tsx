import { ChangeEvent, useState } from "react";
import { FormGroup } from "../styles_by_emotion/addsong.style"
import { Button } from "../styles_by_emotion/addsong.style"
import { useDispatch, useSelector } from "react-redux";
import { state } from "../interface";
import { setSongSlice } from "../redux/slice/song";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { CREATE_SONG } from "../redux/sagas/types";

const initialSongState = {
    title: "",
    artist: "",
    album: "",
    genre: "Ambasel",
};

const Form = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({
        title: false,
        artist: false,
        album: false,
    });
    const song = useSelector((state: state) => state.song);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        let validationError = false;

        // Check if the value is empty
        if (value === "") {
            validationError = true;
        }

        // Update the song state
        dispatch(
            setSongSlice({
                ...song,
                [name]: value,
            })
        );

        // Update the error state
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationError,
        }));
    };

    const handleGenreChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        dispatch(
            setSongSlice({
                ...song,
                genre: value,
            })
        );
    };

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(errors).some((error) => error)) {
            return;
        }
        console.log(song);

        dispatch({
            type: CREATE_SONG,
            song: song,
        })

        dispatch(setSongSlice(initialSongState));
    };

    return (
        <>
            <FormGroup>
                <TextField
                    fullWidth
                    label="Title"
                    id="outlined-size-small"
                    size="small"
                    name='title'
                    value={song.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.title}
                    helperText={errors.title && "Title is required"}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    fullWidth
                    label="Artist"
                    id="outlined-size-small"
                    size="small"
                    name='artist'
                    value={song.artist}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.artist}
                    helperText={errors.artist && "Artist is required"}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    fullWidth
                    label="Album"
                    id="outlined-size-small"
                    size="small"
                    name='album'
                    onBlur={handleBlur}
                    value={song.album}
                    onChange={handleChange}
                    error={errors.album}
                    helperText={errors.album && "Album is required"}
                />
            </FormGroup>
            <FormGroup>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                    <Select
                        fullWidth
                        id="demo-simple-select"
                        label="Genre"
                        defaultValue="jazz"
                        name="genre"
                        size="small"
                        value={song.genre}
                        onChange={handleGenreChange}
                    >
                        <MenuItem value="Ambasel">Ambasel</MenuItem>
                        <MenuItem value="Anchihoye">Anchihoye</MenuItem>
                        <MenuItem value="Country">Country</MenuItem>
                        <MenuItem value="Acoustic">Acoustic</MenuItem>
                    </Select>
                </FormControl>
            </FormGroup>
            <Button
                type="submit" onClick={(e: any) => {
                    handleSubmit(e);
                }}>Submit</Button>
        </>
    )
}

export default Form