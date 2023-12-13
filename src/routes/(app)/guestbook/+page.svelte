<script lang="ts">
	import GuestbookCard from "$components/GuestbookCard.svelte";
    import { onMount } from 'svelte';
    import { db, auth } from '$lib/firebase';
    import { onSnapshot, serverTimestamp, addDoc, collection, query, orderBy, type DocumentData } from 'firebase/firestore';
    import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
    import { formatTimestamp } from "$lib/functions";
	import { writable } from "svelte/store";

    const guestbook = writable([] as DocumentData[]);
    let loggedIn = false;
    let name: string;
    let message: string;

    const login = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }
    const submit = async () => {
        if (loggedIn && message) {
            const entry = { name, message, timestamp: serverTimestamp() };
            try {
                await addDoc(collection(db, 'guestbook'), entry);
                message = '';
            } catch (e) {
                console.error('Error submitting message: ', e);
            }
        }
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn = true;
            name = user.displayName ? user.displayName : 'Anonymous';
        }
    });
    onMount(async () => {
        const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            guestbook.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as DocumentData })));
        });
    });
</script>

<svelte:head>
    <title>Guestbook | Muhammad Saad</title>
    <meta name="description" content="Leave a message on Muhammad Saad's blog for everyone to see!">
    <meta name="keywords" content="SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading">
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<main class="w-screen min-h-screen px-8 pt-24 pb-12">
    <div class="mx-auto max-w-screen-lg flex flex-col items-center justify-center">
      <div class="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-col w-fit gap-4">
        <h1 class="font-bold tracking-tight text-4xl sm:text-5xl">Guestbook</h1>
        <p>An artifact of the 90's web. Leave a comment below for my future visitors. Feel free to write anything!</p>
        {#if loggedIn}
            <textarea bind:value={message} class="textarea textarea-primary" placeholder="Enter message"></textarea>
            <button on:click={submit} class="self-end max-w-fit btn btn-sm btn-primary hover:scale-105 duration-300">Submit</button>
        {:else}
            <button on:click={login} class="self-end btn btn-sm btn-neutral max-w-fit hover:scale-105 duration-300">
                <img class="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google logo">
                <span>Login with Google</span>
            </button>
        {/if}
      </div>
      <div class="px-6 mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
        {#each $guestbook as entry (entry.id)}
            <GuestbookCard message={entry.message} name={entry.name} timestamp={formatTimestamp(entry.timestamp)}/>
        {/each}
      </div>
    </div>
</main>