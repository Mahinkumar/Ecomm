<script>
    export let data;
    import { fade } from 'svelte/transition';
</script>


<div class="min-h-screen" transition:fade>
    <div class="flex flex-col justify-center p-4">
        <h2 class="text-4xl font-bold">Inbox</h2>
        <ul class="list-none mb-8">
            <li class="flex justify-between py-2 border-b font-bold mt-8 border-gray-200">
                <span class="text-xl w-1/4">Sale Time</span>
                <span class="text-xl w-1/4">Transaction Id</span>
                <span class="text-xl w-1/4">Price</span>
                <span class="text-xl w-1/4">Payment Method</span>
              
            </li>
            {#each data.all as x}
            <li class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-lg w-1/4">{x.sale_time}</span>
                <span class="text-lg w-1/4">{x.transaction_id}</span>
                <span class="text-lg w-1/4">{x.purchase_price}</span>
                <span class="text-lg w-1/4">{x.payment_method}</span>
                <input type="hidden" value="{x.transaction_id}" name="tid">
              <!--<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded" formaction="?/viewtxn">View</button>
                </form>-->
            </li>
            {/each}
        </ul>
          <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded" 
     >The End</button>
      </div>      
</div>