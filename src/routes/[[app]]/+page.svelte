<!--Home Page-->
<script>
   export let data; 
   
</script>

<main>
    <!--Main Sale-->
    <div class="h-[50svh] flex">
        <div class="w-1/2 bg-white p-2">
            <div class="w-full h-full bg-gradient-to-b from-violet-600 to-indigo-600 rounded-lg flex">
                <div class="p-8 w-1/2 h-full rounded-lg flex justify-center flex-col">
                    <img src="/products/{data.featured1[0].product_image}" alt="Name" class="aspect-auto">
                </div>
                <div class="w-1/2 h-full rounded-lg flex flex-col justify-center">
                    <button class="ml-4 bg-red-500 rounded-md w-32 h-8">₹ {data.featured1[0].price} </button>
                    <h1 class="p-4 text-2xl text-white font-bold">{data.featured1[0].name}</h1>
                    <h1 class="p-4 text-md text-white">{data.featured1[0].product_description}</h1>
                    <a class="ml-4 bg-white rounded-md w-32 h-8 flex justify-center items-center" href="/product/{data.featured1[0].url}">Buy Now</a>
                </div>
            </div>
        </div>
        <div class="w-1/2 bg-white p-2 flex">
            <div class="w-1/2 pr-2">
                <div class="w-full h-full bg-gradient-to-b from-slate-500  to-slate-800 rounded-lg flex flex-col justify-center items-center">
                    <div class="flex">
                        <img src="/products/{data.featured2[0].product_image}" alt="Name" class="aspect-auto w-36 p-5">
                        <div>
                            <button class="ml-4 mt-4 bg-gray-500 text-yellow-300 rounded-md w-32 h-8">₹ {data.featured2[0].price} </button>
                            <h1 class="p-4 text-xl text-white font-bold">{data.featured2[0].name}</h1>
                        </div>
                    </div>
                    <h1 class="pl-5 pr-2 pb-3 text-md text-white">{data.featured2[0].product_description}</h1>
                    <a class="ml-4 bg-white rounded-md w-32 h-8 flex justify-center items-center" href="/product/{data.featured2[0].url}">Buy Now</a>
                </div>
            </div>
            <div class="w-1/2 pr-2 ">
                <div class="w-full h-full ring-2 ring-red-600 text-black ring-inset rounded-lg flex flex-col justify-center items-center">
                    <div class="flex">
                        <img src="/products/{data.featured3[0].product_image}" alt="Name" class="aspect-auto w-36 p-5">
                        <div>
                            <button class="ml-4 mt-4 text-red-700 rounded-md text-xl w-32 h-8">₹ {data.featured3[0].price} </button>
                            <h1 class="p-4 text-xl text-black font-bold">{data.featured3[0].name}</h1>
                        </div>
                    </div>
                    <h1 class="pl-5 pb-3 text-md text-black">{data.featured3[0].product_description}</h1>
                    <a class="ml-4 bg-gradient-to-b from-slate-500  to-slate-800 text-white rounded-md w-32 h-8 flex justify-center items-center" href="/product/{data.featured3[0].url}">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-5">
        {#each Object.entries(data.all) as product_items,products}
            <div class="w-64 h-96 bg-gray-200 text-center flex flex-col items-center border-2 border-stone-400">
                <div class="w-56 h-56 flex flex-col justify-center">
                    <img src="/products/{product_items[1].product_image}" alt="{product_items[1].name} Image" class="p-8">
                </div>
                <h1 class="rounded-md w-32 h-8 font-bold">₹ {product_items[1].price} </h1>
                <h1 class="text-lg font-bold">{product_items[1].name}</h1>
                <a class="ml-4 mt-8 bg-white rounded-md w-32 h-8 flex justify-center items-center" href="/product/{product_items[1].url}">Buy Now</a>
            </div>
        {/each}
    </div>
</main>
