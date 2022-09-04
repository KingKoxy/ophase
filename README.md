# O-Phase HiGHtech

Dies ist der Code der Website der O-Phasengruppe HiGHtech am Karlsruher Institut für Technologie.

## Grundlegendes

Die Website ist in **Svelte** geschrieben, einem JS-Framework. Für das Styling wird **WindiCSS** verwendet, welches auf
Tailwind basiert.
Es gibt derzeit kein Backend, da die Daten nur statisch seien müssen. Mithilfe von **Vercel** kann die Seite
automatisch nach jedem Push auf `master` gebaut und deployt werden.

## Projektstruktur

Alle Komponenten und Views befinden sich im Ordner `src/lib/components`. Die einzelnen Views sind durch ein "@" vor dem
Bezeichner gekennzeichnet. Dadurch werden sie immer ganz oben im Ordner angezeigt. Assets müssen im Ordner `public`
abgelegt werden. Jegliche JS-/TS-Dateien liegen im Ordner `src/lib/services`.