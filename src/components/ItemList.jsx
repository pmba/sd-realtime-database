import {
    Alert,
    AlertTitle,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getItems, removeItem } from "../services/database";

const ItemList = () => {
    const [items, setItems] = useState([]);

    const deleteItem = (itemKey) => {
        console.log(`Removing item key=${itemKey}`);
        removeItem(itemKey);
    };

    const getItemsFromDatabase = () => {
        getItems((snapshot) => {
            const itemsData = snapshot.val();

            if (itemsData) {
                const allItems = Object.entries(itemsData).map((item) => {
                    const [key, val] = item;
                    val.key = key;
                    return val;
                });

                allItems.reverse();

                setItems(allItems);
            } else {
                setItems(null);
            }
        });
    };

    useEffect(() => {
        return getItemsFromDatabase();
    }, []);

    return (
        <Stack spacing={2}>
            {items != null ? (
                items.map((item) => (
                    <Card key={item.key}>
                        <CardContent>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {item.key}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => deleteItem(item.key)}
                            >
                                Remover
                            </Button>
                        </CardActions>
                    </Card>
                ))
            ) : (
                <Alert severity="info">
                    <AlertTitle>Nenhum dado encontrado</AlertTitle>
                    Você pode adicionar um novo item preenchendo o form acima e
                    clicando em <strong>criar</strong>.
                </Alert>
            )}
        </Stack>
    );
};

export default ItemList;
