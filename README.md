> [!WARNING]  
> This Project is a working progress and is not recommended for production.
> Some UX and UserFlow parts need a rewrite. 

# Micro Ecommerce Website Built with Sveltekit
This is a simple ecommerce website project powered by <a href="https://kit.svelte.dev/">Sveltekit<a>, <a href="https://orm.drizzle.team/">Drizzle ORM<a> and <a href="https://www.postgresql.org/">PostgreSQL<a>. The Website utilizes Server Side Rendering in all pages. 

### Expected to finish on Q1 2025 
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



## Roadmap 
### The Basics
- [x] Build basic functionalities for the Ecomm Site.
- [ ] UI Revamp
- [ ] Accessiblity
- [ ] Responsive Design

### 1. Login
- [x] Email Logins
- [ ] Third party Oauth
- [ ] Secure Session Handling

### 2. Functionalities
- [ ] Support for dynamic Layout and customizable tiling for products
- [x] Search through products
- [ ] Third Party Transaction Intergration
- [ ] Customizable Suggestion Algorithms
- [ ] User Settings

### 3. Database
- [ ] Make Database 3NF Compilant
- [ ] Secure and Safe Deletion for users and Product Records
- [ ] Optimized Queries
