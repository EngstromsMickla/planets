# Planets, planets.mickla.se

Arbetsbeskrivning för Claude. Repot ligger i EngstromsMickla/planets och är publikt.

## Syfte
Ett lekfullt gravitationsspel för telefon, i himmelsatlasstil. Huvudsaken är att flyga i gravitationsfält som samverkar, och att krascha för att det är roligt. Mål är valfria: att lämna systemet är det första.

## Beslut
- Spelas i ett plan (2D), med gravyrskuggning i stället för 3D-grafik.
- Telefon först. Styrning: håll fingret där du vill, raketen vänder sig dit och puffar; släpp för att glida. Tangentbord: pilarna.
- Himmelsatlas på papper i mickla.se:s formspråk: papper #f6f4ef, grön #2f6b5e, ockra #a57a12, rost #b8532c, serif i rubriker, bara ljust läge.
- Kort banlinje, två sekunder framåt, med kryss vid kommande krasch.
- Planeterna går i fasta banor (krävs för slangbellor); raketen och vrakdelarna påverkas av alla kroppar.
- Krascher belönas: bläckstänk som sitter kvar, vrakdelar som ligger kvar i rymden och går att krocka med, fem slumpade kraschljud.
- Systemgränsen är en röd streckad ring. Utflykt räknas när farten är över flyktfarten och raketen passerar gränsen.
- Kameran följer raketen och håller solen och närmaste planet i bild.
- Ljud syntetiseras i webbläsaren; inga ljudfiler. Ljudet går att stänga av.
- Språk i spelet: engelska.

## Principer
- Helt statisk sajt. Inget sparas utom ljudvalet i webbläsaren, inget skickas, ingen statistik.
- Inga externa typsnitt, CDN eller bibliotek. Allt ligger i index.html.
- Inga hemligheter i repot. Inga tankstreck i texter.
- Sidfoten: Micklas orm, "© Engströms Mickla AB 2026" och "Planets" med version.

## Struktur
- `index.html`: hela spelet (stil, ljud, fysik, ritning). Det är den enda filen som publiceras.
- `scripts/kontroll.mjs`: kontroller före publicering (externa resurser, hemligheter, tankstreck, sidfot, att skripten går att tolka).
- `.github/workflows/publicera.yml`: kör kontrollerna och publicerar till GitHub Pages; stoppas om en kontroll fallerar.

## Publicering
Pages-källa: GitHub Actions. Custom domain: planets.mickla.se, CNAME hos one.com mot engstromsmickla.github.io, Enforce HTTPS på.
Testa i dator- och telefonstorlek innan publicering. Claude publicerar när Dan skriver "publicera".

## Versioner
- v0.1: en sol, tre planeter, höjdkurvor, tumstyrning, krascher med kvarliggande vrak.
- v0.2: följande kamera, större planeter, systemgräns och flyktfartsmätare.
- v0.3: ljud och engelska.
