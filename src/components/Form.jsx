import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { Divider, Stack, TextField, Typography } from "@mui/material";
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
            <Typography variant="h5" component="div">
                Sistemas Distribuídos 2021.1
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                style={{
                    marginBottom: "1rem",
                }}
            >
                Projeto feito para a disciplina de sistemas distribuídos da
                Universidade Federal de Alagoas, com o intuito de mostrar um
                exemplo prático de utilização do Firebase Realtime Database.
                Nesse exemplo podemos adicionar ou remover itens ao banco de
                dados e visualizar as inserções e remoções em tempo real.
            </Typography>

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
