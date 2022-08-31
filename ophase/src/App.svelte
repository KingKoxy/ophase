<script lang="ts">
    import { Route, Router } from "svelte-routing";

    import Schedule from "./lib/components/schedule/@Schedule.svelte";
    import About from "./lib/components/about/@About.svelte";
    import Links from "./lib/components/links/@Links.svelte";
    import Home from "./lib/components/home/@Home.svelte";
    import NotFound from "./lib/components/notFound/@NotFound.svelte";
    import { darkMode } from "./lib/services/stores";

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        darkMode.set(true);
    else darkMode.set(false);

    $: $darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
</script>

<main class="dark:bg-backgroundDark-500 w-full min-h-screen transition-all duration-200">
    <Router>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/schedule">
            <Schedule />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <!-- <Route path="/contact">
            <Home />
        </Route> -->
        <Route path="/links">
            <Links />
        </Route>
        <Route path="">
            <NotFound />
        </Route>
    </Router>
</main>

<!-- TODO: evtl reset scroll bei link, responsiveness -->
<style global>
    a {
        @apply text-grasshopperGreen-500;
    }
    a:hover {
        text-decoration: underline;
    }

    .link > :global(a:hover) {
        text-decoration: none;
    }


    .animate-underline::after, a::after{
        content: "";
        @apply bg-grasshopperGreen-500 absolute transition-all duration-150 h-px w-0 left-0 bottom-0;
    }
    .animate-underline:hover::after, a:hover::after{
        @apply w-full;
    }
</style>
