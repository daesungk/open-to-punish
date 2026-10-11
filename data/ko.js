/* Korean translations of the opening content. Keys are the English text (notes) or ids,
   so editing an English note without updating it here falls back to English and fails npm test. */
const KO = {
 "groups": {
  "1.e4 e5": "1.e4 e5",
  "Sicilian": "시실리안",
  "Other 1.e4": "기타 1.e4",
  "1.d4": "1.d4",
  "Flank": "측면 오프닝"
 },
 "openings": {
  "italian": {
   "name": "이탈리안 게임",
   "summary": "백은 비숍을 c4로 전개해 흑의 가장 약한 칸인 f7을 노리고, c3와 d4 또는 d3로 중앙을 세웁니다. 빠른 전개와 킹의 안전을 배우기 좋은 클래식 오프닝입니다."
  },
  "ruy": {
   "name": "루이 로페즈",
   "summary": "스페니시 게임입니다. b5의 백 비숍이 e5를 지키는 c6 나이트를 공격합니다. 풍부하고 전략적인 형세로 이어지며, 100년 넘게 최상위 선수들이 즐겨 쓰는 오프닝입니다."
  },
  "scotch": {
   "name": "스카치 게임",
   "summary": "백이 d4로 곧바로 중앙을 엽니다. 열린 줄과 빠른 기물 활동으로 직선적인 게임이 됩니다. 매그너스 칼센과 가리 카스파로프도 사용했습니다."
  },
  "kg": {
   "name": "킹스 갬빗",
   "summary": "백이 2수째에 f폰을 내주고 f파일을 열어 중앙을 무너뜨립니다. 공격 아이디어가 가득한 낭만적인 오프닝으로, 누구나 한 번쯤 경험해 볼 만합니다."
  },
  "vienna": {
   "name": "비엔나 게임",
   "summary": "백이 Nf3보다 먼저 Nc3를 두어 f폰을 자유롭게 밀 수 있게 합니다. 갬빗의 날카로움을 지닌 유연한 시스템입니다."
  },
  "petroff": {
   "name": "페트로프 디펜스",
   "summary": "흑이 2.Nf3에 2...Nf6로 e4를 반격합니다. 매우 단단하며 최상위 무대의 무승부 무기입니다. 두기 전에 수순 함정을 꼭 익혀 두세요."
  },
  "sicilian": {
   "name": "시실리안 디펜스",
   "summary": "흑이 1.e4에 ...c5로 응수해 측면에서 d4를 두고 싸웁니다. 구조가 비대칭이라 양쪽 모두 이길 기회가 생깁니다. 마스터 수준에서 1.e4에 대한 가장 인기 있는 대응입니다."
  },
  "french": {
   "name": "프렌치 디펜스",
   "summary": "흑이 ...e6와 ...d5를 둡니다. 구조는 단단하지만 c8 비숍이 갇히기 쉽습니다. 흑은 ...c5와 ...f6로 백의 중앙을 반격합니다."
  },
  "caro": {
   "name": "카로칸 디펜스",
   "summary": "흑이 ...c6로 ...d5를 준비해, c8 비숍을 폰 체인 밖으로 자유롭게 전개합니다. 단단하고 믿을 만합니다."
  },
  "scandi": {
   "name": "스칸디나비안 디펜스",
   "summary": "흑이 1...d5로 바로 e4에 맞섭니다. 배우기 쉽고 전개 계획이 분명합니다."
  },
  "pirc": {
   "name": "피르크 디펜스",
   "summary": "흑은 백이 큰 중앙을 세우게 둔 뒤, 비숍을 g7에 피앙케토하고 ...c5나 ...e5로 그 중앙을 공격합니다."
  },
  "qg": {
   "name": "퀸스 갬빗",
   "summary": "백이 c폰을 내주어 흑의 d5 폰을 끌어내고 중앙을 장악합니다. 체스에서 가장 오래되고 견고한 오프닝 중 하나입니다."
  },
  "london": {
   "name": "런던 시스템",
   "summary": "백은 거의 모든 대응에 같은 배치를 세웁니다: d4, Bf4, e3, c3, Nf3, Nbd2, Bd3. 배우기 쉽고 믿을 만합니다."
  },
  "kid": {
   "name": "킹스 인디언 디펜스",
   "summary": "흑은 백에게 큰 중앙을 허용한 뒤 ...e5나 ...c5로 공격합니다. 서로 반대쪽 날개를 공격하는 날카로운 형세가 자주 나옵니다."
  },
  "nimzo": {
   "name": "님조인디언 디펜스",
   "summary": "흑이 ...Bb4로 c3 나이트를 핀해 e4를 두고 싸웁니다. 유연하고 높이 평가받는, 평생 쓸 수 있는 오프닝입니다."
  },
  "grunfeld": {
   "name": "그륀펠트 디펜스",
   "summary": "흑은 백이 큰 폰 중앙을 세우도록 유도한 뒤 기물과 ...c5로 공격합니다. 역동적이고 구체적입니다."
  },
  "english": {
   "name": "잉글리시 오프닝",
   "summary": "백이 1.c4로 시작해 측면에서 d5를 통제합니다. 종종 뒤집힌 시실리안이 됩니다. 유연하고 포지셔널합니다."
  }
 },
 "lines": {
  "italian/Giuoco Pianissimo": {
   "name": "조코 피아니시모"
  },
  "italian/Main Line 5.d4": {
   "name": "메인 라인 5.d4"
  },
  "italian/Evans Gambit": {
   "name": "에반스 갬빗"
  },
  "italian/Two Knights, 4.Ng5": {
   "name": "투 나이츠, 4.Ng5"
  },
  "italian/Two Knights, Quiet 4.d3": {
   "name": "투 나이츠, 조용한 4.d3"
  },
  "italian/Fried Liver: 5...Nxd5?": {
   "name": "프라이드 리버: 5...Nxd5?",
   "gain": "고립된 킹을 향한 백의 공격이 매우 강합니다."
  },
  "italian/Legal's Mate: 4...g6?": {
   "name": "르갈의 메이트: 4...g6?",
   "gain": "7수 만에 체크메이트."
  },
  "italian/Two Knights: 4...h6?": {
   "name": "투 나이츠: 4...h6?",
   "gain": "백이 룩을 얻습니다."
  },
  "italian/Quiet Italian: 5...Nh5?": {
   "name": "조용한 이탈리안: 5...Nh5?",
   "gain": "f7 공격으로 백이 기물을 얻습니다."
  },
  "italian/Damiano: 2...f6?": {
   "name": "다미아노: 2...f6?",
   "gain": "백이 룩을 얻습니다."
  },
  "ruy/Closed, Chigorin": {
   "name": "클로즈드, 치고린"
  },
  "ruy/Marshall Attack": {
   "name": "마셜 공격"
  },
  "ruy/Berlin Defense": {
   "name": "베를린 디펜스"
  },
  "ruy/Exchange Variation": {
   "name": "익스체인지 바리에이션"
  },
  "ruy/Exchange: 7...Bc5?": {
   "name": "익스체인지: 7...Bc5?",
   "gain": "퀸 포크로 백이 비숍을 얻습니다."
  },
  "ruy/Tarrasch Trap: 11...Qd7?": {
   "name": "타라쉬 함정: 11...Qd7?",
   "gain": "d5가 핀되어 있어 백이 나이트를 얻습니다."
  },
  "ruy/Noah's Ark Trap (as Black)": {
   "name": "노아의 방주 함정 (흑으로)",
   "gain": "흑이 b3 비숍을 가두어 얻습니다."
  },
  "ruy/Fishing Pole (as Black)": {
   "name": "낚싯대 함정 (흑으로)",
   "gain": "흑이 캐슬링한 킹을 향해 h파일을 엽니다."
  },
  "scotch/Classical 4...Bc5": {
   "name": "클래시컬 4...Bc5"
  },
  "scotch/Schmidt 4...Nf6": {
   "name": "슈미트 4...Nf6"
  },
  "scotch/Classical: 6...Na5?": {
   "name": "클래시컬: 6...Na5?",
   "gain": "폰 포크로 백이 기물을 얻습니다."
  },
  "scotch/Schmidt: 7...Bb4+?": {
   "name": "슈미트: 7...Bb4+?",
   "gain": "백이 f6 나이트를 얻습니다."
  },
  "kg/Accepted, Kieseritzky": {
   "name": "수락, 키저리츠키"
  },
  "kg/Accepted, Modern 3...d5": {
   "name": "수락, 모던 3...d5"
  },
  "kg/Declined, 2...Bc5": {
   "name": "거절, 2...Bc5"
  },
  "kg/KGD: 3.fxe5? (as Black)": {
   "name": "킹스 갬빗 거절: 3.fxe5? (흑으로)",
   "gain": "흑이 h1 룩을 얻습니다."
  },
  "vienna/Vienna Gambit": {
   "name": "비엔나 갬빗"
  },
  "vienna/Vienna, Quiet 3.Bc4": {
   "name": "비엔나, 조용한 3.Bc4"
  },
  "vienna/Frankenstein: 4...Nf6??": {
   "name": "프랑켄슈타인: 4...Nf6??",
   "gain": "5수 만에 체크메이트."
  },
  "petroff/Classical 3.Nxe5": {
   "name": "클래시컬 3.Nxe5"
  },
  "petroff/Steinitz 3.d4": {
   "name": "슈타이니츠 3.d4"
  },
  "petroff/Steinitz: 6.f3? (as Black)": {
   "name": "슈타이니츠: 6.f3? (흑으로)",
   "gain": "흑이 h1 룩을 얻습니다."
  },
  "petroff/Classical: 4.Bb5+? (as Black)": {
   "name": "클래시컬: 4.Bb5+? (흑으로)",
   "gain": "흑이 폰 두 개를 주고 기물 하나를 얻습니다."
  },
  "sicilian/Najdorf, English Attack": {
   "name": "나이도르프, 잉글리시 공격"
  },
  "sicilian/Najdorf, 6.Bg5": {
   "name": "나이도르프, 6.Bg5"
  },
  "sicilian/Dragon, Yugoslav Attack": {
   "name": "드래곤, 유고슬라브 공격"
  },
  "sicilian/Sveshnikov": {
   "name": "스베시니코프"
  },
  "sicilian/Taimanov": {
   "name": "타이마노프"
  },
  "sicilian/Alapin 2.c3": {
   "name": "알라핀 2.c3"
  },
  "sicilian/Siberian Trap vs Smith-Morra": {
   "name": "스미스-모라 상대 시베리안 함정",
   "gain": "흑이 퀸을 얻습니다."
  },
  "sicilian/Open: 4.Bb5?": {
   "name": "오픈: 4.Bb5?",
   "gain": "포크로 흑이 b5 비숍을 얻습니다."
  },
  "sicilian/Najdorf: 6.Bf4?": {
   "name": "나이도르프: 6.Bf4?",
   "gain": "폰 포크로 흑이 기물을 얻습니다."
  },
  "sicilian/Taimanov: 8.b3?": {
   "name": "타이마노프: 8.b3?",
   "gain": "흑이 폰을 얻고 이기는 형세로 교환합니다."
  },
  "french/Winawer, Poisoned Pawn": {
   "name": "위나워, 포이즌드 폰"
  },
  "french/Advance Variation": {
   "name": "어드밴스 바리에이션"
  },
  "french/Tarrasch 3.Nd2": {
   "name": "타라쉬 3.Nd2"
  },
  "french/Classical 3...Nf6": {
   "name": "클래시컬 3...Nf6"
  },
  "french/Exchange Variation": {
   "name": "익스체인지 바리에이션"
  },
  "french/Winawer: 4.b3?": {
   "name": "위나워: 4.b3?",
   "gain": "흑이 a1 룩을 얻습니다."
  },
  "french/Advance: 7...Nxd4? (trap to avoid)": {
   "name": "어드밴스: 7...Nxd4? (피해야 할 함정)",
   "gain": "디스커버드 포크로 백이 퀸을 얻습니다."
  },
  "caro/Classical 4...Bf5": {
   "name": "클래시컬 4...Bf5"
  },
  "caro/Advance Variation": {
   "name": "어드밴스 바리에이션"
  },
  "caro/Panov Attack": {
   "name": "파노프 공격"
  },
  "caro/Exchange Variation": {
   "name": "익스체인지 바리에이션"
  },
  "caro/Classical: 6.Nh5?": {
   "name": "클래시컬: 6.Nh5?",
   "gain": "퀸 체크로 흑이 h5 나이트를 얻습니다."
  },
  "caro/Smothered Mate: 5...Ngf6?? (trap to avoid)": {
   "name": "스머더드 메이트: 5...Ngf6?? (피해야 할 함정)",
   "gain": "6수 만에 체크메이트."
  },
  "scandi/Main Line 3...Qa5": {
   "name": "메인 라인 3...Qa5"
  },
  "scandi/Modern 2...Nf6": {
   "name": "모던 2...Nf6"
  },
  "scandi/Modern: 5.Ne5?": {
   "name": "모던: 5.Ne5?",
   "gain": "흑이 퀸을 얻습니다."
  },
  "scandi/Main: 3.b3?": {
   "name": "메인: 3.b3?",
   "gain": "흑이 a1 룩을 얻습니다."
  },
  "pirc/Austrian Attack": {
   "name": "오스트리안 공격"
  },
  "pirc/Classical 4.Nf3": {
   "name": "클래시컬 4.Nf3"
  },
  "qg/QGD, Orthodox": {
   "name": "퀸스 갬빗 거절, 오소독스"
  },
  "qg/QGD, Exchange": {
   "name": "퀸스 갬빗 거절, 익스체인지"
  },
  "qg/QG Accepted": {
   "name": "퀸스 갬빗 수락"
  },
  "qg/Slav Defense": {
   "name": "슬라브 디펜스"
  },
  "qg/Slav: 5...b5?": {
   "name": "슬라브: 5...b5?",
   "gain": "백이 폰을 얻고 흑의 퀸사이드가 무너집니다."
  },
  "qg/Exchange: 4...Bb4?": {
   "name": "익스체인지: 4...Bb4?",
   "gain": "퀸 포크로 백이 비숍을 얻습니다."
  },
  "qg/Elephant Trap (as Black)": {
   "name": "엘리펀트 함정 (흑으로)",
   "gain": "흑이 기물 하나를 얻습니다."
  },
  "qg/Lasker Trap (as Black)": {
   "name": "라스커 함정 (흑으로)",
   "gain": "흑이 나이트로 언더프로모션해 퀸을 얻습니다."
  },
  "london/vs 1...d5": {
   "name": "1...d5 상대"
  },
  "london/vs King's Indian setup": {
   "name": "킹스 인디언 배치 상대"
  },
  "london/vs 3...Qb6: 4...Qxb2?": {
   "name": "3...Qb6 상대: 4...Qxb2?",
   "gain": "백 나이트가 Nc7+ 위협과 함께 뛰어듭니다."
  },
  "kid/Classical Mar del Plata": {
   "name": "클래시컬 마르델플라타"
  },
  "kid/Sämisch": {
   "name": "셰미시"
  },
  "kid/Classical: 8.Qd2?": {
   "name": "클래시컬: 8.Qd2?",
   "gain": "중앙 전술로 흑이 폰을 얻습니다."
  },
  "kid/Sämisch: 8.Bd2?": {
   "name": "셰미시: 8.Bd2?",
   "gain": "흑이 h1 룩을 얻습니다."
  },
  "nimzo/Classical 4.Qc2": {
   "name": "클래시컬 4.Qc2"
  },
  "nimzo/Rubinstein 4.e3": {
   "name": "루빈스타인 4.e3"
  },
  "nimzo/Rubinstein: 5.b3?": {
   "name": "루빈스타인: 5.b3?",
   "gain": "흑이 a1 룩을 얻습니다."
  },
  "grunfeld/Exchange, Rb1": {
   "name": "익스체인지, Rb1"
  },
  "grunfeld/Russian System": {
   "name": "러시안 시스템"
  },
  "english/Reversed Sicilian": {
   "name": "뒤집힌 시실리안"
  },
  "english/Symmetrical": {
   "name": "대칭형"
  },
  "english/Mikenas Attack": {
   "name": "미케나스 공격"
  },
  "english/Reversed Sicilian: 6...Nc4?": {
   "name": "뒤집힌 시실리안: 6...Nc4?",
   "gain": "퀸 체크로 백이 c4 나이트를 얻습니다."
  },
  "english/Mikenas: 8...Qf5?": {
   "name": "미케나스: 8...Qf5?",
   "gain": "백이 흑 퀸을 가둡니다."
  }
 },
 "notes": {
  "Takes the center and opens lines for the queen and the f1 bishop.": "중앙을 차지하고 퀸과 f1 비숍의 길을 엽니다.",
  "Black claims an equal share of the center.": "흑도 중앙을 똑같이 나눠 가집니다.",
  "Develops with a threat: the knight attacks e5.": "위협과 함께 전개합니다. 나이트가 e5를 공격합니다.",
  "Defends e5 while developing.": "전개하면서 e5를 지킵니다.",
  "The Italian bishop. It points at f7, which only the king defends.": "이탈리안 비숍입니다. 킹만 지키고 있는 f7을 겨냥합니다.",
  "Black mirrors White; this bishop eyes f2.": "흑이 백을 따라 합니다. 이 비숍은 f2를 노립니다.",
  "Prepares d4 to build a two-pawn center.": "d4를 준비해 중앙에 폰 두 개를 세우려 합니다.",
  "Hits e4 so that White cannot push d4 for free.": "e4를 공격해서 백이 d4를 공짜로 두지 못하게 합니다.",
  "The calm modern approach: e4 stays solid and the game becomes a long maneuvering battle.": "차분한 현대적 방식입니다. e4가 단단히 유지되고, 긴 기동전이 됩니다.",
  "Supports e5 and opens the light-squared bishop.": "e5를 받치고 흰 칸 비숍의 길을 엽니다.",
  "King safety before anything else.": "무엇보다 먼저 킹의 안전입니다.",
  "Black castles too. The position is balanced.": "흑도 캐슬링합니다. 형세는 균형입니다.",
  "The rook supports e4 and prepares Nbd2–f1–g3.": "룩이 e4를 받치고, Nbd2–f1–g3 이동을 준비합니다.",
  "Gives the c5 bishop a retreat on a7 so it cannot be trapped by b4 or d4.": "c5 비숍이 a7로 물러날 자리를 만들어, b4나 d4로 갇히지 않게 합니다.",
  "The sharp classical try: strike the center right away.": "날카로운 클래식 시도입니다. 바로 중앙을 칩니다.",
  "Black must take; otherwise d5 or dxe5 gains space.": "흑은 잡아야 합니다. 그렇지 않으면 d5나 dxe5로 백이 공간을 얻습니다.",
  "White now has two central pawns.": "이제 백은 중앙 폰이 두 개입니다.",
  "The best check. 6...Bb6? runs into 7.d5 and 8.e5.": "가장 좋은 체크입니다. 6...Bb6?는 7.d5와 8.e5에 당합니다.",
  "The safest block. 7.Nc3 leads to the risky Møller Attack.": "가장 안전한 막기입니다. 7.Nc3는 위험한 묄러 공격으로 이어집니다.",
  "Develops while recapturing.": "되잡으면서 전개합니다.",
  "Black breaks the white center before it can roll forward.": "흑이 백의 중앙이 밀고 나오기 전에 부숩니다.",
  "Pressures d5 and b7 at the same time.": "d5와 b7을 동시에 압박합니다.",
  "Defends the d5 knight.": "d5 나이트를 지킵니다.",
  "White has an isolated d-pawn but active pieces. Equal chances.": "백은 고립된 d폰이 있지만 기물이 활발합니다. 기회는 대등합니다.",
  "The Evans Gambit: a pawn for time and a fast c3 and d4.": "에반스 갬빗입니다. 폰 하나를 주고 시간을 벌어 빠르게 c3와 d4를 둡니다.",
  "Taking is the principled answer.": "받는 것이 원칙적인 대응입니다.",
  "Gains a tempo on the bishop and prepares d4.": "비숍을 공격해 템포를 얻고 d4를 준비합니다.",
  "The bishop keeps an eye on c3 from a safe square.": "비숍이 안전한 칸에서 c3를 계속 노립니다.",
  "White opens the center while Black's king is still uncastled.": "흑 킹이 아직 캐슬링하지 않았을 때 백이 중앙을 엽니다.",
  "Another pawn for development. White plans Qb3 or cxd4 with a huge center.": "전개를 위해 폰을 하나 더 줍니다. 백은 Qb3나 cxd4로 큰 중앙을 노립니다.",
  "Solid: Black plans ...d5 to give back material and finish development.": "단단한 수입니다. 흑은 ...d5로 기물을 돌려주고 전개를 마치려 합니다.",
  "Returning the pawn blocks the c4 bishop's diagonal.": "폰을 돌려주면서 c4 비숍의 대각선을 막습니다.",
  "Black has an extra pawn; White has open lines for the pieces.": "흑이 폰 하나 앞서지만, 백은 기물들이 쓸 열린 줄이 있습니다.",
  "Two Knights Defense: Black counterattacks e4 instead of copying White.": "투 나이츠 디펜스입니다. 흑은 백을 따라 하지 않고 e4를 반격합니다.",
  "Aggressive: the knight and bishop both hit f7.": "공격적인 수입니다. 나이트와 비숍이 함께 f7을 노립니다.",
  "The only good defense: block the bishop's diagonal.": "유일하게 좋은 방어입니다. 비숍의 대각선을 막습니다.",
  "Do not recapture with the knight; 5...Nxd5 allows the Fried Liver attack. Black gives a pawn to chase the bishop.": "나이트로 되잡지 마세요. 5...Nxd5는 프라이드 리버 공격을 허용합니다. 흑은 폰을 주고 비숍을 쫓아냅니다.",
  "The bishop retreats and White stays a pawn up.": "비숍이 물러나고 백이 폰 하나 앞선 채 유지합니다.",
  "Kicks the knight with tempo.": "템포를 얻으며 나이트를 쫓아냅니다.",
  "Black's lead in space and development makes up for the pawn.": "흑의 공간과 전개 우위가 폰 하나를 보상합니다.",
  "Black develops and prepares to castle. Good compensation.": "흑이 전개하며 캐슬링을 준비합니다. 충분한 보상이 있습니다.",
  "Protects e4 and avoids sharp theory. Very popular at all levels.": "e4를 지키고 날카로운 이론을 피합니다. 모든 수준에서 인기가 많습니다.",
  "Black keeps things solid and prepares to castle.": "흑은 단단하게 두며 캐슬링을 준비합니다.",
  "Supports e4 and prepares to reroute the queen's knight.": "e4를 받치고 퀸 쪽 나이트의 재배치를 준비합니다.",
  "Strengthens e5.": "e5를 강화합니다.",
  "Prepares d4 or a Bb3 retreat square.": "d4를 준비하거나 Bb3로 물러날 자리를 만듭니다.",
  "Natural, but the knight on d5 becomes a target and f7 has only the king to defend it. 5...Na5 was correct.": "자연스러워 보이지만, d5 나이트가 표적이 되고 f7은 킹 혼자 지킵니다. 5...Na5가 정확했습니다.",
  "The Fried Liver sacrifice: drag the king into the open.": "프라이드 리버 희생입니다. 킹을 밖으로 끌어냅니다.",
  "Check, and now the d5 knight is attacked twice.": "체크입니다. 이제 d5 나이트가 두 번 공격받습니다.",
  "The king must stay near d5 to protect the pinned knight.": "핀에 걸린 나이트를 지키려면 킹이 d5 근처에 머물러야 합니다.",
  "Piles up on the pinned knight.": "핀에 걸린 나이트에 공격을 더합니다.",
  "Black's best defense: protect d5 and threaten ...Nxc2+.": "흑의 최선의 방어입니다. d5를 지키고 ...Nxc2+를 위협합니다.",
  "Calm and strong. The rook joins the attack.": "차분하고 강한 수입니다. 룩이 공격에 합류합니다.",
  "Open the center while the black king sits on e6. 6.d4 instead of 6.Nxf7 is even stronger, but Nxf7 is the classic.": "흑 킹이 e6에 있는 동안 중앙을 엽니다. 6.Nxf7 대신 6.d4가 더 강하지만, Nxf7이 고전적인 수입니다.",
  "Pins the knight to the queen. This looks clever but invites a trick.": "나이트를 퀸에 핀합니다. 영리해 보이지만 함정을 부릅니다.",
  "Too slow. Black ignores the danger on e5 and f7.": "너무 느립니다. 흑이 e5와 f7의 위험을 무시합니다.",
  "A queen sacrifice! The pin is fake because of what follows. If 5...dxe5 6.Qxg4 White wins a pawn safely.": "퀸 희생입니다! 다음 수 때문에 이 핀은 가짜입니다. 5...dxe5라면 6.Qxg4로 백이 안전하게 폰을 얻습니다.",
  "Taking the queen loses at once.": "퀸을 잡으면 바로 집니다.",
  "Drives the king forward.": "킹을 앞으로 몰아냅니다.",
  "Legal's Mate: three minor pieces checkmate the king.": "르갈의 메이트입니다. 마이너 피스 세 개가 킹을 체크메이트합니다.",
  "Kicking the knight looks natural, but it ignores the attack on f7. 4...d5 was necessary.": "나이트를 쫓아내는 것이 자연스러워 보이지만 f7 공격을 무시합니다. 4...d5가 꼭 필요했습니다.",
  "The knight forks the queen on d8 and the rook on h8.": "나이트가 d8의 퀸과 h8의 룩을 포크합니다.",
  "White wins the exchange plus a pawn.": "백이 익스체인지와 폰 하나를 얻습니다.",
  "White is a full rook up for a minor piece's worth of activity.": "백은 마이너 피스 정도의 활동성을 내주고 룩 하나를 고스란히 앞섭니다.",
  "The knight heads for f4, but it leaves f7 weak and the knight on h5 loose.": "나이트가 f4로 가려 하지만, f7이 약해지고 h5 나이트가 지켜지지 않습니다.",
  "Double attack on f7 together with the c4 bishop.": "c4 비숍과 함께 f7을 이중으로 공격합니다.",
  "Takes the pawn and keeps the pressure on f7.": "폰을 잡고 f7 압박을 유지합니다.",
  "Forks the queen and rook.": "퀸과 룩을 포크합니다.",
  "White has won two pieces for a rook and picks up the h5 knight.": "백은 룩을 주고 기물 두 개를 얻었고, h5 나이트도 잡습니다.",
  "Defends e5 with a pawn, but weakens the e8–h5 diagonal and takes f6 from the knight.": "폰으로 e5를 지키지만, e8–h5 대각선이 약해지고 나이트의 f6 자리를 빼앗습니다.",
  "A sacrifice that exploits the open diagonal. Black's best is 3...Qe7, staying a pawn down.": "열린 대각선을 이용한 희생입니다. 흑의 최선은 3...Qe7로 폰 하나 뒤진 채 버티는 것입니다.",
  "Check on the weakened diagonal.": "약해진 대각선으로 체크합니다.",
  "3...Ke7 4.Qxe5+ Kf7 5.Bc4+ is crushing.": "3...Ke7이면 4.Qxe5+ Kf7 5.Bc4+로 결정적입니다.",
  "Fork: check and attack on the h8 rook.": "포크입니다. 체크와 동시에 h8 룩을 공격합니다.",
  "White is up a full rook.": "백이 룩 하나를 고스란히 앞섭니다.",
  "The Spanish bishop puts indirect pressure on e5.": "스페인 비숍이 e5에 간접적인 압박을 줍니다.",
  "Morphy Defense: question the bishop right away.": "모피 디펜스입니다. 바로 비숍에게 물어봅니다.",
  "Keeps the pin. 4.Bxc6 is the Exchange Variation.": "핀을 유지합니다. 4.Bxc6는 익스체인지 바리에이션입니다.",
  "Develops and attacks e4.": "전개하면서 e4를 공격합니다.",
  "White can castle because ...Nxe4 is met by Re1 or d4.": "...Nxe4에는 Re1이나 d4로 대응할 수 있어서 백이 캐슬링할 수 있습니다.",
  "Black prepares to castle, keeping things solid.": "흑은 단단하게 두며 캐슬링을 준비합니다.",
  "Now e4 is protected, so Bxc6 followed by Nxe5 is a real threat.": "이제 e4가 지켜지므로 Bxc6 후 Nxe5가 실제 위협입니다.",
  "Removes the threat by chasing the bishop away.": "비숍을 쫓아내 위협을 없앱니다.",
  "Supports e5 and opens the c8 bishop.": "e5를 받치고 c8 비숍의 길을 엽니다.",
  "Gives the bishop a retreat on c2 and prepares d4.": "비숍이 c2로 물러날 자리를 만들고 d4를 준비합니다.",
  "Stops ...Bg4, which would pin the knight once White plays d4.": "백이 d4를 두면 나이트를 핀할 ...Bg4를 막습니다.",
  "Chigorin plan: trade off the strong Spanish bishop.": "치고린 계획입니다. 강력한 스페인 비숍을 교환해 없앱니다.",
  "Gains space on the queenside and pressures d4.": "퀸사이드에서 공간을 얻고 d4를 압박합니다.",
  "The classical Closed Spanish. Both sides maneuver for the long game.": "클래식한 클로즈드 스패니시입니다. 양쪽 모두 긴 싸움을 위해 기동합니다.",
  "Castling first invites the Marshall.": "먼저 캐슬링하면 마셜 공격을 부릅니다.",
  "The Marshall Attack: Black gives a pawn for a fast kingside attack.": "마셜 공격입니다. 흑이 폰을 주고 빠른 킹사이드 공격을 노립니다.",
  "Main line: Black prepares ...Bd6 and ...Qh4.": "메인 라인입니다. 흑은 ...Bd6와 ...Qh4를 준비합니다.",
  "Blunts the d6 bishop's future pressure and frees c1.": "앞으로 d6 비숍의 압박을 무디게 하고 c1을 엽니다.",
  "Black's pieces swarm toward the white king.": "흑의 기물들이 백 킹을 향해 몰려듭니다.",
  "The queen sits next to the king. White must defend accurately.": "퀸이 킹 바로 옆에 자리 잡습니다. 백은 정확하게 막아야 합니다.",
  "The Berlin: very solid, famous for neutralizing Kasparov in 2000.": "베를린입니다. 매우 단단하며, 2000년에 카스파로프를 무력화한 것으로 유명합니다.",
  "Black takes the pawn; White wins it back right away.": "흑이 폰을 잡지만, 백이 바로 되찾습니다.",
  "Opens the e-file against Black's uncastled king.": "캐슬링하지 않은 흑 킹을 향해 e파일을 엽니다.",
  "Hits the b5 bishop.": "b5 비숍을 공격합니다.",
  "The Berlin endgame: Black lost the right to castle but owns the bishop pair.": "베를린 엔드게임입니다. 흑은 캐슬링 권리를 잃었지만 비숍 쌍을 가집니다.",
  "The king tucks back to safety.": "킹이 안전한 곳으로 물러납니다.",
  "Black gains kingside space and keeps the h-file option.": "흑이 킹사이드 공간을 얻고 h파일을 열 가능성을 남깁니다.",
  "White gives up the bishop pair for a better pawn structure.": "백이 더 좋은 폰 구조를 위해 비숍 쌍을 내줍니다.",
  "Recapturing away from the center opens lines for the queen and c8 bishop.": "중앙에서 먼 쪽으로 되잡으면 퀸과 c8 비숍의 길이 열립니다.",
  "Now Nxe5 is a real threat, because ...Qd4 is gone.": "이제 ...Qd4가 사라져서 Nxe5가 실제 위협입니다.",
  "Solid support of e5.": "e5를 단단히 받칩니다.",
  "Kicks the knight.": "나이트를 쫓아냅니다.",
  "White has a healthy 4-vs-3 kingside majority for the endgame.": "백은 엔드게임에서 유리한 킹사이드 4대3 폰 다수를 가집니다.",
  "Attacks the knight, but ...f6 has weakened the e8–h5 diagonal.": "나이트를 공격하지만, ...f6 때문에 e8–h5 대각선이 약해졌습니다.",
  "Check and attack on the c5 bishop at the same time.": "체크와 동시에 c5 비숍을 공격합니다.",
  "White is a clean piece up.": "백이 기물 하나를 깔끔하게 앞섭니다.",
  "The queen steps onto the d-file behind the d5 pawn. That pawn now defends the e4 knight only on paper.": "퀸이 d5 폰 뒤의 d파일로 갑니다. 이제 그 폰은 e4 나이트를 겉으로만 지킵니다.",
  "Removes the bishop that guards d5.": "d5를 지키던 비숍을 없앱니다.",
  "If 13...dxe4 14.Qxd7, because the d5 pawn was shielding the queen.": "13...dxe4라면 14.Qxd7입니다. d5 폰이 퀸을 가리고 있었기 때문입니다.",
  "White is simply a piece up.": "백이 그냥 기물 하나 앞섭니다.",
  "Natural, but it walks into a pawn trap. 8.c3 was correct.": "자연스럽지만 폰 함정에 걸려듭니다. 8.c3가 정확했습니다.",
  "Kicks the queen, and next ...c4 will trap the bishop.": "퀸을 쫓아내고, 다음에 ...c4로 비숍을 가둡니다.",
  "Chases the queen again.": "퀸을 다시 쫓아냅니다.",
  "The bishop on b3 has no escape. Black wins a piece. This trap has caught many strong players.": "b3 비숍은 도망칠 곳이 없습니다. 흑이 기물 하나를 얻습니다. 많은 강자들이 걸린 함정입니다.",
  "The bait: the knight looks free to take.": "미끼입니다. 나이트를 공짜로 잡을 수 있어 보입니다.",
  "Black keeps offering the knight.": "흑이 계속 나이트를 내줍니다.",
  "Taking it opens the h-file for Black's rook and queen.": "잡으면 흑의 룩과 퀸에게 h파일이 열립니다.",
  "Now the f3 knight is attacked and ...Qh4 is coming.": "이제 f3 나이트가 공격받고 ...Qh4가 다가옵니다.",
  "Black wins the knight back.": "흑이 나이트를 되찾습니다.",
  "Queen and rook line up on the h-file. Black's attack is very dangerous.": "퀸과 룩이 h파일에 나란히 섭니다. 흑의 공격이 매우 위험합니다.",
  "The Scotch: blow the center open at move 3.": "스카치입니다. 3수째에 중앙을 터뜨립니다.",
  "White has a central knight and free development.": "백은 중앙 나이트와 자유로운 전개를 얻습니다.",
  "Attacks the d4 knight right away.": "바로 d4 나이트를 공격합니다.",
  "Black adds pressure on d4.": "흑이 d4에 압박을 더합니다.",
  "Firmly supports d4.": "d4를 단단히 받칩니다.",
  "Develops toward the center while keeping f6 for the queen.": "퀸의 f6 자리를 남겨 두고 중앙 쪽으로 전개합니다.",
  "Both sides finish development. Balanced.": "양쪽 모두 전개를 마칩니다. 균형입니다.",
  "Counterattacks e4.": "e4를 반격합니다.",
  "Pins e5 to the king.": "e5를 킹에 핀합니다.",
  "Unpins and keeps the e5 pawn.": "핀을 풀고 e5 폰을 지킵니다.",
  "Chases the knight again. This is the Mieses Variation.": "나이트를 다시 쫓아냅니다. 미제스 바리에이션입니다.",
  "Pins the c4 pawn to the queen.": "c4 폰을 퀸에 핀합니다.",
  "Defends c4 and keeps the structure.": "c4를 지키고 구조를 유지합니다.",
  "The knight wanders to the edge where it can be attacked.": "나이트가 공격받기 쉬운 가장자리로 갑니다.",
  "Forks the c5 bishop and the a5 knight.": "c5 비숍과 a5 나이트를 포크합니다.",
  "Gains time on the queen.": "퀸을 공격해 시간을 법니다.",
  "A check that doesn't solve the attack on the f6 knight. 7...Qe7 was necessary.": "f6 나이트에 대한 공격을 해결하지 못하는 체크입니다. 7...Qe7가 꼭 필요했습니다.",
  "Blocks with tempo on the bishop.": "비숍을 공격하며 템포를 얻고 막습니다.",
  "The knight is gone.": "나이트가 사라졌습니다.",
  "White is a piece up for a pawn.": "백이 폰 하나를 주고 기물 하나를 앞섭니다.",
  "The King's Gambit: deflect e5 to take the center with d4.": "킹스 갬빗입니다. e5를 끌어내고 d4로 중앙을 차지합니다.",
  "Accepted.": "받아들입니다.",
  "Stops ...Qh4+.": "...Qh4+를 막습니다.",
  "Black tries to keep the extra pawn.": "흑이 더 얻은 폰을 지키려 합니다.",
  "Attack the pawn chain at once.": "바로 폰 체인을 공격합니다.",
  "The Kieseritzky: the knight jumps forward instead of retreating.": "키저리츠키입니다. 나이트가 물러나지 않고 앞으로 뛰어듭니다.",
  "White wins back the pawn and has open lines.": "백이 폰을 되찾고 열린 줄을 얻습니다.",
  "Black develops with pressure on the long diagonal.": "흑이 긴 대각선을 압박하며 전개합니다.",
  "Black returns the pawn for fast development.": "흑이 빠른 전개를 위해 폰을 돌려줍니다.",
  "Develops and attacks d5.": "전개하면서 d5를 공격합니다.",
  "Gains a tempo on the queen.": "퀸을 공격해 템포를 얻습니다.",
  "Check with tempo; Black's queen is active.": "템포를 얻는 체크입니다. 흑 퀸이 활발합니다.",
  "Declines. The bishop stops White from castling short soon.": "거절합니다. 비숍 때문에 백은 당분간 킹사이드 캐슬링을 할 수 없습니다.",
  "Supports e5 calmly.": "차분하게 e5를 받칩니다.",
  "Prepares d4 to kick the bishop.": "비숍을 쫓아낼 d4를 준비합니다.",
  "White has a big center; Black has quick development.": "백은 큰 중앙을, 흑은 빠른 전개를 가집니다.",
  "Grabbing the pawn is a classic mistake: the e1–h4 diagonal is open and the bishop stops castling.": "폰을 잡는 것은 전형적인 실수입니다. e1–h4 대각선이 열려 있고 비숍 때문에 캐슬링도 못 합니다.",
  "Check, and the queen will fork e4 and h1.": "체크입니다. 퀸이 e4와 h1을 포크하게 됩니다.",
  "Check again, with the h1 rook in the queen's sights.": "다시 체크이며, 퀸이 h1 룩을 노립니다.",
  "Black is up a rook. White should play 3.Nf3 instead.": "흑이 룩 하나 앞섭니다. 백은 3.Nf3를 두었어야 합니다.",
  "Defends e4 and keeps f4 available.": "e4를 지키고 f4를 둘 수 있게 남겨 둡니다.",
  "The Vienna Gambit.": "비엔나 갬빗입니다.",
  "The best answer: strike in the center.": "가장 좋은 대응입니다. 중앙을 칩니다.",
  "Develops and supports e5.": "전개하면서 e5를 받칩니다.",
  "Black supports the strong e4 knight.": "흑이 강한 e4 나이트를 받칩니다.",
  "Captures en passant to open the position.": "앙파상으로 잡아 형세를 엽니다.",
  "Black has active pieces and good play.": "흑은 기물이 활발하고 좋은 플레이를 합니다.",
  "A slow, solid buildup.": "느리고 단단하게 쌓아 갑니다.",
  "Black hunts the light-squared bishop.": "흑이 흰 칸 비숍을 노립니다.",
  "Black has the bishop pair; White has an open d-file.": "흑은 비숍 쌍을, 백은 열린 d파일을 가집니다.",
  "Black grabs the pawn. Fine so far.": "흑이 폰을 잡습니다. 여기까지는 괜찮습니다.",
  "Attacks the e4 knight and f7 at the same time.": "e4 나이트와 f7을 동시에 공격합니다.",
  "Retreats and attacks the queen, but forgets f7. 4...Nd6 was the only move.": "물러나며 퀸을 공격하지만 f7을 잊었습니다. 4...Nd6가 유일한 수였습니다.",
  "The queen, backed by the c4 bishop, mates.": "c4 비숍의 지원을 받은 퀸이 메이트합니다.",
  "The Petroff: attack e4 instead of defending e5.": "페트로프입니다. e5를 지키는 대신 e4를 공격합니다.",
  "Essential. 3...Nxe4? 4.Qe2 and Black loses material.": "꼭 필요한 수입니다. 3...Nxe4?는 4.Qe2로 흑이 기물을 잃습니다.",
  "Now Black wins back the pawn safely.": "이제 흑이 안전하게 폰을 되찾습니다.",
  "Firmly supports the e4 knight.": "e4 나이트를 단단히 받칩니다.",
  "Hits the d3 bishop. A main line of modern theory.": "d3 비숍을 공격합니다. 현대 이론의 메인 라인입니다.",
  "White opens the center instead.": "백은 대신 중앙을 엽니다.",
  "Black grabs the e-pawn.": "흑이 e폰을 잡습니다.",
  "Challenges the strong e5 knight.": "강한 e5 나이트에 맞섭니다.",
  "Black is fully developed and solid.": "흑은 전개를 마쳤고 단단합니다.",
  "Kicks the e4 knight, but opens the e1–h4 diagonal.": "e4 나이트를 쫓아내지만 e1–h4 대각선이 열립니다.",
  "The knight on e4 is immune because of this check.": "이 체크 때문에 e4 나이트는 잡을 수 없습니다.",
  "Sacrifices the knight to open the h-file.": "h파일을 열기 위해 나이트를 희생합니다.",
  "Black is up a rook and a pawn.": "흑이 룩 하나와 폰 하나를 앞섭니다.",
  "A careless check. White forgot that the e5 knight is attacked.": "부주의한 체크입니다. 백은 e5 나이트가 공격받고 있다는 것을 잊었습니다.",
  "Blocks with tempo. Now both the bishop and the knight hang.": "템포를 얻으며 막습니다. 이제 비숍과 나이트가 모두 떨어져 있습니다.",
  "White's best try: grab a pawn on the way out.": "백의 최선의 시도입니다. 빠져나가면서 폰을 잡습니다.",
  "Black is up a piece for two pawns and will castle by hand.": "흑은 폰 두 개를 주고 기물 하나를 앞서며, 킹을 걸어서 캐슬링한 자리로 옮깁니다.",
  "The Sicilian: an asymmetrical fight for d4.": "시실리안입니다. d4를 둘러싼 비대칭 싸움입니다.",
  "Controls e5 and prepares ...Nf6.": "e5를 통제하고 ...Nf6를 준비합니다.",
  "Trades a wing pawn for a center pawn.": "측면 폰을 중앙 폰과 바꿉니다.",
  "Develops with an attack on e4.": "e4를 공격하며 전개합니다.",
  "The Najdorf: covers b5 and prepares ...e5 or ...b5.": "나이도르프입니다. b5를 막고 ...e5나 ...b5를 준비합니다.",
  "Kicks the knight and claims d4.": "나이트를 쫓아내고 d4를 차지합니다.",
  "Develops and watches d5.": "전개하면서 d5를 지켜봅니다.",
  "The English Attack: White plans Qd2, O-O-O and g4.": "잉글리시 공격입니다. 백은 Qd2, O-O-O, g4를 계획합니다.",
  "Opposite-side castling: a race of pawn storms.": "서로 반대쪽으로 캐슬링했습니다. 폰 돌격 경주가 시작됩니다.",
  "Both sides launch their pawns at the enemy king.": "양쪽 모두 상대 킹을 향해 폰을 밀어 올립니다.",
  "The sharpest try: pin the knight and push f4.": "가장 날카로운 시도입니다. 나이트를 핀하고 f4를 밉니다.",
  "Solid; Black keeps d5 under control.": "단단한 수입니다. 흑은 d5를 통제합니다.",
  "Classic Najdorf: Black keeps flexibility and counterplay on the c-file.": "전형적인 나이도르프입니다. 흑은 유연함과 c파일 반격을 유지합니다.",
  "The Dragon: the bishop goes to the long diagonal.": "드래곤입니다. 비숍이 긴 대각선으로 갑니다.",
  "Protects e4 and stops ...Ng4.": "e4를 지키고 ...Ng4를 막습니다.",
  "Controls d5 and stops ...d5 in one move.": "d5를 통제해서 ...d5를 한 번에 두지 못하게 합니다.",
  "The Yugoslav Attack. White plans h4-h5 to open the h-file.": "유고슬라브 공격입니다. 백은 h4-h5로 h파일을 열려고 합니다.",
  "Black aims down the half-open c-file.": "흑이 반쯤 열린 c파일을 겨냥합니다.",
  "The Soltis Variation: Black slows White's h-pawn.": "솔티스 바리에이션입니다. 흑이 백의 h폰을 늦춥니다.",
  "The Sveshnikov: gain time and space, accept a hole on d5.": "스베시니코프입니다. 시간과 공간을 얻는 대신 d5에 약점을 받아들입니다.",
  "The knight heads toward d6.": "나이트가 d6를 향합니다.",
  "Covers d6.": "d6를 막습니다.",
  "Black gains queenside space and keeps the a3 knight offside.": "흑이 퀸사이드 공간을 얻고 a3 나이트를 구석에 묶어 둡니다.",
  "Damaged structure but the bishop pair.": "구조는 망가졌지만 비숍 쌍을 가집니다.",
  "Black attacks the e4 pawn and activates the structure.": "흑이 e4 폰을 공격하며 구조를 활성화합니다.",
  "The Taimanov: flexible piece play.": "타이마노프입니다. 유연한 기물 플레이입니다.",
  "The queen watches e5 and the c-file.": "퀸이 e5와 c파일을 지켜봅니다.",
  "English Attack setup.": "잉글리시 공격 배치입니다.",
  "Pins the c3 knight and pressures e4.": "c3 나이트를 핀하고 e4를 압박합니다.",
  "Black's pieces become very active.": "흑의 기물이 매우 활발해집니다.",
  "The Alapin: prepare d4 to build a full center.": "알라핀입니다. d4를 준비해 완전한 중앙을 세웁니다.",
  "Hits e4 at once.": "바로 e4를 공격합니다.",
  "Undermines the e5 pawn.": "e5 폰을 흔듭니다.",
  "Black challenges the e5 knight and develops.": "흑이 e5 나이트에 맞서며 전개합니다.",
  "The Smith-Morra Gambit.": "스미스-모라 갬빗입니다.",
  "Eyes f2 and h2 together with the queen.": "퀸과 함께 f2와 h2를 노립니다.",
  "Natural, but it walks into a tactic. 9.Nb5 was better.": "자연스럽지만 전술에 걸려듭니다. 9.Nb5가 더 좋았습니다.",
  "Attacks the queen. If 10.Nxd4 Qh2# is mate.": "퀸을 공격합니다. 10.Nxd4라면 Qh2#로 메이트입니다.",
  "Black has won the queen for a knight.": "흑이 나이트를 주고 퀸을 얻었습니다.",
  "Pins the knight but leaves the bishop loose. 4.Nxd4 was the normal move.": "나이트를 핀하지만 비숍이 지켜지지 않습니다. 4.Nxd4가 일반적인 수였습니다.",
  "Check plus an attack on the b5 bishop.": "체크와 함께 b5 비숍을 공격합니다.",
  "Black is a piece up for a pawn.": "흑이 폰 하나를 주고 기물 하나를 앞섭니다.",
  "Attacks d6 but puts the bishop and the d4 knight on the same rank.": "d6를 공격하지만 비숍과 d4 나이트가 같은 랭크에 놓입니다.",
  "Forks the bishop and the knight.": "비숍과 나이트를 포크합니다.",
  "Black is up a piece for a pawn.": "흑이 폰 하나를 주고 기물 하나를 앞섭니다.",
  "Weakens c3: now the knight there can be pinned and removed.": "c3가 약해집니다. 이제 그곳의 나이트를 핀하고 없앨 수 있습니다.",
  "Pins the c3 knight against the queen, so e4 loses its defender.": "c3 나이트를 퀸에 핀해서 e4의 수비수를 없앱니다.",
  "Black has won a pawn and keeps the better structure.": "흑이 폰 하나를 얻고 더 좋은 구조를 유지합니다.",
  "The French: prepare ...d5 with a solid pawn chain.": "프렌치입니다. 단단한 폰 체인으로 ...d5를 준비합니다.",
  "Now e4 is challenged.": "이제 e4가 도전받습니다.",
  "The Winawer: pin the knight and pressure e4.": "위나워입니다. 나이트를 핀하고 e4를 압박합니다.",
  "Strike the chain at its base.": "체인의 밑동을 칩니다.",
  "Asks the bishop to decide.": "비숍에게 결정을 요구합니다.",
  "White gets the bishop pair and doubled pawns.": "백이 비숍 쌍과 겹친 폰을 얻습니다.",
  "Heads for f5 or c6 and keeps f6 free.": "f5나 c6로 향하고 f6는 비워 둡니다.",
  "Attacks g7.": "g7을 공격합니다.",
  "Black counterattacks on the queenside.": "흑이 퀸사이드에서 반격합니다.",
  "Black gives the kingside pawns for central and queenside play.": "흑이 킹사이드 폰을 주고 중앙과 퀸사이드 플레이를 얻습니다.",
  "A wild, double-edged position.": "격렬하고 양날의 검 같은 형세입니다.",
  "The Advance: lock the center and gain space.": "어드밴스입니다. 중앙을 잠그고 공간을 얻습니다.",
  "Hit the base of the pawn chain.": "폰 체인의 밑동을 칩니다.",
  "Supports d4.": "d4를 받칩니다.",
  "More pressure on d4.": "d4에 압박을 더합니다.",
  "Pressure on d4 and b2.": "d4와 b2를 압박합니다.",
  "Prepares b4 to grab queenside space.": "b4를 준비해 퀸사이드 공간을 차지합니다.",
  "Locks the queenside.": "퀸사이드를 잠급니다.",
  "Heads for b3, where the knight is very annoying.": "나이트가 아주 성가신 b3로 향합니다.",
  "The Tarrasch: avoids the Winawer pin.": "타라쉬입니다. 위나워 핀을 피합니다.",
  "The knight retreats but prepares ...c5 and ...f6.": "나이트가 물러나지만 ...c5와 ...f6를 준비합니다.",
  "Break the e5 pawn.": "e5 폰을 깹니다.",
  "Black has free piece play; White targets the e6 pawn.": "흑은 기물을 자유롭게 쓰고, 백은 e6 폰을 노립니다.",
  "Pins the knight.": "나이트를 핀합니다.",
  "Supports e5 strongly.": "e5를 강하게 받칩니다.",
  "The standard counterattack against d4.": "d4에 대한 표준적인 반격입니다.",
  "White releases the tension. A symmetrical structure follows.": "백이 긴장을 풉니다. 대칭 구조가 됩니다.",
  "Now the c8 bishop is free.": "이제 c8 비숍이 자유롭습니다.",
  "A balanced, symmetrical game.": "균형 잡힌 대칭 게임입니다.",
  "Protects nothing and opens the long diagonal to a1.": "아무것도 지키지 못하고 a1으로 향하는 긴 대각선을 엽니다.",
  "Check, and the bishop then takes on a1.": "체크하고, 다음에 비숍이 a1을 잡습니다.",
  "Black is an exchange and a pawn up.": "흑이 익스체인지와 폰 하나를 앞섭니다.",
  "French players must know this one: the d4 pawn is poisoned. 7...Bd7 is correct.": "프렌치를 두는 사람이라면 꼭 알아야 합니다. d4 폰은 독이 든 폰입니다. 7...Bd7가 정확합니다.",
  "The queen looks safe on d4...": "d4의 퀸은 안전해 보이지만...",
  "...but the check uncovers an attack: the d1 queen now sees d4.": "...체크와 함께 숨은 공격이 드러납니다. 이제 d1 퀸이 d4를 봅니다.",
  "White wins the queen.": "백이 퀸을 얻습니다.",
  "The Caro-Kann: prepare ...d5 without blocking the c8 bishop.": "카로칸입니다. c8 비숍을 막지 않고 ...d5를 준비합니다.",
  "The bishop develops with tempo on the knight.": "비숍이 나이트를 공격하며 템포를 얻고 전개합니다.",
  "Threatens h5 to trap the bishop.": "h5로 비숍을 가두겠다고 위협합니다.",
  "Gives the bishop a retreat on h7.": "비숍이 h7로 물러날 자리를 만듭니다.",
  "Stops Ne5.": "Ne5를 막습니다.",
  "Black is solid; White has more space.": "흑은 단단하고 백은 공간이 더 넓습니다.",
  "Gain space and cramp Black.": "공간을 얻고 흑을 답답하게 만듭니다.",
  "Develop the bishop before ...e6.": "...e6 전에 비숍을 전개합니다.",
  "The thematic break against d4.": "d4에 대한 전형적인 돌파입니다.",
  "Heading for c6 or f5.": "c6나 f5로 향합니다.",
  "The Panov: White accepts an isolated d-pawn for active play.": "파노프입니다. 백은 활발한 플레이를 위해 고립된 d폰을 받아들입니다.",
  "A classic isolated queen's pawn position.": "전형적인 고립 퀸 폰 형세입니다.",
  "Prevents ...Bf5.": "...Bf5를 막습니다.",
  "Developing outside the chain.": "체인 밖으로 전개합니다.",
  "Hits b7.": "b7을 공격합니다.",
  "Black offers a bishop trade. Equal.": "흑이 비숍 교환을 제안합니다. 대등합니다.",
  "Chases the bishop, but the knight on h5 has no defender.": "비숍을 쫓아내지만 h5 나이트를 지키는 기물이 없습니다.",
  "Check, and the queen then takes the knight.": "체크하고, 다음에 퀸이 나이트를 잡습니다.",
  "Black is a piece up.": "흑이 기물 하나 앞섭니다.",
  "Sets a famous trap: the e7 pawn is pinned to the king.": "유명한 함정을 놓습니다. e7 폰이 킹에 핀되어 있습니다.",
  "The most natural move loses immediately. 5...Ndf6 is correct.": "가장 자연스러운 수가 바로 집니다. 5...Ndf6가 정확합니다.",
  "The e7 pawn is pinned, so nothing can take the knight. Smothered mate.": "e7 폰이 핀되어 있어서 아무것도 나이트를 잡을 수 없습니다. 스머더드 메이트입니다.",
  "The Scandinavian: confront e4 at move 1.": "스칸디나비안입니다. 1수째부터 e4에 맞섭니다.",
  "Develops with tempo on the queen.": "퀸을 공격하며 템포를 얻고 전개합니다.",
  "The queen is safe on a5 and pins the c3 knight indirectly.": "퀸은 a5에서 안전하고 c3 나이트를 간접적으로 핀합니다.",
  "Develops the bishop before ...e6.": "...e6 전에 비숍을 전개합니다.",
  "Gives the queen a retreat on c7 or b6.": "퀸이 c7이나 b6로 물러날 자리를 만듭니다.",
  "Black is solid and well developed.": "흑은 단단하고 전개가 잘 되어 있습니다.",
  "Recapture with the knight, not the queen.": "퀸이 아니라 나이트로 되잡습니다.",
  "A solid position; White has more space.": "단단한 형세입니다. 백이 공간이 더 넓습니다.",
  "Attacks the bishop and hopes for Legal's mate ideas, but the queen is undefended.": "비숍을 공격하며 르갈의 메이트 같은 수를 노리지만, 퀸이 지켜지지 않습니다.",
  "Simply takes the queen. There is no mate for White here.": "그냥 퀸을 잡습니다. 여기서는 백에게 메이트가 없습니다.",
  "Black is a queen for a bishop up.": "흑이 비숍을 주고 퀸을 얻어 크게 앞섭니다.",
  "Opens the long diagonal to a1 while the queen sits in the center.": "퀸이 중앙에 있는 동안 a1으로 향하는 긴 대각선을 엽니다.",
  "Check, and the queen next takes on a1.": "체크하고, 다음에 퀸이 a1을 잡습니다.",
  "Black is a rook up and the queen escapes.": "흑이 룩 하나 앞서고 퀸도 빠져나옵니다.",
  "Attacks e4.": "e4를 공격합니다.",
  "The Pirc fianchetto.": "피르크의 피앙케토입니다.",
  "The Austrian Attack: a huge center.": "오스트리안 공격입니다. 거대한 중앙을 세웁니다.",
  "The knight heads to c7 or b4 and supports ...c5.": "나이트가 c7이나 b4로 향하며 ...c5를 받칩니다.",
  "Strike the center.": "중앙을 칩니다.",
  "Calm, classical development.": "차분하고 클래식한 전개입니다.",
  "Prepares ...b5 or ...Qc7 and ...e5.": "...b5나 ...Qc7와 ...e5를 준비합니다.",
  "Black prepares ...e5.": "흑이 ...e5를 준비합니다.",
  "The Queen's Gambit: not a real gambit, since White can usually win c4 back.": "퀸스 갬빗입니다. 보통 백이 c4를 되찾을 수 있어서 진짜 갬빗은 아닙니다.",
  "Declined: Black supports d5 firmly.": "거절합니다. 흑이 d5를 단단히 받칩니다.",
  "Pins the knight and adds pressure on d5.": "나이트를 핀하고 d5에 압박을 더합니다.",
  "Breaks the pin.": "핀을 풉니다.",
  "Prepares pressure on the c-file.": "c파일 압박을 준비합니다.",
  "Capablanca's freeing maneuver: trade pieces to relieve the cramp.": "카파블랑카의 해방 기동입니다. 기물을 교환해 답답함을 풉니다.",
  "Fixes the structure.": "구조를 고정합니다.",
  "Flexible: White can play f3 and e4 or a minority attack with b4-b5.": "유연한 수입니다. 백은 f3와 e4를 두거나 b4-b5로 마이너리티 공격을 할 수 있습니다.",
  "A standard rerouting to defend h7.": "h7을 지키기 위한 표준적인 재배치입니다.",
  "Accepted. Black takes now and gives back later.": "받아들입니다. 흑이 지금 잡고 나중에 돌려줍니다.",
  "Stops ...e5.": "...e5를 막습니다.",
  "Black challenges d4.": "흑이 d4에 맞섭니다.",
  "A balanced, open queenless middlegame.": "균형 잡히고 열린, 퀸이 없는 미들게임입니다.",
  "The Slav: supports d5 without blocking the c8 bishop.": "슬라브입니다. c8 비숍을 막지 않고 d5를 받칩니다.",
  "Now Black takes, planning ...b5.": "이제 흑이 잡고 ...b5를 계획합니다.",
  "Stops ...b5.": "...b5를 막습니다.",
  "Classic Slav: solid for Black, slight space edge for White.": "전형적인 슬라브입니다. 흑은 단단하고 백은 공간이 조금 넓습니다.",
  "Holding on to c4 like this fails tactically.": "이렇게 c4를 지키려 하면 전술적으로 무너집니다.",
  "If ...cxb5, Nxb5 wins the pawn back with a dominant knight, and Black's a7 and c4 pawns are weak.": "...cxb5라면 Nxb5로 강한 나이트와 함께 폰을 되찾고, 흑의 a7과 c4 폰이 약해집니다.",
  "White wins back the gambit pawn with an extra pawn.": "백이 갬빗 폰을 되찾고 폰 하나를 더 앞섭니다.",
  "Pins the knight instead of recapturing, but leaves the bishop loose.": "되잡지 않고 나이트를 핀하지만, 비숍이 지켜지지 않습니다.",
  "Check plus an attack on b4.": "체크와 함께 b4를 공격합니다.",
  "White is a piece and a pawn up.": "백이 기물 하나와 폰 하나를 앞섭니다.",
  "Grabs the pawn because the f6 knight looks pinned. It isn't.": "f6 나이트가 핀된 것처럼 보여서 폰을 잡습니다. 하지만 핀이 아닙니다.",
  "Gives up the queen for a moment.": "잠깐 퀸을 내줍니다.",
  "The check wins the queen back.": "체크로 퀸을 되찾습니다.",
  "Black is a full piece up.": "흑이 기물 하나를 고스란히 앞섭니다.",
  "The Albin Countergambit.": "알빈 카운터갬빗입니다.",
  "A natural capture that loses. 6.fxe3 was correct.": "자연스럽지만 지는 잡기입니다. 6.fxe3가 정확했습니다.",
  "Check while attacking g1.": "체크하면서 g1을 공격합니다.",
  "Promote to a knight with check. A queen would allow Rxg1.": "체크하며 나이트로 승진합니다. 퀸으로 승진하면 Rxg1을 허용합니다.",
  "Black wins. After 9.g3 Qe4+ the queen forks king and h1 rook.": "흑이 이깁니다. 9.g3 Qe4+ 후 퀸이 킹과 h1 룩을 포크합니다.",
  "The London bishop develops before e3 locks it in.": "런던 비숍이 e3에 갇히기 전에 전개합니다.",
  "The most testing reply.": "가장 까다로운 대응입니다.",
  "Solid support of d4.": "d4를 단단히 받칩니다.",
  "Offers a bishop trade.": "비숍 교환을 제안합니다.",
  "Keeps the bishop. If ...Bxg3 then hxg3 opens the h-file.": "비숍을 지킵니다. ...Bxg3라면 hxg3로 h파일이 열립니다.",
  "The typical outpost.": "전형적인 전초기지입니다.",
  "A safe square for the bishop if ...Nh5.": "...Nh5가 와도 비숍이 안전한 칸입니다.",
  "A solid position; White plans Nbd2 and a timely e4.": "단단한 형세입니다. 백은 Nbd2와 적절한 때의 e4를 계획합니다.",
  "A gambit: White offers b2.": "갬빗입니다. 백이 b2를 내줍니다.",
  "Greedy. Black's queen and king both get into trouble.": "욕심입니다. 흑의 퀸과 킹이 모두 곤란해집니다.",
  "Threatens Nc7+ forking king and rook, and Rb1 trapping the queen.": "킹과 룩을 포크하는 Nc7+와 퀸을 가두는 Rb1을 위협합니다.",
  "Offers a queen trade Black cannot avoid.": "흑이 피할 수 없는 퀸 교환을 제안합니다.",
  "Black's king is stuck in the center and b7 and c7 are weak. White is clearly better.": "흑 킹이 중앙에 갇혀 있고 b7과 c7이 약합니다. 백이 분명히 유리합니다.",
  "The King's Indian.": "킹스 인디언입니다.",
  "The key strike against d4.": "d4를 치는 핵심 수입니다.",
  "The center is closed. Now the race begins on opposite wings.": "중앙이 닫혔습니다. 이제 반대쪽 날개에서 경주가 시작됩니다.",
  "Preparing ...f5.": "...f5를 준비합니다.",
  "Black's kingside attack starts.": "흑의 킹사이드 공격이 시작됩니다.",
  "The Sämisch: rock-solid center and a possible g4/h4 attack.": "셰미시입니다. 아주 단단한 중앙과 g4/h4 공격 가능성이 있습니다.",
  "Prepares ...f5.": "...f5를 준비합니다.",
  "Puts the queen where the long diagonal and a knight fork can hit it.": "긴 대각선과 나이트 포크에 걸릴 수 있는 곳에 퀸을 둡니다.",
  "Opens the g7 bishop's diagonal.": "g7 비숍의 대각선을 엽니다.",
  "Takes the e4 pawn. After Nxe4, Black wins the piece back on d4, which the g7 bishop and c6 knight both attack.": "e4 폰을 잡습니다. Nxe4 후에는 g7 비숍과 c6 나이트가 함께 공격하는 d4에서 흑이 기물을 되찾습니다.",
  "Black has won a central pawn and has active pieces.": "흑이 중앙 폰을 얻었고 기물도 활발합니다.",
  "Too slow, and it unprotects the e1–h4 diagonal.": "너무 느리고, e1–h4 대각선의 수비가 사라집니다.",
  "Check on the weakened dark squares.": "약해진 검은 칸으로 체크합니다.",
  "Forks king and rook.": "킹과 룩을 포크합니다.",
  "Black is up the exchange.": "흑이 익스체인지를 앞섭니다.",
  "The Nimzo pin: control e4.": "님조 핀입니다. e4를 통제합니다.",
  "Avoids doubled pawns.": "겹친 폰을 피합니다.",
  "Black develops the light-squared bishop on b7.": "흑이 흰 칸 비숍을 b7에 전개합니다.",
  "The Rubinstein: solid development.": "루빈스타인입니다. 단단한 전개입니다.",
  "Black plans ...e5.": "흑은 ...e5를 계획합니다.",
  "Opens the long diagonal toward a1.": "a1으로 향하는 긴 대각선을 엽니다.",
  "Check, and the bishop continues to a1.": "체크하고, 비숍이 계속 a1까지 갑니다.",
  "Black is an exchange up.": "흑이 익스체인지를 앞섭니다.",
  "The Grünfeld.": "그륀펠트입니다.",
  "The bishop eyes the white center.": "비숍이 백의 중앙을 노립니다.",
  "Rook leaves the diagonal and hits b7.": "룩이 대각선에서 벗어나며 b7을 공격합니다.",
  "A modern main line: White gives a pawn for activity.": "현대적인 메인 라인입니다. 백이 활동성을 위해 폰을 내줍니다.",
  "Pressure on d5.": "d5를 압박합니다.",
  "Black prepares ...Nb6 and ...Nc6 to strike the center.": "흑이 ...Nb6와 ...Nc6로 중앙을 칠 준비를 합니다.",
  "The English: control d5 from the wing.": "잉글리시입니다. 측면에서 d5를 통제합니다.",
  "Fianchetto to dominate the long diagonal.": "긴 대각선을 장악하기 위한 피앙케토입니다.",
  "A reversed Sicilian Dragon with an extra tempo for White.": "백이 템포 하나를 더 가진, 뒤집힌 시실리안 드래곤입니다.",
  "Black copies White and fights for d4.": "흑이 백을 따라 하며 d4를 두고 다툽니다.",
  "Prepares ...Nge7 so the long diagonal stays open.": "긴 대각선이 열린 채로 ...Nge7를 준비합니다.",
  "Both sides maneuver; the d4 and b4 squares are key.": "양쪽 모두 기동합니다. d4와 b4 칸이 핵심입니다.",
  "The Mikenas: grab the center right away.": "미케나스입니다. 바로 중앙을 차지합니다.",
  "Black counterattacks the c3 knight.": "흑이 c3 나이트를 반격합니다.",
  "Roughly equal: White has the center, Black the healthier structure.": "대략 대등합니다. 백은 중앙을, 흑은 더 건강한 구조를 가집니다.",
  "The knight jumps forward with no support.": "나이트가 지원 없이 앞으로 뛰어듭니다.",
  "Check, then the queen takes the knight.": "체크하고, 다음에 퀸이 나이트를 잡습니다.",
  "White is a piece up.": "백이 기물 하나 앞섭니다.",
  "The queen goes to an exposed square with few escape routes.": "퀸이 도망칠 곳이 적은, 노출된 칸으로 갑니다.",
  "Chases it further.": "더 멀리 쫓아냅니다.",
  "The queen is trapped.": "퀸이 갇혔습니다.",
  "White has won the queen for a rook.": "백이 룩을 주고 퀸을 얻었습니다."
 }
};
