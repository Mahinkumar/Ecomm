<!--Individual Products-->
<script>
    export let data;
    console.log(data.details[0])
</script>

<div class="h-[89svh] w-full flex bg-gradient-to-br from-neutral-200 to-{data.details[0].accent}-100">
    <div class="w-2/3 h-full flex flex-col justify-evenly">
        <h1 class="text-7xl p-6 font-semibold">{data.details[0].name}</h1>
        <div class="flex justify-center">
            <img src="https://wvkbvwnwjdcztpdqdizj.supabase.co/storage/v1/object/public/Ecomm/{data.details[0].product_image}" alt="Name" class="aspect-auto h-96 p-8">
        </div>
    </div>
    <div class="w-1/3 h-full flex flex-col lg:justify-evenly md:justify-center p-5 text-xl">
        <div class="text-3xl pb-10 font-medium">{data.details[0].product_description}</div>
        <div class="flex justify-between w-56">
            <h1>Availible stock:</h1>
            <h1 class="{data.details[0].stock < 50 ? 'text-red-700 font-bold': ''}">{data.details[0].stock}</h1>
        </div>
        <hr class="w-56 border-1 border-neutral-500">
        <div class="flex justify-between w-56">
            <h1>Total Sold:</h1>
            <h1  class="text-neutral-700">{data.details[0].sales_count}</h1>
        </div>
        <hr class="w-56 border-1 border-neutral-500">
        <div class="flex justify-between w-56">
            <h1>Section:</h1>
            <h1 class="text-neutral-700">{data.details[0].section}</h1>
        </div>
        <hr class="w-56 border-1 border-neutral-500">

        <h1 class="text-3xl pt-10 pb-10">₹ {data.details[0].price}</h1>
        <h1>Item Already on Cart : {data.detail2.length != false ? data.detail2[0].quantity : 0 } Nos. </h1>
        <form method="post">
        <div class="flex">
            <h1 class="text-3xl flex m-4 ml-0">Quantity:</h1>
            <input type ="hidden" name ="prodid" value ="{data.details[0].product_id}"/>
            <input type="number" name="itemcount" placeholder="0" min="0" class="border-2 border-black  w-12 m-4 p-1">
        </div>
        <div class="flex space-x-6">
        <button class="mt-8 bg-orange-500 hover:bg-orange-700 rounded-md w-72 h-12 flex justify-center items-center" href="/product/{data.details[0].url}" formaction="?/update_cart">Add to cart</button>
        </form>
    </div>
</div>
