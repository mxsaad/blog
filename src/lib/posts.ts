import { readable } from "svelte/store";
import { collection, getDocs, query, orderBy, type DocumentData } from "firebase/firestore";
import { db } from "$lib/firebase";

async function fetchPosts(set: Function) {
    try {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as DocumentData }));
        set(data);
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

export const posts = readable<DocumentData[]>([], set => {
    fetchPosts(set);
});