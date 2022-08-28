<script lang="ts">
    import Header from "./lib/app/Header.svelte";
    import Home from "./lib/home/@Home.svelte";
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
    <Header />
    <Router>
        <Route path="/">
            <Home />
        </Route>
    </Router>
</main>
