<!--Individual Products-->
<script>
    export let data;
</script>

<div class="h-full">
<div class="flex w-full">
    <div class="text-7xl w-4/6 p-5">
        <h1>{data.details[0].name}</h1>
    </div>
    <div class="text-2xl w-2/6 p-5">{data.details[0].product_description}</div>
</div>
<div class="flex w-full">
    <div class="w-4/6 flex justify-center">
        <img src="/products/{data.details[0].product_image}" alt="Name" class="aspect-auto h-96 p-8">
    </div>
    <div class="w-2/6 p-5 text-xl">
        <h1>Availible stock: {data.details[0].stock}</h1>
        <h1>Total Sold: {data.details[0].sales_count}</h1>
        <h1>Section: {data.details[0].section}</h1>

        <h1>On Cart: {data.detail2.length != false ? data.detail2[0].quantity : 0 }</h1>

        <h1 class="text-3xl pt-10 pb-10">₹ {data.details[0].price}</h1>
        <form method="post">
        <div class="flex space-y-1">
            <h1 class="text-3xl flex">Quantity:</h1>
            <input type ="hidden" name ="prodid" value ="{data.details[0].product_id}"/>
            <input type="number" name="itemcount" min="0" class="border-2 border-black m-3 w-12 p-1">
        </div>
        <div class="flex space-x-6">
        <a class="mt-8 bg-orange-500 hover:bg-orange-700 rounded-md w-32 h-8 flex justify-center items-center" href="/product/{data.details[0].url}">Buy Now</a>
        <button class="mt-8 bg-orange-500 hover:bg-orange-700 rounded-md w-32 h-8 flex justify-center items-center" href="/product/{data.details[0].url}" formaction="?/update_cart">Add to cart</button>
        </form>
        </div>
    </div>
    
</div>


  