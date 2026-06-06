// the item bank for "which bin is it?"
// answer is one of: general, recycling, paper, food, trick
// diff 0 (easy) to 3 (trap) controls escalation
// img is optional; if present it overrides the emoji (so emoji can be
// swapped for deliberately bad phone photos later with no code change)

export const ITEMS = [
  { emoji: "🍌", name: "a banana skin", answer: "food", diff: 0, reveal: "that was the food caddy. you had ONE easy one." },
  { emoji: "🥫", name: "an empty baked bean tin (rinsed)", answer: "recycling", diff: 0, reveal: "that was recycling. metal goes with glass and plastic." },
  { emoji: "📰", name: "yesterday's newspaper", answer: "paper", diff: 0, reveal: "that was the paper & card bin." },
  { emoji: "🍎", name: "an apple core", answer: "food", diff: 0, reveal: "food caddy. it was food. it's in the name." },
  { emoji: "🍷", name: "an empty wine bottle", answer: "recycling", diff: 0, reveal: "recycling. the bottle, anyway. the cork is a whole other nightmare." },
  { emoji: "🥛", name: "a rinsed plastic milk bottle", answer: "recycling", diff: 0, reveal: "recycling. plastic, rinsed, done." },
  { emoji: "📦", name: "a flattened amazon box", answer: "paper", diff: 1, reveal: "paper & card. the air pillows inside? general waste. bezos packs for the apocalypse." },
  { emoji: "🍕", name: "a greasy pizza box", answer: "general", diff: 1, reveal: "general waste. greasy card ruins everything. the clean lid would've been fine." },
  { emoji: "🥡", name: "half a cold chicken jalfrezi you swore you'd finish", answer: "food", diff: 1, reveal: "food caddy. the foil tray's recycling. the jalfrezi is not. neither is the regret." },
  { emoji: "☕", name: "a greggs coffee cup", answer: "general", diff: 1, reveal: "general waste. it's the lining. it's always the lining." },
  { emoji: "🧻", name: "a sheet of used kitchen roll", answer: "general", diff: 1, reveal: "general waste. it's paper, but it's seen things." },
  { emoji: "🎃", name: "a pumpkin, three weeks post-halloween, slightly sentient", answer: "food", diff: 1, reveal: "food caddy. it was food. it is now a biohazard. still food, technically." },
  { emoji: "🫙", name: "a jam jar with a bit left in it", answer: "recycling", diff: 1, reveal: "recycling. rinse it first unless you fancy a wasp problem." },
  { emoji: "🧴", name: "an empty shampoo bottle", answer: "recycling", diff: 1, reveal: "recycling. plastic bottle, fine. the pump lid is a coin toss nobody wins." },
  { emoji: "🍦", name: "a rinsed yoghurt pot", answer: "recycling", diff: 1, reveal: "recycling. the peel-off film lid though? general waste until 2027. naturally." },
  { emoji: "🧷", name: "a dirty nappy", answer: "general", diff: 1, reveal: "general waste. obviously. but you'd be amazed. parents of suffolk, you know who you are." },
  { emoji: "🥣", name: "a clean, empty cereal box", answer: "paper", diff: 1, reveal: "paper & card. the plastic liner bag inside is general waste though." },
  { emoji: "🧾", name: "a receipt the length of your arm", answer: "general", diff: 2, reveal: "general waste. it LOOKS like paper. it's thermal paper. it's a trap. the till knew." },
  { emoji: "🧃", name: "an empty tetra pak juice carton", answer: "recycling", diff: 2, reveal: "recycling. your brain screamed 'card'. your brain was wrong. cartons go with plastics now." },
  { emoji: "🍾", name: "a wine cork", answer: "general", diff: 2, reveal: "general waste. not glass, not card, just a cork having an existential crisis." },
  { emoji: "🥃", name: "a broken drinking glass", answer: "general", diff: 2, reveal: "NOT recycling. glass recycling is bottles and jars only. wrap it in newspaper first." },
  { emoji: "🥤", name: "an empty crisp packet", answer: "general", diff: 2, reveal: "general waste. plastic film isn't accepted here until 2027. babergh giveth, but slowly." },
  { emoji: "🥛", name: "an out-of-date oat milk carton, a third full", answer: "recycling", diff: 2, reveal: "recycling. pour it away first unless you want the lorry smelling like a yoga retreat." },
  { emoji: "💌", name: "a glittery birthday card from your nan", answer: "general", diff: 2, reveal: "general waste. the glitter ruins it. the fiver inside does not. check first." },
  { emoji: "🌯", name: "a scrunched-up clean sheet of foil", answer: "recycling", diff: 2, reveal: "recycling. clean foil, scrunched to a ball, counts as metal. greasy foil does not." },
  { emoji: "🍜", name: "a wax-lined takeaway noodle box", answer: "general", diff: 2, reveal: "general waste. looks like card. wax-coated. same fate as the coffee cup." },
  { emoji: "🍔", name: "a polystyrene burger tray", answer: "general", diff: 2, reveal: "general waste. polystyrene recycles approximately never." },
  { emoji: "🌿", name: "a handful of garden weeds", answer: "trick", diff: 3, reveal: "TRICK. none of these. garden waste is a separate, optional, PAID service. they charge you for your own weeds." },
  { emoji: "🔋", name: "two dead aa batteries", answer: "trick", diff: 3, reveal: "TRICK. no household bin. fire hazard. recycling point only. yes, it's annoying." },
  { emoji: "💨", name: "a disposable vape", answer: "trick", diff: 3, reveal: "TRICK. none of them. battery inside, fire hazard, recycling point only. yes, really." },
  { emoji: "💡", name: "a blown lightbulb", answer: "trick", diff: 3, reveal: "TRICK. not a household bin. recycling centre. the council loves making you drive places." },
  { emoji: "👟", name: "a knackered pair of trainers", answer: "trick", diff: 3, reveal: "TRICK. textile bank, not your bin. someone, somewhere, wants your sad trainers." },
  { emoji: "📱", name: "your old cracked phone", answer: "trick", diff: 3, reveal: "TRICK. electrical waste. not the bin. definitely not the bin." },
  { emoji: "🧴", name: "an empty deodorant aerosol", answer: "recycling", diff: 3, reveal: "recycling. empty aerosols are metal. don't pierce it. don't ask why you wanted to." },
  { emoji: "🎁", name: "a sheet of shiny foil wrapping paper", answer: "general", diff: 3, reveal: "general waste. if it fails the scrunch test, it's not paper. most shiny stuff fails." },
  { emoji: "🍫", name: "a chocolate bar wrapper", answer: "general", diff: 3, reveal: "general waste. soft plastic film. not until 2027. the chocolate was the easy part." },
  { emoji: "🫧", name: "a wad of bubble wrap", answer: "general", diff: 3, reveal: "general waste. soft plastic. pop it for closure, then bin it in the wrong-feeling bin." },
  { emoji: "🍵", name: "a used teabag", answer: "food", diff: 2, reveal: "food caddy. most teabags, yes. the plasticky ones are the council's problem. probably." },
  { emoji: "🪟", name: "a shattered pyrex jug", answer: "general", diff: 3, reveal: "general waste. pyrex isn't bottle-bank glass. different melting point, apparently. riveting." },

  // expansion toward replay value, same house voice
  { emoji: "🍞", name: "a mouldy loaf of bread", answer: "food", diff: 0, reveal: "food caddy. mould and all. the plastic bag is general. the regret is yours." },
  { emoji: "🥚", name: "an empty cardboard egg box", answer: "paper", diff: 1, reveal: "paper & card. the plastic ones are recycling. eggs were simpler." },
  { emoji: "🍶", name: "an empty glass olive oil bottle", answer: "recycling", diff: 1, reveal: "recycling. bottles and jars only, remember. the metal pourer spout is general." },
  { emoji: "🧂", name: "a rinsed plastic tub of margarine", answer: "recycling", diff: 1, reveal: "recycling. rigid plastic tub, rinsed. the foil seal goes in general." },
  { emoji: "🥩", name: "a polystyrene meat tray with the soaker pad", answer: "general", diff: 2, reveal: "general waste. polystyrene AND a mystery juice pad. neither is recycling." },
  { emoji: "🍳", name: "a worn-out non-stick frying pan", answer: "trick", diff: 3, reveal: "TRICK. no bin takes a frying pan. scrap metal at the tip. the council waits." },
  { emoji: "📚", name: "an old paperback book", answer: "trick", diff: 3, reveal: "TRICK. books aren't kerbside recycling. charity shop or textile bank. someone wants your dan brown." },
  { emoji: "🪥", name: "a frayed old toothbrush", answer: "general", diff: 2, reveal: "general waste. mixed plastic, no bin wants it. brush, bin, repeat." },
  { emoji: "🛍️", name: "a carrier bag stuffed with recycling", answer: "general", diff: 2, reveal: "general waste, and please don't bag your recycling. they bin the whole lot, bag and all." },
  { emoji: "🪫", name: "a tangled phone charger cable", answer: "trick", diff: 3, reveal: "TRICK. small electricals, recycling point. not your bin, however tangled." },
  { emoji: "🥄", name: "a wooden lolly stick", answer: "general", diff: 2, reveal: "general waste. it's wood, but it's not food and it's not garden waste. bin it." },
  { emoji: "💊", name: "an empty foil blister pack of pills", answer: "general", diff: 3, reveal: "general waste. foil and plastic, fused forever. some pharmacies take them. yours won't." },
  { emoji: "🧯", name: "an empty hairspray can", answer: "recycling", diff: 2, reveal: "recycling. empty aerosols are metal. don't heat it, don't bin it, recycle it." },
  { emoji: "🌱", name: "a coffee cup stamped 'compostable'", answer: "general", diff: 3, reveal: "general waste. 'compostable' needs an industrial composter you do not have. marketing, basically." },
  { emoji: "📀", name: "a scratched old dvd", answer: "trick", diff: 3, reveal: "TRICK. not recyclable kerbside. charity shop or landfill. it's shrek 2, let it go." },
  { emoji: "🪴", name: "a dead pot plant, soil and all", answer: "trick", diff: 3, reveal: "TRICK. soil isn't food caddy and the pot is plastic. paid garden service or the tip." },
  { emoji: "🚬", name: "a tin of cigarette butts", answer: "general", diff: 2, reveal: "general waste. not compostable, not recycling, whatever the internet told you." },
  { emoji: "🪞", name: "a small cracked mirror", answer: "general", diff: 3, reveal: "general waste, wrapped up safely. mirror glass isn't bottle-bank glass. seven years either way." },
  { emoji: "🧇", name: "a grimy washing-up sponge", answer: "general", diff: 1, reveal: "general waste. plastic foam and grease. there is no good bin for a sponge." },
  { emoji: "🧦", name: "a single odd sock", answer: "trick", diff: 3, reveal: "TRICK. textile bank if it's clean. nobody is reuniting it with its partner, though." },
  { emoji: "🧫", name: "a yoghurt pot you couldn't be bothered to rinse", answer: "general", diff: 2, reveal: "recycling, IF you'd rinsed it. you didn't. contamination. now it's general. wash up." },
  { emoji: "📧", name: "a window envelope", answer: "paper", diff: 1, reveal: "paper & card. the little plastic window is fine, leave it. one small mercy." },
];

export const ANSWER_LABEL = {
  general: "general rubbish",
  recycling: "recycling",
  paper: "paper & card",
  food: "food caddy",
  trick: "none of these",
};

// fisher-yates shuffle
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// build a deck: difficulty escalates (easy first, traps later) with light
// shuffling within each tier so the order is never identical, and the very
// first item is always an easy one (the banana, ideally) to build false
// confidence.
export function buildDeck() {
  const tiers = [[], [], [], []];
  for (const item of ITEMS) tiers[item.diff].push(item);

  const deck = tiers.flatMap((tier) => shuffle(tier));

  // force the first item to be the banana skin if we have it, otherwise any easy one
  const easyFirst =
    deck.findIndex((i) => i.name === "a banana skin") !== -1
      ? deck.findIndex((i) => i.name === "a banana skin")
      : deck.findIndex((i) => i.diff === 0);
  if (easyFirst > 0) {
    const [first] = deck.splice(easyFirst, 1);
    deck.unshift(first);
  }
  return deck;
}
