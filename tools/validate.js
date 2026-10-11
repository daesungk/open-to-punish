#!/usr/bin/env node
// Checks every opening line and mistake drill: legal moves, exactly one marked
// mistake per drill, unique names, and that each drill targets a known opening.
// Run with: npm test
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
for (const f of ["vendor/chess.js", "data/book.js", "data/traps.js", "data/ko.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8") + "\n;this.BOOK=typeof BOOK!=='undefined'?BOOK:this.BOOK;this.TRAPS=typeof TRAPS!=='undefined'?TRAPS:this.TRAPS;this.KO=typeof KO!=='undefined'?KO:this.KO;this.Chess=Chess;", ctx, { filename: f });
}
const { Chess, BOOK, TRAPS, KO } = ctx;

let errors = 0, lines = 0, traps = 0;
const fail = msg => { errors++; console.error("✗ " + msg); };
const tokens = s => [...s.matchAll(/\{[^}]*\}|(\S+)/g)].filter(m => m[1]).map(m => m[1]);

function check(op, ln, isTrap) {
  const g = new Chess();
  let marks = 0;
  for (const t of tokens(ln.moves)) {
    if (t.endsWith("?")) marks++;
    if (!g.move(t.replace(/[?!]+$/, ""))) {
      fail(`${op.name} / ${ln.name}: illegal move "${t}" in position ${g.fen()}`);
      return;
    }
  }
  if (isTrap && marks !== 1) fail(`${op.name} / ${ln.name}: drills need exactly one "?" mistake, found ${marks}`);
  if (!isTrap && marks) fail(`${op.name} / ${ln.name}: main lines should not contain "?" mistakes`);
  if (isTrap && !ln.gain) fail(`${op.name} / ${ln.name}: drill is missing a "gain" summary`);
  // Korean translation must cover the line name, result and every move note
  const k = KO.lines[op.id + "/" + ln.name];
  if (!k) fail(`${op.name} / ${ln.name}: no Korean name in data/ko.js (lines["${op.id}/${ln.name}"])`);
  else if (isTrap && !k.gain) fail(`${op.name} / ${ln.name}: no Korean result ("gain") in data/ko.js`);
  for (const m of ln.moves.matchAll(/\{([^}]*)\}/g)) {
    const note = m[1].trim(); koNotes++;
    if (!KO.notes[note]) fail(`${op.name} / ${ln.name}: no Korean for note "${note}" in data/ko.js`);
  }
}
let koNotes = 0;

const ids = new Set();
for (const op of BOOK) {
  if (ids.has(op.id)) fail(`duplicate opening id ${op.id}`);
  if (!KO.openings[op.id] || !KO.openings[op.id].name || !KO.openings[op.id].summary) fail(`${op.name}: no Korean name/summary in data/ko.js`);
  if (!(op.group in KO.groups)) fail(`group "${op.group}": no Korean name in data/ko.js`);
  ids.add(op.id);
  const names = new Set();
  for (const ln of op.lines) {
    if (names.has(ln.name)) fail(`${op.name}: duplicate line name "${ln.name}"`);
    names.add(ln.name); lines++; check(op, ln, false);
  }
  for (const ln of TRAPS[op.id] || []) {
    if (names.has(ln.name)) fail(`${op.name}: duplicate line name "${ln.name}"`);
    names.add(ln.name); traps++; check(op, ln, true);
  }
}
for (const k of Object.keys(TRAPS)) if (!ids.has(k)) fail(`TRAPS has unknown opening id "${k}"`);

if (errors) { console.error(`\n${errors} problem(s) found.`); process.exit(1); }
console.log(`✓ ${BOOK.length} openings, ${lines} main lines and ${traps} mistake drills are all legal and fully translated into Korean.`);
