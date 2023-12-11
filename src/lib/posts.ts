import { readable } from "svelte/store";
import { collection, getDocs, query, orderBy, type DocumentData } from "firebase/firestore/lite";
import { db } from "$lib/firebase";

async function fetchPosts(set: Function) {
    try {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data());
        set(data);
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

export const posts = readable<DocumentData[]>([], set => {
    fetchPosts(set);
});