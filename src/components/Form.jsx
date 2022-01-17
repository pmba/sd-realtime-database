import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { Stack, TextField } from "@mui/material";
import { pushNewItem } from "../services/database";

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (title && title !== "" && description && description !== "") {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [title, description]);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const submitForm = () => {
        console.log("Submiting form...");
        const itemBody = {
            title,
            description,
        };

        pushNewItem(itemBody);

        setTitle("");
        setDescription("");
    };

    return (
        <Stack spacing={2}>
            <TextField
                id="outlined-basic"
                label="Título"
                variant="outlined"
                value={title}
                onChange={handleTitle}
            />

            <TextField
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                value={description}
                onChange={handleDescription}
            />

            <Button
                variant="contained"
                disabled={!canSubmit}
                onClick={() => submitForm()}
            >
                Criar
            </Button>
        </Stack>
    );
};

export default Form;
