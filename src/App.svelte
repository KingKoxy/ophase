<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Schedule from "@/components/schedule/@Schedule.svelte";
  import About from "@/components/about/@About.svelte";
  import Links from "@/components/links/@Links.svelte";
  import Home from "@/components/home/@Home.svelte";
  import NotFound from "@/components/notFound/@NotFound.svelte";
  import { darkMode } from "@/services/stores";
  import PageBase from "@/components/app/PageBase.svelte";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    darkMode.set(true);
  else darkMode.set(false);

  $: $darkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
</script>

<main
  class="dark:bg-backgroundDark-500 w-full min-h-screen transition-all duration-200"
>
  <Router>
    <PageBase>
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
    </PageBase>
  </Router>
</main>
