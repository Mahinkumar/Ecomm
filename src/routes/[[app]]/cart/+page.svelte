<script>
    export let data;
</script>
<div class="flex">
    
<div class="flex flex-col w-[70svw] overflow-auto h-[80svh]">
    {#each Object.entries(data.details) as sections, products}
        <div
            class="h-32 bg-gray-200 text-center flex items-center border-2 border-stone-400"
        >
            <div class="w-56 h-56 flex flex-col justify-center">
                <img
                    src="/products/{sections[1].image_path}"
                    alt="{sections[1].name} Image"
                    class="p-16"
                />
            </div>
            <div class="items-center flex justify-evenly">
                <h1 class="rounded-md w-56 h-8 font-bold">{sections[1].name}</h1>
                <h1 class="rounded-md w-32 h-8 font-bold">₹ {sections[1].price} </h1>
                <form method="post">
                <div class="flex justify-center p-8">
                    <input type="hidden" value="{sections[1].Pid}" name="Product_id">
                    <button class="bg-gray-400 rounded-md mb-3 pl-1 pr-1" formaction="?/reduce_qty">-</button>
                    <h1 class="rounded-md w-5 h-8 font-bold">{sections[1].Quantity}</h1>
                    <button class="bg-gray-400 rounded-md mb-3 pl-1 pr-1" formaction="?/add_qty">+</button>
                </div>
                </form>
                <h1 class="rounded-md w-32 h-8 font-bold">Total: ₹ {sections[1].price * sections[1].Quantity}</h1>
                <form method="post">
                <input type="hidden" value="{sections[1].Pid}" name="Product_id">
                <button class="rounded-md w-8 h-8 bg-red-500 mb-3 ml-3" formaction="?/remove_item">X</button>
                </form>
            </div> 
        </div>
    {/each}
</div>
<div class="">
    <h1>Hello</h1>
    {data.total}
</div>
</div>