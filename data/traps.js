/* Mistake drills. Mark the opponent's mistake with "?" and the refutation with "!". Every line is checked by `npm test`. */
const TRAPS = {
italian:[
  { name:"Fried Liver: 5...Nxd5?", gain:"White's attack against the stranded king is very strong.",
    moves:"e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5? {Natural, but the knight on d5 becomes a target and f7 has only the king to defend it. 5...Na5 was correct.} Nxf7! {The Fried Liver sacrifice: drag the king into the open.} Kxf7 Qf3+ {Check, and now the d5 knight is attacked twice.} Ke6 {The king must stay near d5 to protect the pinned knight.} Nc3 {Piles up on the pinned knight.} Nb4 {Black's best defense: protect d5 and threaten ...Nxc2+.} O-O {Calm and strong. The rook joins the attack.} c6 d4 {Open the center while the black king sits on e6. 6.d4 instead of 6.Nxf7 is even stronger, but Nxf7 is the classic.}" },
  { name:"Legal's Mate: 4...g6?", gain:"Checkmate on move 7.",
    moves:"e4 e5 Nf3 d6 Bc4 Bg4 {Pins the knight to the queen. This looks clever but invites a trick.} Nc3 g6? {Too slow. Black ignores the danger on e5 and f7.} Nxe5! {A queen sacrifice! The pin is fake because of what follows. If 5...dxe5 6.Qxg4 White wins a pawn safely.} Bxd1 {Taking the queen loses at once.} Bxf7+ {Drives the king forward.} Ke7 Nd5# {Legal's Mate: three minor pieces checkmate the king.}" },
  { name:"Two Knights: 4...h6?", gain:"White wins a rook.",
    moves:"e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 h6? {Kicking the knight looks natural, but it ignores the attack on f7. 4...d5 was necessary.} Nxf7! {The knight forks the queen on d8 and the rook on h8.} Qe7 Nxh8 {White wins the exchange plus a pawn.} d5 exd5 Nd4 c3 {White is a full rook up for a minor piece's worth of activity.}" },
  { name:"Quiet Italian: 5...Nh5?", gain:"White wins material with an attack on f7.",
    moves:"e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O Nh5? {The knight heads for f4, but it leaves f7 weak and the knight on h5 loose.} Ng5! {Double attack on f7 together with the c4 bishop.} d5 Bxd5 {Takes the pawn and keeps the pressure on f7.} Nd4 Nxf7 {Forks the queen and rook.} Qxd5 exd5 O-O Qxh5 {White has won two pieces for a rook and picks up the h5 knight.}" },
  { name:"Damiano: 2...f6?", gain:"White wins a rook.",
    moves:"e4 e5 Nf3 f6? {Defends e5 with a pawn, but weakens the e8–h5 diagonal and takes f6 from the knight.} Nxe5! {A sacrifice that exploits the open diagonal. Black's best is 3...Qe7, staying a pawn down.} fxe5 Qh5+ {Check on the weakened diagonal.} g6 {3...Ke7 4.Qxe5+ Kf7 5.Bc4+ is crushing.} Qxe5+ {Fork: check and attack on the h8 rook.} Qe7 Qxh8 Nf6 {White is up a full rook.}" }
],
ruy:[
  { name:"Exchange: 7...Bc5?", gain:"White wins a bishop with a queen fork.",
    moves:"e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 exd4 Nxd4 Bc5? {Attacks the knight, but ...f6 has weakened the e8–h5 diagonal.} Qh5+! {Check and attack on the c5 bishop at the same time.} g6 Qxc5 Ne7 Qc3 {White is a clean piece up.}" },
  { name:"Tarrasch Trap: 11...Qd7?", gain:"White wins a knight because d5 is pinned.",
    moves:"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 Re1 O-O Nd4 Qd7? {The queen steps onto the d-file behind the d5 pawn. That pawn now defends the e4 knight only on paper.} Nxe6! {Removes the bishop that guards d5.} fxe6 Rxe4! {If 13...dxe4 14.Qxd7, because the d5 pawn was shielding the queen.} Rf7 Re2 {White is simply a piece up.}" },
  { name:"Noah's Ark Trap (as Black)", side:"b", gain:"Black traps and wins the b3 bishop.",
    moves:"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 d4 b5 Bb3 Nxd4 Nxd4 exd4 Qxd4? {Natural, but it walks into a pawn trap. 8.c3 was correct.} c5! {Kicks the queen, and next ...c4 will trap the bishop.} Qd5 Be6 {Chases the queen again.} Qc6+ Bd7 Qd5 c4 {The bishop on b3 has no escape. Black wins a piece. This trap has caught many strong players.}" },
  { name:"Fishing Pole (as Black)", side:"b", gain:"Black opens the h-file against the castled king.",
    moves:"e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Ng4 {The bait: the knight looks free to take.} h3 h5 {Black keeps offering the knight.} hxg4? {Taking it opens the h-file for Black's rook and queen.} hxg4 {Now the f3 knight is attacked and ...Qh4 is coming.} c3 a6 Ba4 gxf3 {Black wins the knight back.} Qxf3 Qh4 {Queen and rook line up on the h-file. Black's attack is very dangerous.}" }
],
scotch:[
  { name:"Classical: 6...Na5?", gain:"White wins a piece with a pawn fork.",
    moves:"e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Na5? {The knight wanders to the edge where it can be attacked.} b4! {Forks the c5 bishop and the a5 knight.} Bxd4 Bxd4 {Gains time on the queen.} Qg6 bxa5 {White is a clean piece up.}" },
  { name:"Schmidt: 7...Bb4+?", gain:"White wins the f6 knight.",
    moves:"e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Bb4+? {A check that doesn't solve the attack on the f6 knight. 7...Qe7 was necessary.} c3! {Blocks with tempo on the bishop.} Bc5 exf6 {The knight is gone.} O-O Be2 Qxf6 O-O {White is a piece up for a pawn.}" }
],
kg:[
  { name:"KGD: 3.fxe5? (as Black)", side:"b", gain:"Black wins the h1 rook.",
    moves:"e4 e5 f4 Bc5 fxe5? {Grabbing the pawn is a classic mistake: the e1–h4 diagonal is open and the bishop stops castling.} Qh4+! {Check, and the queen will fork e4 and h1.} g3 Qxe4+ {Check again, with the h1 rook in the queen's sights.} Qe2 Qxh1 {Black is up a rook. White should play 3.Nf3 instead.}" }
],
vienna:[
  { name:"Frankenstein: 4...Nf6??", gain:"Checkmate on move 5.",
    moves:"e4 e5 Nc3 Nf6 Bc4 Nxe4 {Black grabs the pawn. Fine so far.} Qh5 {Attacks the e4 knight and f7 at the same time.} Nf6?? {Retreats and attacks the queen, but forgets f7. 4...Nd6 was the only move.} Qxf7# {The queen, backed by the c4 bishop, mates.}" }
],
petroff:[
  { name:"Steinitz: 6.f3? (as Black)", side:"b", gain:"Black wins the h1 rook.",
    moves:"e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5 Nxe5 Nd7 f3? {Kicks the e4 knight, but opens the e1–h4 diagonal.} Qh4+! {The knight on e4 is immune because of this check.} g3 Nxg3 {Sacrifices the knight to open the h-file.} hxg3 Qxh1+ Kd2 Qh2+ Qe2 Nxe5 {Black is up a rook and a pawn.}" },
  { name:"Classical: 4.Bb5+? (as Black)", side:"b", gain:"Black wins a piece for two pawns.",
    moves:"e4 e5 Nf3 Nf6 Nxe5 d6 Bb5+? {A careless check. White forgot that the e5 knight is attacked.} c6! {Blocks with tempo. Now both the bishop and the knight hang.} Nxf7 {White's best try: grab a pawn on the way out.} Kxf7 Bd3 Nbd7 {Black is up a piece for two pawns and will castle by hand.}" }
],
sicilian:[
  { name:"Siberian Trap vs Smith-Morra", gain:"Black wins the queen.",
    moves:"e4 c5 d4 cxd4 c3 {The Smith-Morra Gambit.} dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Qc7 O-O Nf6 Qe2 Ng4 {Eyes f2 and h2 together with the queen.} h3? {Natural, but it walks into a tactic. 9.Nb5 was better.} Nd4! {Attacks the queen. If 10.Nxd4 Qh2# is mate.} hxg4 Nxe2+ Bxe2 Bc5 {Black has won the queen for a knight.}" },
  { name:"Open: 4.Bb5?", gain:"Black wins the b5 bishop with a fork.",
    moves:"e4 c5 Nf3 Nc6 d4 cxd4 Bb5? {Pins the knight but leaves the bishop loose. 4.Nxd4 was the normal move.} Qa5+! {Check plus an attack on the b5 bishop.} c3 Qxb5 a4 Qa5 {Black is a piece up for a pawn.}" },
  { name:"Najdorf: 6.Bf4?", gain:"Black wins a piece with a pawn fork.",
    moves:"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bf4? {Attacks d6 but puts the bishop and the d4 knight on the same rank.} e5! {Forks the bishop and the knight.} Bg5 exd4 Bxf6 Qxf6 Nd5 Qd8 Qxd4 {Black is up a piece for a pawn.}" },
  { name:"Taimanov: 8.b3?", gain:"Black wins a pawn and trades into a winning position.",
    moves:"e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6 b3? {Weakens c3: now the knight there can be pinned and removed.} Bb4! {Pins the c3 knight against the queen, so e4 loses its defender.} a3 Nxe4 axb4 Nxd2 Kxd2 Nxd4 Bxd4 {Black has won a pawn and keeps the better structure.}" }
],
french:[
  { name:"Winawer: 4.b3?", gain:"Black wins the a1 rook.",
    moves:"e4 e6 d4 d5 Nc3 Bb4 b3? {Protects nothing and opens the long diagonal to a1.} Bxc3+! {Check, and the bishop then takes on a1.} Bd2 Bxa1 Qxa1 dxe4 {Black is an exchange and a pawn up.}" },
  { name:"Advance: 7...Nxd4? (trap to avoid)", side:"w", gain:"White wins the queen with a discovered fork.",
    moves:"e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4? {French players must know this one: the d4 pawn is poisoned. 7...Bd7 is correct.} Nxd4 Qxd4 {The queen looks safe on d4...} Bb5+! {...but the check uncovers an attack: the d1 queen now sees d4.} Kd8 Qxd4 {White wins the queen.}" }
],
caro:[
  { name:"Classical: 6.Nh5?", gain:"Black wins the h5 knight with a queen check.",
    moves:"e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5? {Chases the bishop, but the knight on h5 has no defender.} Qa5+! {Check, and the queen then takes the knight.} Bd2 Qxh5 {Black is a piece up.}" },
  { name:"Smothered Mate: 5...Ngf6?? (trap to avoid)", side:"w", gain:"Checkmate on move 6.",
    moves:"e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Qe2 {Sets a famous trap: the e7 pawn is pinned to the king.} Ngf6?? {The most natural move loses immediately. 5...Ndf6 is correct.} Nd6# {The e7 pawn is pinned, so nothing can take the knight. Smothered mate.}" }
],
scandi:[
  { name:"Modern: 5.Ne5?", gain:"Black wins the queen.",
    moves:"e4 d5 exd5 Nf6 d4 Nxd5 Nf3 Bg4 Ne5? {Attacks the bishop and hopes for Legal's mate ideas, but the queen is undefended.} Bxd1 {Simply takes the queen. There is no mate for White here.} Kxd1 e6 {Black is a queen for a bishop up.}" },
  { name:"Main: 3.b3?", gain:"Black wins the a1 rook.",
    moves:"e4 d5 exd5 Qxd5 b3? {Opens the long diagonal to a1 while the queen sits in the center.} Qe5+! {Check, and the queen next takes on a1.} Ne2 Qxa1 Nec3 Nf6 {Black is a rook up and the queen escapes.}" }
],
qg:[
  { name:"Slav: 5...b5?", gain:"White wins a pawn and Black's queenside falls apart.",
    moves:"d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 b5? {Holding on to c4 like this fails tactically.} axb5! {If ...cxb5, Nxb5 wins the pawn back with a dominant knight, and Black's a7 and c4 pawns are weak.} e6 e3 cxb5 Nxb5 Be7 Bxc4 {White wins back the gambit pawn with an extra pawn.}" },
  { name:"Exchange: 4...Bb4?", gain:"White wins a bishop with a queen fork.",
    moves:"d4 d5 c4 e6 Nc3 Nf6 cxd5 Bb4? {Pins the knight instead of recapturing, but leaves the bishop loose.} Qa4+! {Check plus an attack on b4.} Bd7 Qxb4 c5 Qxc5 {White is a piece and a pawn up.}" },
  { name:"Elephant Trap (as Black)", side:"b", gain:"Black wins a piece.",
    moves:"d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 Nxd5? {Grabs the pawn because the f6 knight looks pinned. It isn't.} Nxd5! {Gives up the queen for a moment.} Bxd8 Bb4+ {The check wins the queen back.} Qd2 Bxd2+ Kxd2 Kxd8 {Black is a full piece up.}" },
  { name:"Lasker Trap (as Black)", side:"b", gain:"Black underpromotes to a knight and wins the queen.",
    moves:"d4 d5 c4 e5 {The Albin Countergambit.} dxe5 d4 e3 Bb4+ Bd2 dxe3 Bxb4? {A natural capture that loses. 6.fxe3 was correct.} exf2+! {Check while attacking g1.} Ke2 fxg1=N+! {Promote to a knight with check. A queen would allow Rxg1.} Ke1 Qh4+ {Black wins. After 9.g3 Qe4+ the queen forks king and h1 rook.}" }
],
london:[
  { name:"vs 3...Qb6: 4...Qxb2?", gain:"White's knight jumps in with Nc7+ threats.",
    moves:"d4 d5 Bf4 c5 e3 Qb6 Nc3 {A gambit: White offers b2.} Qxb2? {Greedy. Black's queen and king both get into trouble.} Nxd5! {Threatens Nc7+ forking king and rook, and Rb1 trapping the queen.} Bf5 Qb1 {Offers a queen trade Black cannot avoid.} Qxb1+ Rxb1 Kd8 {Black's king is stuck in the center and b7 and c7 are weak. White is clearly better.}" }
],
kid:[
  { name:"Classical: 8.Qd2?", gain:"Black wins a pawn with a center tactic.",
    moves:"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 Qd2? {Puts the queen where the long diagonal and a knight fork can hit it.} exd4! {Opens the g7 bishop's diagonal.} Nxd4 Nxe4! {Takes the e4 pawn. After Nxe4, Black wins the piece back on d4, which the g7 bishop and c6 knight both attack.} Nxe4 Nxd4 {Black has won a central pawn and has active pieces.}" },
  { name:"Sämisch: 8.Bd2?", gain:"Black wins the h1 rook.",
    moves:"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Bd2? {Too slow, and it unprotects the e1–h4 diagonal.} Qh4+! {Check on the weakened dark squares.} Ke2 Ng3+ {Forks king and rook.} hxg3 Qxh1 {Black is up the exchange.}" }
],
nimzo:[
  { name:"Rubinstein: 5.b3?", gain:"Black wins the a1 rook.",
    moves:"d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O b3? {Opens the long diagonal toward a1.} Bxc3+! {Check, and the bishop continues to a1.} Bd2 Bxa1 Qxa1 d5 {Black is an exchange up.}" }
],
english:[
  { name:"Reversed Sicilian: 6...Nc4?", gain:"White wins the c4 knight with a queen check.",
    moves:"c4 e5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6 Nf3 Nc4? {The knight jumps forward with no support.} Qa4+! {Check, then the queen takes the knight.} Nc6 Qxc4 {White is a piece up.}" },
  { name:"Mikenas: 8...Qf5?", gain:"White traps the black queen.",
    moves:"c4 Nf6 Nc3 e6 e4 d5 e5 d4 exf6 dxc3 bxc3 Qxf6 d4 c5 Nf3 Qf5? {The queen goes to an exposed square with few escape routes.} Bd3! {Gains time on the queen.} Qh5 g4! {Chases it further.} Qxg4 Rg1 {The queen is trapped.} h5 Rxg4 hxg4 {White has won the queen for a rook.}" }
]
};
