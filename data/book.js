/* Main opening lines. Moves in SAN; {comments} explain the move before them. */
const BOOK = [
{ id:"italian", name:"Italian Game", eco:"C50–C54", side:"w", group:"1.e4 e5",
  summary:"White develops the bishop to c4 to aim at f7, Black's weakest square, and builds the center with c3 and d4 or d3. A classical opening that teaches fast development and king safety.",
  lines:[
  { name:"Giuoco Pianissimo", moves:"e4 {Takes the center and opens lines for the queen and the f1 bishop.} e5 {Black claims an equal share of the center.} Nf3 {Develops with a threat: the knight attacks e5.} Nc6 {Defends e5 while developing.} Bc4 {The Italian bishop. It points at f7, which only the king defends.} Bc5 {Black mirrors White; this bishop eyes f2.} c3 {Prepares d4 to build a two-pawn center.} Nf6 {Hits e4 so that White cannot push d4 for free.} d3 {The calm modern approach: e4 stays solid and the game becomes a long maneuvering battle.} d6 {Supports e5 and opens the light-squared bishop.} O-O {King safety before anything else.} O-O {Black castles too. The position is balanced.} Re1 {The rook supports e4 and prepares Nbd2–f1–g3.} a6 {Gives the c5 bishop a retreat on a7 so it cannot be trapped by b4 or d4.}" },
  { name:"Main Line 5.d4", moves:"e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 {The sharp classical try: strike the center right away.} exd4 {Black must take; otherwise d5 or dxe5 gains space.} cxd4 {White now has two central pawns.} Bb4+ {The best check. 6...Bb6? runs into 7.d5 and 8.e5.} Bd2 {The safest block. 7.Nc3 leads to the risky Møller Attack.} Bxd2+ Nbxd2 {Develops while recapturing.} d5 {Black breaks the white center before it can roll forward.} exd5 Nxd5 Qb3 {Pressures d5 and b7 at the same time.} Nce7 {Defends the d5 knight.} O-O O-O {White has an isolated d-pawn but active pieces. Equal chances.}" },
  { name:"Evans Gambit", moves:"e4 e5 Nf3 Nc6 Bc4 Bc5 b4 {The Evans Gambit: a pawn for time and a fast c3 and d4.} Bxb4 {Taking is the principled answer.} c3 {Gains a tempo on the bishop and prepares d4.} Ba5 {The bishop keeps an eye on c3 from a safe square.} d4 {White opens the center while Black's king is still uncastled.} exd4 O-O {Another pawn for development. White plans Qb3 or cxd4 with a huge center.} Nge7 {Solid: Black plans ...d5 to give back material and finish development.} cxd4 d5 {Returning the pawn blocks the c4 bishop's diagonal.} exd5 Nxd5 {Black has an extra pawn; White has open lines for the pieces.}" },
  { name:"Two Knights, 4.Ng5", moves:"e4 e5 Nf3 Nc6 Bc4 Nf6 {Two Knights Defense: Black counterattacks e4 instead of copying White.} Ng5 {Aggressive: the knight and bishop both hit f7.} d5 {The only good defense: block the bishop's diagonal.} exd5 Na5 {Do not recapture with the knight; 5...Nxd5 allows the Fried Liver attack. Black gives a pawn to chase the bishop.} Bb5+ c6 dxc6 bxc6 Be2 {The bishop retreats and White stays a pawn up.} h6 {Kicks the knight with tempo.} Nf3 e4 {Black's lead in space and development makes up for the pawn.} Ne5 Bd6 {Black develops and prepares to castle. Good compensation.}" },
  { name:"Two Knights, Quiet 4.d3", moves:"e4 e5 Nf3 Nc6 Bc4 Nf6 d3 {Protects e4 and avoids sharp theory. Very popular at all levels.} Be7 {Black keeps things solid and prepares to castle.} O-O O-O Re1 {Supports e4 and prepares to reroute the queen's knight.} d6 {Strengthens e5.} c3 {Prepares d4 or a Bb3 retreat square.}" }
  ]},
{ id:"ruy", name:"Ruy Lopez", eco:"C60–C99", side:"w", group:"1.e4 e5",
  summary:"The Spanish Game. White's bishop on b5 attacks the c6 knight, the defender of e5. It leads to rich, strategic positions and has been a top-level favorite for over a century.",
  lines:[
  { name:"Closed, Chigorin", moves:"e4 e5 Nf3 Nc6 Bb5 {The Spanish bishop puts indirect pressure on e5.} a6 {Morphy Defense: question the bishop right away.} Ba4 {Keeps the pin. 4.Bxc6 is the Exchange Variation.} Nf6 {Develops and attacks e4.} O-O {White can castle because ...Nxe4 is met by Re1 or d4.} Be7 {Black prepares to castle, keeping things solid.} Re1 {Now e4 is protected, so Bxc6 followed by Nxe5 is a real threat.} b5 {Removes the threat by chasing the bishop away.} Bb3 d6 {Supports e5 and opens the c8 bishop.} c3 {Gives the bishop a retreat on c2 and prepares d4.} O-O h3 {Stops ...Bg4, which would pin the knight once White plays d4.} Na5 {Chigorin plan: trade off the strong Spanish bishop.} Bc2 c5 {Gains space on the queenside and pressures d4.} d4 Qc7 {The classical Closed Spanish. Both sides maneuver for the long game.}" },
  { name:"Marshall Attack", moves:"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O {Castling first invites the Marshall.} c3 d5 {The Marshall Attack: Black gives a pawn for a fast kingside attack.} exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 {Main line: Black prepares ...Bd6 and ...Qh4.} d4 {Blunts the d6 bishop's future pressure and frees c1.} Bd6 Re1 Qh4 {Black's pieces swarm toward the white king.} g3 Qh3 {The queen sits next to the king. White must defend accurately.}" },
  { name:"Berlin Defense", moves:"e4 e5 Nf3 Nc6 Bb5 Nf6 {The Berlin: very solid, famous for neutralizing Kasparov in 2000.} O-O Nxe4 {Black takes the pawn; White wins it back right away.} d4 {Opens the e-file against Black's uncastled king.} Nd6 {Hits the b5 bishop.} Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 {The Berlin endgame: Black lost the right to castle but owns the bishop pair.} Nc3 Ke8 {The king tucks back to safety.} h3 h5 {Black gains kingside space and keeps the h-file option.}" },
  { name:"Exchange Variation", moves:"e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 {White gives up the bishop pair for a better pawn structure.} dxc6 {Recapturing away from the center opens lines for the queen and c8 bishop.} O-O {Now Nxe5 is a real threat, because ...Qd4 is gone.} f6 {Solid support of e5.} d4 exd4 Nxd4 c5 {Kicks the knight.} Nb3 Qxd1 Rxd1 {White has a healthy 4-vs-3 kingside majority for the endgame.}" }
  ]},
{ id:"scotch", name:"Scotch Game", eco:"C44–C45", side:"w", group:"1.e4 e5",
  summary:"White opens the center at once with d4. Play is direct, with open lines and quick piece activity. Magnus Carlsen and Garry Kasparov have both used it.",
  lines:[
  { name:"Classical 4...Bc5", moves:"e4 e5 Nf3 Nc6 d4 {The Scotch: blow the center open at move 3.} exd4 Nxd4 {White has a central knight and free development.} Bc5 {Attacks the d4 knight right away.} Be3 Qf6 {Black adds pressure on d4.} c3 {Firmly supports d4.} Nge7 {Develops toward the center while keeping f6 for the queen.} Bc4 O-O {Both sides finish development. Balanced.}" },
  { name:"Schmidt 4...Nf6", moves:"e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 {Counterattacks e4.} Nxc6 bxc6 e5 {Kicks the knight with tempo.} Qe7 {Pins e5 to the king.} Qe2 {Unpins and keeps the e5 pawn.} Nd5 c4 {Chases the knight again. This is the Mieses Variation.} Ba6 {Pins the c4 pawn to the queen.} b3 {Defends c4 and keeps the structure.}" }
  ]},
{ id:"kg", name:"King's Gambit", eco:"C30–C39", side:"w", group:"1.e4 e5",
  summary:"White offers the f-pawn on move 2 to open the f-file and rip open the center. A romantic opening full of attacking ideas that every player should see.",
  lines:[
  { name:"Accepted, Kieseritzky", moves:"e4 e5 f4 {The King's Gambit: deflect e5 to take the center with d4.} exf4 {Accepted.} Nf3 {Stops ...Qh4+.} g5 {Black tries to keep the extra pawn.} h4 {Attack the pawn chain at once.} g4 Ne5 {The Kieseritzky: the knight jumps forward instead of retreating.} Nf6 d4 d6 Nd3 Nxe4 Bxf4 {White wins back the pawn and has open lines.} Bg7 {Black develops with pressure on the long diagonal.}" },
  { name:"Accepted, Modern 3...d5", moves:"e4 e5 f4 exf4 Nf3 d5 {Black returns the pawn for fast development.} exd5 Nf6 {Develops and attacks d5.} Nc3 Nxd5 Nxd5 Qxd5 d4 Be7 c4 {Gains a tempo on the queen.} Qe4+ {Check with tempo; Black's queen is active.}" },
  { name:"Declined, 2...Bc5", moves:"e4 e5 f4 Bc5 {Declines. The bishop stops White from castling short soon.} Nf3 d6 {Supports e5 calmly.} c3 {Prepares d4 to kick the bishop.} Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 O-O {White has a big center; Black has quick development.}" }
  ]},
{ id:"vienna", name:"Vienna Game", eco:"C25–C29", side:"w", group:"1.e4 e5",
  summary:"White plays Nc3 before Nf3, keeping the f-pawn free to advance. A flexible system with a gambit edge.",
  lines:[
  { name:"Vienna Gambit", moves:"e4 e5 Nc3 {Defends e4 and keeps f4 available.} Nf6 f4 {The Vienna Gambit.} d5 {The best answer: strike in the center.} fxe5 Nxe4 Nf3 {Develops and supports e5.} Be7 d4 O-O Bd3 f5 {Black supports the strong e4 knight.} exf6 {Captures en passant to open the position.} Bxf6 {Black has active pieces and good play.}" },
  { name:"Vienna, Quiet 3.Bc4", moves:"e4 e5 Nc3 Nc6 Bc4 Nf6 d3 {A slow, solid buildup.} Na5 {Black hunts the light-squared bishop.} Nge2 Nxc4 dxc4 Bc5 {Black has the bishop pair; White has an open d-file.} O-O d6" }
  ]},
{ id:"petroff", name:"Petroff Defense", eco:"C42–C43", side:"b", group:"1.e4 e5",
  summary:"Black answers 2.Nf3 by counterattacking e4 with 2...Nf6. Extremely solid and a top-level drawing weapon. Learn the move-order trap before playing it.",
  lines:[
  { name:"Classical 3.Nxe5", moves:"e4 e5 Nf3 Nf6 {The Petroff: attack e4 instead of defending e5.} Nxe5 d6 {Essential. 3...Nxe4? 4.Qe2 and Black loses material.} Nf3 Nxe4 {Now Black wins back the pawn safely.} d4 d5 {Firmly supports the e4 knight.} Bd3 Nc6 O-O Be7 c4 Nb4 {Hits the d3 bishop. A main line of modern theory.}" },
  { name:"Steinitz 3.d4", moves:"e4 e5 Nf3 Nf6 d4 {White opens the center instead.} Nxe4 {Black grabs the e-pawn.} Bd3 d5 Nxe5 Nd7 {Challenges the strong e5 knight.} Nxd7 Bxd7 O-O Bd6 {Black is fully developed and solid.}" }
  ]},
{ id:"sicilian", name:"Sicilian Defense", eco:"B20–B99", side:"b", group:"Sicilian",
  summary:"Black answers 1.e4 with ...c5, fighting for d4 from the side. The structure is unbalanced, which creates winning chances for both sides. The most popular answer to 1.e4 at master level.",
  lines:[
  { name:"Najdorf, English Attack", moves:"e4 c5 {The Sicilian: an asymmetrical fight for d4.} Nf3 d6 {Controls e5 and prepares ...Nf6.} d4 cxd4 {Trades a wing pawn for a center pawn.} Nxd4 Nf6 {Develops with an attack on e4.} Nc3 a6 {The Najdorf: covers b5 and prepares ...e5 or ...b5.} Be3 e5 {Kicks the knight and claims d4.} Nb3 Be6 {Develops and watches d5.} f3 {The English Attack: White plans Qd2, O-O-O and g4.} Be7 Qd2 O-O O-O-O {Opposite-side castling: a race of pawn storms.} Nbd7 g4 b5 {Both sides launch their pawns at the enemy king.}" },
  { name:"Najdorf, 6.Bg5", moves:"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 {The sharpest try: pin the knight and push f4.} e6 {Solid; Black keeps d5 under control.} f4 Be7 Qf3 Qc7 O-O-O Nbd7 {Classic Najdorf: Black keeps flexibility and counterplay on the c-file.}" },
  { name:"Dragon, Yugoslav Attack", moves:"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 {The Dragon: the bishop goes to the long diagonal.} Be3 Bg7 f3 {Protects e4 and stops ...Ng4.} O-O Qd2 Nc6 Bc4 {Controls d5 and stops ...d5 in one move.} Bd7 O-O-O {The Yugoslav Attack. White plans h4-h5 to open the h-file.} Rc8 {Black aims down the half-open c-file.} Bb3 Ne5 h4 h5 {The Soltis Variation: Black slows White's h-pawn.}" },
  { name:"Sveshnikov", moves:"e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 {The Sveshnikov: gain time and space, accept a hole on d5.} Ndb5 {The knight heads toward d6.} d6 {Covers d6.} Bg5 a6 Na3 b5 {Black gains queenside space and keeps the a3 knight offside.} Bxf6 gxf6 {Damaged structure but the bishop pair.} Nd5 f5 {Black attacks the e4 pawn and activates the structure.}" },
  { name:"Taimanov", moves:"e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 {The Taimanov: flexible piece play.} Nc3 Qc7 {The queen watches e5 and the c-file.} Be3 a6 Qd2 Nf6 O-O-O {English Attack setup.} Bb4 {Pins the c3 knight and pressures e4.} f3 Ne5 {Black's pieces become very active.}" },
  { name:"Alapin 2.c3", moves:"e4 c5 c3 {The Alapin: prepare d4 to build a full center.} Nf6 {Hits e4 at once.} e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 {Undermines the e5 pawn.} Bc4 Nb6 Bb5 dxe5 Nxe5 Bd7 {Black challenges the e5 knight and develops.}" }
  ]},
{ id:"french", name:"French Defense", eco:"C00–C19", side:"b", group:"Other 1.e4",
  summary:"Black plays ...e6 and ...d5. The structure is solid but the c8 bishop is often hemmed in. Black counterattacks the white center with ...c5 and ...f6.",
  lines:[
  { name:"Winawer, Poisoned Pawn", moves:"e4 e6 {The French: prepare ...d5 with a solid pawn chain.} d4 d5 {Now e4 is challenged.} Nc3 Bb4 {The Winawer: pin the knight and pressure e4.} e5 c5 {Strike the chain at its base.} a3 {Asks the bishop to decide.} Bxc3+ bxc3 {White gets the bishop pair and doubled pawns.} Ne7 {Heads for f5 or c6 and keeps f6 free.} Qg4 {Attacks g7.} Qc7 {Black counterattacks on the queenside.} Qxg7 Rg8 Qxh7 cxd4 {Black gives the kingside pawns for central and queenside play.} Ne2 Nbc6 f4 Bd7 {A wild, double-edged position.}" },
  { name:"Advance Variation", moves:"e4 e6 d4 d5 e5 {The Advance: lock the center and gain space.} c5 {Hit the base of the pawn chain.} c3 {Supports d4.} Nc6 {More pressure on d4.} Nf3 Qb6 {Pressure on d4 and b2.} a3 {Prepares b4 to grab queenside space.} c4 {Locks the queenside.} Nbd2 Na5 {Heads for b3, where the knight is very annoying.}" },
  { name:"Tarrasch 3.Nd2", moves:"e4 e6 d4 d5 Nd2 {The Tarrasch: avoids the Winawer pin.} Nf6 e5 Nfd7 {The knight retreats but prepares ...c5 and ...f6.} Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 f6 {Break the e5 pawn.} exf6 Nxf6 {Black has free piece play; White targets the e6 pawn.}" },
  { name:"Classical 3...Nf6", moves:"e4 e6 d4 d5 Nc3 Nf6 {Develops and attacks e4.} Bg5 {Pins the knight.} Be7 e5 Nfd7 Bxe7 Qxe7 f4 {Supports e5 strongly.} O-O Nf3 c5 {The standard counterattack against d4.}" },
  { name:"Exchange Variation", moves:"e4 e6 d4 d5 exd5 {White releases the tension. A symmetrical structure follows.} exd5 {Now the c8 bishop is free.} Nf3 Nf6 Bd3 Bd6 O-O O-O Bg5 Bg4 {A balanced, symmetrical game.}" }
  ]},
{ id:"caro", name:"Caro-Kann Defense", eco:"B10–B19", side:"b", group:"Other 1.e4",
  summary:"Black prepares ...d5 with ...c6, keeping the c8 bishop free to develop outside the pawn chain. Solid and reliable.",
  lines:[
  { name:"Classical 4...Bf5", moves:"e4 c6 {The Caro-Kann: prepare ...d5 without blocking the c8 bishop.} d4 d5 Nc3 dxe4 Nxe4 Bf5 {The bishop develops with tempo on the knight.} Ng3 Bg6 h4 {Threatens h5 to trap the bishop.} h6 {Gives the bishop a retreat on h7.} Nf3 Nd7 {Stops Ne5.} h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7 {Black is solid; White has more space.}" },
  { name:"Advance Variation", moves:"e4 c6 d4 d5 e5 {Gain space and cramp Black.} Bf5 {Develop the bishop before ...e6.} Nf3 e6 Be2 c5 {The thematic break against d4.} Be3 Nd7 O-O Ne7 {Heading for c6 or f5.}" },
  { name:"Panov Attack", moves:"e4 c6 d4 d5 exd5 cxd5 c4 {The Panov: White accepts an isolated d-pawn for active play.} Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O O-O {A classic isolated queen's pawn position.}" },
  { name:"Exchange Variation", moves:"e4 c6 d4 d5 exd5 cxd5 Bd3 {Prevents ...Bf5.} Nc6 c3 Nf6 Bf4 Bg4 {Developing outside the chain.} Qb3 {Hits b7.} Qd7 Nd2 e6 Ngf3 Bd6 {Black offers a bishop trade. Equal.}" }
  ]},
{ id:"scandi", name:"Scandinavian Defense", eco:"B01", side:"b", group:"Other 1.e4",
  summary:"Black challenges e4 right away with 1...d5. Simple to learn, with clear plans for development.",
  lines:[
  { name:"Main Line 3...Qa5", moves:"e4 d5 {The Scandinavian: confront e4 at move 1.} exd5 Qxd5 Nc3 {Develops with tempo on the queen.} Qa5 {The queen is safe on a5 and pins the c3 knight indirectly.} d4 Nf6 Nf3 Bf5 {Develops the bishop before ...e6.} Bc4 e6 Bd2 c6 {Gives the queen a retreat on c7 or b6.} Qe2 Bb4 {Black is solid and well developed.}" },
  { name:"Modern 2...Nf6", moves:"e4 d5 exd5 Nf6 {Recapture with the knight, not the queen.} d4 Nxd5 Nf3 Bg4 Be2 e6 O-O Be7 c4 Nb6 {A solid position; White has more space.}" }
  ]},
{ id:"pirc", name:"Pirc Defense", eco:"B07–B09", side:"b", group:"Other 1.e4",
  summary:"Black lets White build a big center, then attacks it with ...c5 or ...e5 after fianchettoing the bishop on g7.",
  lines:[
  { name:"Austrian Attack", moves:"e4 d6 d4 Nf6 {Attacks e4.} Nc3 g6 {The Pirc fianchetto.} f4 {The Austrian Attack: a huge center.} Bg7 Nf3 O-O Bd3 Na6 {The knight heads to c7 or b4 and supports ...c5.} O-O c5 {Strike the center.}" },
  { name:"Classical 4.Nf3", moves:"e4 d6 d4 Nf6 Nc3 g6 Nf3 {Calm, classical development.} Bg7 Be2 O-O O-O c6 {Prepares ...b5 or ...Qc7 and ...e5.} a4 Nbd7 {Black prepares ...e5.}" }
  ]},
{ id:"qg", name:"Queen's Gambit", eco:"D06–D69", side:"w", group:"1.d4",
  summary:"White offers the c-pawn to deflect Black's d5 pawn and dominate the center. One of the oldest and soundest openings in chess.",
  lines:[
  { name:"QGD, Orthodox", moves:"d4 d5 c4 {The Queen's Gambit: not a real gambit, since White can usually win c4 back.} e6 {Declined: Black supports d5 firmly.} Nc3 Nf6 Bg5 {Pins the knight and adds pressure on d5.} Be7 {Breaks the pin.} e3 O-O Nf3 Nbd7 Rc1 {Prepares pressure on the c-file.} c6 Bd3 dxc4 Bxc4 Nd5 {Capablanca's freeing maneuver: trade pieces to relieve the cramp.}" },
  { name:"QGD, Exchange", moves:"d4 d5 c4 e6 Nc3 Nf6 cxd5 {Fixes the structure.} exd5 Bg5 c6 Qc2 Be7 e3 Nbd7 Bd3 O-O Nge2 {Flexible: White can play f3 and e4 or a minority attack with b4-b5.} Re8 O-O Nf8 {A standard rerouting to defend h7.}" },
  { name:"QG Accepted", moves:"d4 d5 c4 dxc4 {Accepted. Black takes now and gives back later.} Nf3 {Stops ...e5.} Nf6 e3 e6 Bxc4 c5 {Black challenges d4.} O-O a6 dxc5 Qxd1 Rxd1 Bxc5 {A balanced, open queenless middlegame.}" },
  { name:"Slav Defense", moves:"d4 d5 c4 c6 {The Slav: supports d5 without blocking the c8 bishop.} Nf3 Nf6 Nc3 dxc4 {Now Black takes, planning ...b5.} a4 {Stops ...b5.} Bf5 e3 e6 Bxc4 Bb4 O-O O-O Qe2 Nbd7 {Classic Slav: solid for Black, slight space edge for White.}" }
  ]},
{ id:"london", name:"London System", eco:"D02", side:"w", group:"1.d4",
  summary:"White builds the same setup against almost anything: d4, Bf4, e3, c3, Nf3, Nbd2, Bd3. Easy to learn and reliable.",
  lines:[
  { name:"vs 1...d5", moves:"d4 d5 Bf4 {The London bishop develops before e3 locks it in.} Nf6 e3 c5 {The most testing reply.} c3 {Solid support of d4.} Nc6 Nd2 e6 Ngf3 Bd6 {Offers a bishop trade.} Bg3 {Keeps the bishop. If ...Bxg3 then hxg3 opens the h-file.} O-O Bd3 b6 Ne5 {The typical outpost.}" },
  { name:"vs King's Indian setup", moves:"d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2 d6 h3 {A safe square for the bishop if ...Nh5.} c5 c3 Nc6 O-O {A solid position; White plans Nbd2 and a timely e4.}" }
  ]},
{ id:"kid", name:"King's Indian Defense", eco:"E60–E99", side:"b", group:"1.d4",
  summary:"Black allows White a big center, then attacks it with ...e5 or ...c5. Often leads to sharp positions with attacks on opposite wings.",
  lines:[
  { name:"Classical Mar del Plata", moves:"d4 Nf6 c4 g6 {The King's Indian.} Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 {The key strike against d4.} O-O Nc6 d5 Ne7 {The center is closed. Now the race begins on opposite wings.} Ne1 Nd7 {Preparing ...f5.} Nd3 f5 {Black's kingside attack starts.}" },
  { name:"Sämisch", moves:"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 {The Sämisch: rock-solid center and a possible g4/h4 attack.} O-O Be3 e5 d5 Nh5 {Prepares ...f5.} Qd2 f5" }
  ]},
{ id:"nimzo", name:"Nimzo-Indian Defense", eco:"E20–E59", side:"b", group:"1.d4",
  summary:"Black pins the c3 knight with ...Bb4 to fight for e4. Flexible and highly respected; a lifetime opening.",
  lines:[
  { name:"Classical 4.Qc2", moves:"d4 Nf6 c4 e6 Nc3 Bb4 {The Nimzo pin: control e4.} Qc2 {Avoids doubled pawns.} O-O a3 Bxc3+ Qxc3 d5 Nf3 dxc4 Qxc4 b6 {Black develops the light-squared bishop on b7.}" },
  { name:"Rubinstein 4.e3", moves:"d4 Nf6 c4 e6 Nc3 Bb4 e3 {The Rubinstein: solid development.} O-O Bd3 d5 Nf3 c5 O-O Nc6 a3 Bxc3 bxc3 dxc4 Bxc4 Qc7 {Black plans ...e5.}" }
  ]},
{ id:"grunfeld", name:"Grünfeld Defense", eco:"D70–D99", side:"b", group:"1.d4",
  summary:"Black invites White to build a big pawn center and then attacks it with pieces and ...c5. Dynamic and concrete.",
  lines:[
  { name:"Exchange, Rb1", moves:"d4 Nf6 c4 g6 Nc3 d5 {The Grünfeld.} cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 {The bishop eyes the white center.} Nf3 c5 {More pressure on d4.} Rb1 {Rook leaves the diagonal and hits b7.} O-O Be2 cxd4 cxd4 Qa5+ Bd2 Qxa2 O-O {A modern main line: White gives a pawn for activity.}" },
  { name:"Russian System", moves:"d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 {Pressure on d5.} dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7 {Black prepares ...Nb6 and ...Nc6 to strike the center.}" }
  ]},
{ id:"english", name:"English Opening", eco:"A10–A39", side:"w", group:"Flank",
  summary:"White starts with 1.c4, controlling d5 from the side. Often a reversed Sicilian. Flexible and positional.",
  lines:[
  { name:"Reversed Sicilian", moves:"c4 {The English: control d5 from the wing.} e5 Nc3 Nf6 g3 {Fianchetto to dominate the long diagonal.} d5 cxd5 Nxd5 Bg2 Nb6 Nf3 Nc6 O-O Be7 d3 O-O {A reversed Sicilian Dragon with an extra tempo for White.}" },
  { name:"Symmetrical", moves:"c4 c5 {Black copies White and fights for d4.} Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e6 {Prepares ...Nge7 so the long diagonal stays open.} O-O Nge7 d3 O-O {Both sides maneuver; the d4 and b4 squares are key.}" },
  { name:"Mikenas Attack", moves:"c4 Nf6 Nc3 e6 e4 {The Mikenas: grab the center right away.} d5 e5 d4 {Black counterattacks the c3 knight.} exf6 dxc3 bxc3 Qxf6 d4 c5 Nf3 h6 {Roughly equal: White has the center, Black the healthier structure.}" }
  ]}
];
