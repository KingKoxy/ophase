<script lang="ts">
    import Headline from "../app/Headline.svelte";
    import PageBase from "../app/PageBase.svelte";
    const videos: { title: string; url: string }[] = [
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
        }
    ];

</script>

<PageBase location="/">
    <section class="mb-10">
        <Headline>Willkommen</Headline>
        <div class="md:flex ">
            <div class="inline-block md:mr-8 text-justify lg:mb-0 mb-5">
                Da du das hier liest, heißt das wohl, dass du bald anfängst,
                Informatik oder Mathe am KIT zu studieren. Bei uns in Karlsruhe
                beginnt das Studium immer mit einer Woche ohne Vorlesungen, der
                sog. <a
                    class="text-grasshopperGreen-500"
                    href="https://o-phase.com">O-Phase</a
                >
                (kurz für Orientierungsphase), in der euch die Uni und Karlsruhe
                gezeigt werden.
                <br /><br />
                Anders als andere Fakultäten, ist die Umsetzung der O-Phase bei uns
                Informatikern nicht nur zentral von der Fachschaft organisiert, sondern
                von den verschiedensten O-Phasengruppen, welche alle ihr eigenes
                Programm haben und unabhängig von Studierenden organisiert sind.
                Was uns als Gruppe zur ersten Wahl macht, liest du am besten unter
                "Über uns" oder in unserem Wochenplan für die O-Phase nach =)
            </div>
            <img
                src="images/Bild_Gruppenfoto2.jpg"
                alt="Gruppenfoto"
                class="inline-block md:h-[300px]"
            />
        </div>
    </section>
    <section>
        <Headline>O-Phasenvideos</Headline>
        <div class="flex flex-col items-center max-w-[800px]">
            {#each videos as video}
                <div class="relative overflow-hidden w-full pt-[56.25%] mb-10 ">
                    <iframe
                        class="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-0"
                        src={video.url}
                        title={video.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            {/each}
        </div>
    </section>
</PageBase>
