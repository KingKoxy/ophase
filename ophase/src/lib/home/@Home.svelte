<script>
    import Headline from "../app/Headline.svelte";
    import PageBase from "../app/PageBase.svelte";
    import Schedule from "./schedule/Schedule.svelte";
</script>

<PageBase>
    <section class="mb-10">
        <Headline>Willkommen</Headline>
        <div class="flex">
            <div class="inline-block mr-5">
                Da du das hier liest, heißt das wohl, dass du bald anfängst,
                Informatik oder Mathe am KIT zu studieren. Bei uns in Karlsruhe
                beginnt das Studium immer mit einer Woche ohne Vorlesungen, der
                sog. <a class="text-grasshopperGreen-500" href="https://o-phase.com">O-Phase</a> (kurz für
                Orientierungsphase), in der euch die Uni und Karlsruhe gezeigt
                werden.
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
                class="inline-block h-[300px]"
            />
        </div>
    </section>
    <section>
        <Headline>Wochenplan</Headline>
        <Schedule />
    </section>
</PageBase>
