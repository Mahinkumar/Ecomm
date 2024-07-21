<!--Login-->
<script>
    import '$lib/app.css'
    let is_registered = true;
    $: is_registered;

    function update() {
        is_registered = !is_registered;
    }
</script>

<main class="w-screen h-screen bg-white flex justify-center">
    <div class="w-96 {is_registered == true ? 'h-[50svh]' : 'h-[80svh]'} transition-all duration-700 bg-gray-200 place-self-center rounded-xl shadow-md shadow-gray-400">
        <div class="p-5 flex justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 p-1"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                /></svg
            >
            <h1 class="text-center text-2xl font-bold">EComm</h1>
        </div>
        <div>
            <h2 class="text-xl text-center font-semibold">Welcome</h2>
            <h3 class="text-md text-center">Login / Signup</h3>
        </div>
        <form class="flex flex-col justify-center items-center pt-2">
            <input
                class="m-1 p-4 rounded-lg shadow-2xl bg-gray-300 w-4/5"
                type="email"
                placeholder="E-Mail"
                required
            />
            <input
                class="m-1 p-4 rounded-lg shadow-2xl bg-gray-300 w-4/5"
                type="password"
                placeholder="Password"
                required
            />
            {#if is_registered == false}
                <input
                    class="m-1 p-4 rounded-lg shadow-2xl bg-gray-300 w-4/5"
                    type="date"
                    placeholder="Date of Birth"
                    required
                />
                <input
                    class="m-1 p-4 rounded-lg shadow-2xl bg-gray-300 w-4/5"
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    placeholder="Mobile Number"
                />
                <input
                    class="m-1 p-4 rounded-lg shadow-2xl bg-gray-300 w-4/5"
                    type="text"
                    placeholder="Address"
                    required
                />
            {/if}
            <button
                class="bg-blue-600 my-[1svh] p-2 w-4/5 rounded-lg hover:shadow-md transition-all duration-700 hover:shadow-cyan-600"
                type="submit"
                on:click={update}
            >
                {is_registered == true ? "Login" : "Register"}
            </button>
        </form>
    </div>
</main>
