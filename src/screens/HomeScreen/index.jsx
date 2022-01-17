import React from "react";

import Form from "../../components/Form";

import { Container, Divider, Grid } from "@mui/material";
import ItemList from "../../components/ItemList";

const HomeScreen = () => {
    return (
        <div
            style={{
                margin: "5rem",
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Form />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>

                    <Grid item xs={12}>
                        <ItemList />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HomeScreen;
