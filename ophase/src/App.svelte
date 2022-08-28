<script lang="ts">
    import Home from "./lib/home/@Home.svelte";
    import NotFound from "./lib/notFound/@NotFound.svelte";
    import { Route, Router } from "svelte-navigator";
    import { darkMode } from "./stores";

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        darkMode.set(true);
    else darkMode.set(false);

    $: $darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
</script>

<main class="dark:bg-backgroundDark-500 w-full min-h-screen">
    <Router primary={false}>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/about">
            <Home />
        </Route>
        <Route path="/contact">
            <Home />
        </Route>
        <Route path="/links">
            <Home />
        </Route>
        <Route path="">
            <NotFound />
        </Route>
    </Router>
</main>

<style global>
    a {
        @apply text-grasshopperGreen-500;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
