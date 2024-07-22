<script>
    export let data;
</script>


<div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold pb-10 pt-10">User Account </h1>
    <h1 class="text-xl font-semibold">Name:  {data.details[0].name}</h1>
    <h1 class="text-xl font-semibold">User_id: {data.details[0].user_id}</h1>
    <h1 class="text-xl font-semibold">Phone:{data.details[0].phone} </h1>
    <h1 class="text-xl font-semibold">address: {data.details[0].address} </h1>
    <h1 class="text-xl font-semibold">Email: {data.details[0].email}</h1>
</div>