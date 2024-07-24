<script>
    export let data;
    import { fade } from 'svelte/transition';
</script>

<div class="flex" transition:fade>
<div class="flex flex-col w-[70svw] h-[80svh]">
    <h1 class="p-5 font-bold text-5xl">Your cart</h1>
    <hr class="border-1 border-black">
    <div class="overflow-auto">
        {#if data.details.length==false}
        <h1 class="p-5 font-bold text-neutral-500 text-4xl">Add some products to get started</h1>
        {/if}
        {#if data.details.length!=false}
    {#each Object.entries(data.details) as sections, products}
        <div
            class="h-32 text-left flex items-center text-xl"
        >
            <div class="w-56 h-56 flex flex-col justify-center">
                <img
                    src="https://wvkbvwnwjdcztpdqdizj.supabase.co/storage/v1/object/public/Ecomm/{sections[1].image_path}"
                    alt="{sections[1].name} Image"
                    class="p-16"
                />
            </div>
            <div class="items-center flex justify-evenly">
                <h1 class="rounded-md w-64 h-8 font-bold">{sections[1].name}</h1>
                <h1 class="rounded-md w-20 h-8 font-bold">₹ {sections[1].price} </h1>
                <form method="post">
                <div class="flex justify-center pr-8 pl-8 items-center">
                    <input type="hidden" value="{sections[1].Pid}" name="Product_id">
                    <button class="bg-gray-400 rounded-md" formaction="?/reduce_qty">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 p-1 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                          </svg>                          
                    </button>
                    <h1 class="rounded-md pl-2 pr-2 font-bold text-center">{sections[1].Quantity}</h1>
                    <button class="bg-gray-400 rounded-md" formaction="?/add_qty">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 p-1 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>                          
                    </button>
                </div>
                </form>
                <form method="post">
                    <input type="hidden" value="{sections[1].Pid}" name="Product_id">
                    <button class="rounded-md bg-neutral-500 mr-3" formaction="?/remove_item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 p-1 w-7 h-7 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </form>
                <h1 class="rounded-md h-8 font-bold">Total: ₹ {sections[1].price * sections[1].Quantity}</h1>
            </div> 
        </div>
        <hr class="border-b-1 border-gray-300">
    {/each}
    {/if}
    </div>
</div>
<div class="bg-white p-6 w-[30svw]">
    <div class="bg-blue-900 h-full rounded-lg p-5 relative">
        <h1 class="text-3xl text-white">Order Summary</h1>
        <hr class="mt-2 mb-2">
        <div class="flex justify-between pr-2 text-white">
            <h1 class="text-xl">Subtotal: </h1>
            <h1 class="text-xl">₹ {data.total}</h1>
        </div>
        <hr class="mt-2 mb-2">
        <div class="flex justify-between pr-2 text-white">
            <h1 class="text-xl">VAT (0%): </h1>
            <h1 class="text-xl">₹ 0</h1>
        </div>
        <div class="absolute bottom-5 w-full pr-10">
            <hr class="mt-2 mb-2">
            <div class="flex justify-between pr-2 text-white bg-green">
                <h1 class="text-xl">Grand total: </h1>
                <h1 class="text-xl">₹ {data.total}</h1>
            </div>
            {#if data.total>0}
            <form method="post">
                <input hidden="true" value="{data.total}" name="total">
                <button class="bg-white w-full mt-4 mb-4 p-2 text-xl text-black items-center rounded-lg" formaction="?/purchase">
                    Checkout
                </button>
            </form>
            {/if}
        </div>
    </div>
</div>

</div>