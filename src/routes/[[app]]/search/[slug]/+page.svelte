<script>
    export let data;
</script>

<div class="flex flex-col items-center">
    {#each Object.entries(data.details) as sections, products}
    {#if sections[1].stock>0}
        <div
            class="w-[60svw] h-64 bg-gray-200 text-center flex items-center border-2 border-stone-400 justify-center"
        >
            <div class="w-56 h-56 flex flex-col justify-center">
                <img
                    src="https://wvkbvwnwjdcztpdqdizj.supabase.co/storage/v1/object/public/Ecomm/{sections[1].product_image}"
                    alt="{sections[1].name} Image"
                    class="p-8"
                />
            </div>
            <div class="items-center flex flex-col">
                <h1 class="rounded-md w-32 h-8 font-bold">₹ {sections[1].price}</h1>
                <h1 class="text-lg font-bold">{sections[1].name}</h1>
                <a
                    class="ml-4 mt-8 bg-white rounded-md w-32 h-8 flex justify-center items-center"
                    href="/product/{sections[1].url}">Buy Now</a
                >
            </div>
        </div>
        {/if}
    {/each}
</div>