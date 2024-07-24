<script>
    export let data;
    let show_pass= false;

    function togg_pass(){
        show_pass = !show_pass;
    }
    import { fade } from 'svelte/transition';
</script>


<div class="flex flex-col items-center h-[80svh]" transition:fade>
    <h1 class="text-5xl font-bold pb-10 pt-10 ">User Account </h1>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-between w-[80svw]">
        <h1 class="text-3xl font-semibold">Name:  </h1>
        <h1 class="text-2xl font-semibold">{data.details[0].name}</h1>
    </div>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-between w-[80svw]">
        <h1 class="text-3xl font-semibold">User_id: </h1>
        <h1 class="text-2xl font-semibold">{data.details[0].user_id}</h1>
    </div>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-between w-[80svw]">
        <h1 class="text-3xl font-semibold">Phone: </h1>
        <h1 class="text-2xl font-semibold">{data.details[0].phone}</h1>
    </div>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-between w-[80svw]">
        <h1 class="text-3xl font-semibold">address: </h1>
        <h1 class="text-2xl font-semibold">{data.details[0].address}</h1>
    </div>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-between w-[80svw]">
        <h1 class="text-3xl font-semibold">Email: </h1>
        <h1 class="text-2xl font-semibold">{data.details[0].email}</h1>
    </div>
    <hr class=" w-[80svw] border-1 border-neutral-500 mt-2 mb-2">
    <div class="flex justify-evenly w-[40svw]">
        <form method="post">
        <button formaction="?/Logout" class="w-[12svw] bg-red-800 text-white h-12 rounded-md flex justify-evenly items-center">
            Log out
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
        </button>
        </form>
    </div>
</div>