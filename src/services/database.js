import { db } from "./firebase";
import { child, onValue, push, ref, remove } from "firebase/database";

const itemsRef = ref(db, "/items");

export const pushNewItem = (item) => {
    push(itemsRef, item);
};

export const getItems = (callback) => {
    onValue(itemsRef, callback);
};

export const removeItem = (itemKey) => {
    const itemToRemoveRef = child(itemsRef, itemKey);
    remove(itemToRemoveRef);
};
