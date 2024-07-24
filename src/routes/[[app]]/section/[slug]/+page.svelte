<!--Individual Sections-->
<script>
    export let data;
    import { fade } from 'svelte/transition';
</script>

<div class="flex flex-col items-center h-screen" transition:fade>
    <h1 class="text-5xl p-5">Deals on {data.details[0].section}</h1>
    <div class="grid grid-cols-3">
    {#each Object.entries(data.details) as sections, products}
    {#if sections[1].stock>0}
    <div class="w-[35svw] h-36 text-center flex items-center  justify-center p-5">
        <div class="flex items-center  p-5 h-40 rounded-md shadow-md shadow-black">
            <div class="w-40 h-40 flex flex-col justify-center">
                <img
                    src="https://wvkbvwnwjdcztpdqdizj.supabase.co/storage/v1/object/public/Ecomm/{sections[1].product_image}"
                    alt="{sections[1].name} Image"
                    class="p-4"
                />
            </div>
            <div class="items-center flex flex-col">
                <h1 class="rounded-md w-32 h-8 font-bold">₹ {sections[1].price}</h1>
                <h1 class="text-lg font-bold">{sections[1].name}</h1>
                <a
                    class="ml-4 mt-8 bg-blue-700 hover:bg-blue-800 duration-100 transition-all text-white rounded-md w-32 h-8 flex justify-center items-center"
                    href="/product/{sections[1].url}">Buy Now</a
                >
            </div>
        </div>
    </div>
    {/if}
    {/each}
</div>
</div>
