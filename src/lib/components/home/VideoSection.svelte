<script lang="ts">
  import Headline from "@/components/app/Headline.svelte";

  const VIDEOS: { title: string; url: string }[] = [
    {
      title: "O-Phasenvideo 2020",
      url: "https://www.youtube.com/embed/wH3_RwnRAHE?list=PLPaUELt5iHoo0yYBNwf2RJksM-BEjtsnI",
    },
    {
      title: "O-Phasenvideo 2019",
      url: "https://www.youtube.com/embed/4BtYDevOMpM?list=PLPaUELt5iHoo0yYBNwf2RJksM-BEjtsnI",
    },
    {
      title: "O-Phasenvideo 2018",
      url: "https://www.youtube.com/embed/2_4D7LZ-nvY?list=PLPaUELt5iHoo0yYBNwf2RJksM-BEjtsnI",
    },
    {
      title: "O-Phasenvideo 2017",
      url: "https://www.youtube.com/embed/m8vV9UwK5eA?list=PLPaUELt5iHoo0yYBNwf2RJksM-BEjtsnI",
    },
    {
      title: "O-Phasenvideo 2016",
      url: "https://www.youtube.com/embed/zu52cIyDaWY",
    },
  ];
</script>

<section>
  <Headline>O-Phasenvideos</Headline>
  <div class="flex flex-col items-center max-w-[800px]">
    {#each VIDEOS as video}
      <div class="relative overflow-hidden w-full pt-[56.25%] mb-10 ">
        <iframe
          class="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0"
          src={video.url}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    {/each}
  </div>
</section>
