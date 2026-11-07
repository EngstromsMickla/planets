// Kontroller som körs före varje publicering. Ett enda fel stoppar publiceringen.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync("index.html", "utf8");
const fel = [];
const kontroll = (ok, text) => { if (!ok) fel.push(text); else console.log("ok  " + text); };

kontroll(/^<!DOCTYPE html>/i.test(html), "sidan börjar med <!DOCTYPE html>");
kontroll(/<title>[^<]+<\/title>/.test(html), "sidan har en titel");

// Inget laddas utifrån: inga externa skript, stilmallar, typsnitt, bilder eller anrop.
const externt = html.match(/(src|href)\s*=\s*["']\s*(https?:)?\/\/[^"']+|url\(\s*["']?(https?:)?\/\/|@import|fetch\(\s*["']https?:|XMLHttpRequest|WebSocket\(/gi) || [];
kontroll(externt.length === 0, "inget laddas från andra domäner" + (externt.length ? ": " + externt.join(", ") : ""));

// Inga hemligheter.
const hemligt = /(api[_-]?key|secret|passw(or)?d|token)\s*[:=]\s*["'][A-Za-z0-9_\-]{12,}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}/i;
kontroll(!hemligt.test(html), "inga nycklar eller lösenord i koden");

// Inga tankstreck i texterna.
kontroll(!/[–—]/.test(html), "inga tankstreck");

// Sidfoten med logotyp och copyright.
kontroll(/© Engströms Mickla AB 2026/.test(html), "sidfoten har copyright");
kontroll(/<footer>[\s\S]*<img[^>]+data:image\/png;base64/.test(html), "sidfoten har logotypen");

// All JavaScript går att tolka.
const skript = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
kontroll(skript.length > 0, "sidan har skript");
skript.forEach((kod, i) => {
  try { new vm.Script(kod); kontroll(true, `skript ${i + 1} går att tolka`); }
  catch (e) { kontroll(false, `skript ${i + 1} går att tolka: ${e.message}`); }
});

if (fel.length) { console.error("\nPubliceringen stoppas:\n- " + fel.join("\n- ")); process.exit(1); }
console.log("\nAlla kontroller gick igenom.");
