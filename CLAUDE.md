# Planets, planets.mickla.se

Arbetsbeskrivning för Claude. Repot ligger i EngstromsMickla/planets och är publikt.

## Syfte
Ett lekfullt gravitationsspel för telefon, i himmelsatlasstil. Huvudsaken är att flyga i gravitationsfält som samverkar, och att krascha för att det är roligt. Mål är valfria: att lämna systemet är det första.

## Beslut
- Spelas i ett plan (2D), med gravyrskuggning i stället för 3D-grafik.
- Telefon först. Styrning: håll fingret där du vill, så flyger autopiloten dit (tar bort sidledsfart och motverkar gravitationen); släpp, så tar gravitationen över. Fingret på en planet får raketen att jaga planeten med förhandsmål. Autopiloten går runt solen. Tangentbord: pilarna, ren motor utan autopilot.
- Bränsle: autopilot och motor drar (cirka åtta sekunder full styrning per tank). Glid fyller på långsamt, nära passage förbi en planet fyller på snabbt. Tom tank betyder att raketen bara glider.
- Himmelsatlas på papper i mickla.se:s formspråk: papper #f6f4ef, grön #2f6b5e, ockra #a57a12, rost #b8532c, serif i rubriker, bara ljust läge.
- Banlinje tre och en halv sekund framåt, med kryss vid kommande krasch och en streckad spökplanet där en planet är vid närmaste passage (grön nära passage, röd träff).
- Planeterna går i fasta banor (krävs för slangbellor); raketen och vrakdelarna påverkas av alla kroppar. Nära ytan drar planeterna upp till dubbelt så hårt (avtar ut till 2,5 radier), så att nära passager ger bättre slangbellor. Slangbella räknas när man glider förbi en planet och vinner mer än 12 i fart.
- Tempot är 0,8 av simuleringens fart.
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
- v0.4: autopilot när fingret hålls, siktstöd mot planeter, väjning runt solen, längre banlinje med spökplaneter, lugnare tempo.
- v0.5: bränsle, starkare gravitation nära planeterna, slangbellor med text, ljud och räknare.
