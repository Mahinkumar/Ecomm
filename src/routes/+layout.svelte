<script>
import "../app.css";
import Nav from "./nav.svelte";

let curr_page = "Home";
let section = "Today's Deals";
let Username = "Username";

export let data;

let sections = data.sect;

</script>

<Nav {curr_page}{section}{Username}{data}{sections}/>
<slot></slot>