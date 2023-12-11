import { error } from '@sveltejs/kit';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '$lib/firebase';
import type { PageLoad } from './$types';


export const load: PageLoad = async ({ fetch, params }) => {    
    try {
        const fileRef = ref(storage, `${params.post}.md`);
        const downloadUrl = await getDownloadURL(fileRef);
        const response = await fetch(downloadUrl);
        return { markdown: await response.text() };
    } catch (e) {
        throw error(404, 'The requested post could not be found.');
    }
}