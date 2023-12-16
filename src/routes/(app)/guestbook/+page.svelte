<script lang="ts">
    import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';
	import GuestbookCard from "$components/GuestbookCard.svelte";
    import { onMount } from 'svelte';
    import { db, auth } from '$lib/firebase';
    import { onSnapshot, serverTimestamp, addDoc, collection, query, orderBy, deleteDoc, doc, type DocumentData } from 'firebase/firestore';
    import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
    import { formatTimestamp } from "$lib/functions";

    let guestbook = [] as DocumentData[];
    let loggedIn = false;
    let submitted = false;
    let userId = '';
    let name = '';
    let message = '';
    let modal: HTMLDialogElement;

    const login = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }
    const logout = async () => {
        await auth.signOut();
        loggedIn = false;
    }
    const submit = async () => {
        if (loggedIn && message) {
            await addDoc(collection(db, 'guestbook'), { name, message, userId, timestamp: serverTimestamp() });
            modal.showModal();
            submitted = true;
        }
    }
    const remove = async (id: string) => {
        await deleteDoc(doc(db, 'guestbook', id));
    }
    onMount(() => {
        const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            guestbook = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as DocumentData }));
        });
    });
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn = true;
            userId = user.uid;
            name = user.displayName ? user.displayName : 'Anonymous';
        }
    });
</script>

<svelte:head>
    <title>Guestbook | Muhammad Saad</title>
    <meta name="description" content="Leave a message on Muhammad Saad's blog for everyone to see!">
    <meta name="keywords" content="SWE, Blog, Privacy, Security, Productivity, Cryptocurrency, Fitness, Reading">
    <meta name="author" content="Muhammad Saad">
</svelte:head>

<main class="w-screen min-h-screen p-12 pt-24 flex flex-col items-center justify-center">
    <div class="flex flex-col w-full max-w-4xl gap-4">
        <h1 class="font-bold text-4xl sm:text-5xl">Guestbook</h1>
        <p>An artifact of the 90's web. Leave a comment below for my future visitors. Feel free to write anything!</p>
        {#if loggedIn}
            {#if !submitted}
                <input bind:value={message} type="text" placeholder="Enter message" class="input input-sm sm:input-md input-bordered input-primary w-full" />
                <div class="self-end flex gap-2">
                    <button on:click={logout} class="max-w-fit btn btn-sm btn-neutral duration-300">Logout</button>
                    <button on:click={submit} class="max-w-fit btn btn-sm btn-primary duration-300">Submit</button>
                </div>
            {:else}
                <button on:click={logout} class="self-end max-w-fit btn btn-sm btn-neutral duration-300">Logout</button>
            {/if}
        {:else}
            <button on:click={login} class="self-end btn btn-sm btn-neutral max-w-fit duration-300">
                <img class="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google logo">
                <span>Login with Google</span>
            </button>
        {/if}
        </div>
        <div class="mt-8 flex flex-col gap-8 max-w-4xl">
        {#each guestbook as entry (entry.id)}
                <GuestbookCard message={entry.message} name={entry.name} timestamp={formatTimestamp(entry.timestamp)}>
                    {#if loggedIn && userId === entry.userId}
                        <button on:click={() => remove(entry.id)} class="absolute right-2 top-2 btn btn-ghost btn-xs hover:text-error p-2 h-8 w-8">
                            <FaRegTrashAlt/>
                        </button>
                    {/if}
                </GuestbookCard>
        {/each}
    </div>
</main>

<dialog bind:this={modal} class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-neutral">
      <h3 class="font-bold text-lg sm:text-xl">Thank you!</h3>
      <p class="pt-4 text-sm sm:text-base">Your message has successfully been added to the guestbook.</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-sm btn-outline">Close</button>
        </form>
      </div>
    </div>
</dialog>