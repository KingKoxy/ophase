<script lang="ts">
  import { setClient } from "svelte-apollo";

  const SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

  import { Route, Router } from "svelte-routing";

  import Schedule from "@/components/schedule/@Schedule.svelte";
  import About from "@/components/about/@About.svelte";
  import Links from "@/components/links/@Links.svelte";
  import Home from "@/components/home/@Home.svelte";
  import NotFound from "@/components/notFound/@NotFound.svelte";
  import { darkMode } from "@/services/stores";
  import PageBase from "@/components/app/PageBase.svelte";
  import {
    ApolloClient,
    ApolloLink,
    concat,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { fetchSchedule } from "@/services/api";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    darkMode.set(true);
  else darkMode.set(false);

  $: $darkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  initApollo();

  //TODO: ENV variablen
  function initApollo() {
    const httpLink = new HttpLink({
      uri: "https://graphql.contentful.com/content/v1/spaces/" + SPACE_ID,
    });

    const authMiddleware = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      return forward(operation);
    });

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    });
    setClient(client);
  }

  fetchSchedule();
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
