<script>
import "$lib/app.css";
import Nav from "./nav.svelte";

let curr_page = "Home";
let section = "Today's Deals";

export let data;

let sections = data.sect;
let prod_cnt = data.prod_count;
let Username = data.name;
</script>

<Nav {curr_page}{section}{Username}{data}{sections}{prod_cnt}/>
<slot></slot>