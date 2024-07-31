> [!WARNING]  
> This Project is a **Prototype** and is not suitable for production.
> For Self hosting your E-Commerce site see <a href="https://github.com/Mahinkumar/Ecomm-Svelte">Here</a>. (WIP)

# Micro Ecommerce Website Built with Sveltekit
This is a simple ecommerce website project powered by <a href="https://kit.svelte.dev/">Sveltekit<a>, <a href="https://orm.drizzle.team/">Drizzle ORM<a> and <a href="https://www.postgresql.org/">PostgreSQL<a>. The Website utilizes Server Side Rendering in all pages. 
</br>

# To Use:
```
// Install required packages with
npm install

//Create a .env file with the Postgres URL Environment Variable.
1. ```DATABASE_URL=<Your Postgres connection URL>```

//Run Drizzle kit migrations with
npx drizzle-kit generate 
npx drizzle-kit push 
npx drizzle-kit migrate
```


> [!TIP]
> To check Schema you can use ```npx drizzle-kit studio```.

```
//Run Development Server
npm run dev

//Run Build
npm run build

//To preview the build
npm run preview 
```
> [!NOTE]  
> Change Adapters for Sveltekit based on your choice of hosting platform.. The demo is being hosted on Vercel and hence uses vercel adapters

</br>

