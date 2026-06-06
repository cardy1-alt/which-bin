// the item bank for "which bin is it?"
// answer is one of: general, recycling, paper, food, trick
// diff 0 (easy) to 3 (trap) controls escalation
// img is optional; if present it overrides the emoji (so emoji can be
// swapped for deliberately bad phone photos later with no code change)

export const ITEMS = [
  { emoji: "🍌", name: "a banana skin", answer: "food", diff: 0, reveal: "food caddy. one job. you had literally one easy job." },
  { emoji: "🥫", name: "an empty baked bean tin (rinsed)", answer: "recycling", diff: 0, reveal: "recycling. metal, in with the glass and plastic. the council's one moment of clarity." },
  { emoji: "📰", name: "yesterday's newspaper", answer: "paper", diff: 0, reveal: "paper & card. yesterday's news, today's recycling. do keep up." },
  { emoji: "🍎", name: "an apple core", answer: "food", diff: 0, reveal: "food caddy. it's food. it's in the name of the bin. and you still flinched." },
  { emoji: "🍷", name: "an empty wine bottle", answer: "recycling", diff: 0, reveal: "recycling. the bottle's the easy part. it's the rest of the night you'll regret." },
  { emoji: "🥛", name: "a rinsed plastic milk bottle", answer: "recycling", diff: 0, reveal: "recycling. rinsed plastic. savour it, the easy ones are nearly over." },
  { emoji: "📦", name: "a flattened amazon box", answer: "paper", diff: 1, reveal: "paper & card. the box, yes. the air pillows inside are general. bezos packs for a siege." },
  { emoji: "🍕", name: "a greasy pizza box", answer: "general", diff: 1, reveal: "general waste. one drop of grease and the whole lot's binned. the council does not negotiate with cheese." },
  { emoji: "🥡", name: "half a cold chicken jalfrezi you swore you'd finish", answer: "food", diff: 1, reveal: "food caddy. the foil tray recycles, the curry doesn't, the 2am decision is yours to carry." },
  { emoji: "☕", name: "a greggs coffee cup", answer: "general", diff: 1, reveal: "general waste. it's the plastic lining. it's always the lining. the council knows and says nothing." },
  { emoji: "🧻", name: "a sheet of used kitchen roll", answer: "general", diff: 1, reveal: "general waste. it's paper, technically, but it's been somewhere paper should never go." },
  { emoji: "🎃", name: "a pumpkin, three weeks post-halloween, slightly sentient", answer: "food", diff: 1, reveal: "food caddy. a vegetable in october, a biohazard by november. still food, apparently." },
  { emoji: "🫙", name: "a jam jar with a bit left in it", answer: "recycling", diff: 1, reveal: "recycling. rinse it, unless you fancy running a wasp sanctuary." },
  { emoji: "🧴", name: "an empty shampoo bottle", answer: "recycling", diff: 1, reveal: "recycling. the bottle's fine. the pump lid is a riddle the council flatly refuses to answer." },
  { emoji: "🍦", name: "a rinsed yoghurt pot", answer: "recycling", diff: 1, reveal: "recycling. the pot, and from june 2026 even the peel-off film lid. they take plastic film now." },
  { emoji: "🧷", name: "a dirty nappy", answer: "general", diff: 1, reveal: "general waste. obviously. and yet the council has had to put it in writing. suffolk, we need to talk." },
  { emoji: "🥣", name: "a clean, empty cereal box", answer: "paper", diff: 1, reveal: "paper & card. the box recycles, the plastic bag inside doesn't. breakfast: also a trap." },
  { emoji: "🧾", name: "a receipt the length of your arm", answer: "general", diff: 2, reveal: "general waste. looks like paper, is actually thermal plastic. the till set you up." },
  { emoji: "🧃", name: "an empty tetra pak juice carton", answer: "recycling", diff: 2, reveal: "recycling. your gut screamed 'card'. your gut gets people fined." },
  { emoji: "🍾", name: "a wine cork", answer: "general", diff: 2, reveal: "general waste. not glass, not card, just a cork quietly ending your streak." },
  { emoji: "🥃", name: "a broken drinking glass", answer: "general", diff: 2, reveal: "general waste, wrapped up. drinking glass isn't bottle glass. nobody warns you until it's too late." },
  { emoji: "🥤", name: "an empty crisp packet", answer: "recycling", diff: 2, reveal: "recycling, believe it or not. suffolk takes plastic film and packets from june 2026. you assumed landfill, didn't you." },
  { emoji: "🥛", name: "an out-of-date oat milk carton, a third full", answer: "recycling", diff: 2, reveal: "recycling, once you pour it away, unless you want the lorry smelling like a yoga retreat." },
  { emoji: "💌", name: "a glittery birthday card from your nan", answer: "general", diff: 2, reveal: "general waste. the glitter ruins it, the fiver inside doesn't. check before you bin nan." },
  { emoji: "🌯", name: "a scrunched-up clean sheet of foil", answer: "recycling", diff: 2, reveal: "recycling. clean foil, scrunched to a ball, counts as metal. greasy foil doesn't. the rules have moods." },
  { emoji: "🍜", name: "a wax-lined takeaway noodle box", answer: "general", diff: 2, reveal: "general waste. looks like honest card, secretly wax-coated. same con as the coffee cup." },
  { emoji: "🍔", name: "a polystyrene burger tray", answer: "general", diff: 2, reveal: "general waste. polystyrene recycles roughly never. the council's just being honest for once." },
  { emoji: "🌿", name: "a handful of garden weeds", answer: "trick", diff: 3, reveal: "none of these. garden waste is a separate bin you PAY for. they charge you to remove your own weeds." },
  { emoji: "🔋", name: "two dead aa batteries", answer: "trick", diff: 3, reveal: "none of these. fire hazard, no household bin, drive them to a recycling point. the council loves a detour." },
  { emoji: "💨", name: "a disposable vape", answer: "trick", diff: 3, reveal: "none of these. battery inside, so it's a fire hazard and a special trip. progress, that." },
  { emoji: "💡", name: "a blown lightbulb", answer: "trick", diff: 3, reveal: "none of these. recycling centre only. the council would simply prefer you got in the car." },
  { emoji: "👟", name: "a knackered pair of trainers", answer: "trick", diff: 3, reveal: "none of these. textile bank, not your bin. somewhere out there, someone wants your sad trainers." },
  { emoji: "📱", name: "your old cracked phone", answer: "trick", diff: 3, reveal: "none of these. electrical waste, special trip. the bin is right there and you still can't use it." },
  { emoji: "🧴", name: "an empty deodorant aerosol", answer: "recycling", diff: 3, reveal: "recycling. empty aerosols are metal. don't pierce it, whatever that little voice suggests." },
  { emoji: "🎁", name: "a sheet of shiny foil wrapping paper", answer: "general", diff: 3, reveal: "general waste. fails the scrunch test, fails recycling. most festive things do." },
  { emoji: "🍫", name: "a chocolate bar wrapper", answer: "recycling", diff: 3, reveal: "recycling now. plastic film and wrappers go in from june 2026. the chocolate was never the hard part." },
  { emoji: "🫧", name: "a wad of bubble wrap", answer: "recycling", diff: 3, reveal: "recycling. bubble wrap is plastic film, accepted from june 2026. pop it for closure first, obviously." },
  { emoji: "🍵", name: "a used teabag", answer: "food", diff: 2, reveal: "food caddy. most of them. the plasticky ones are technically the council's problem, allegedly." },
  { emoji: "🪟", name: "a shattered pyrex jug", answer: "general", diff: 3, reveal: "general waste. pyrex isn't bottle-bank glass. 'different melting point', they say, as if that helps." },

  { emoji: "🍞", name: "a mouldy loaf of bread", answer: "food", diff: 0, reveal: "food caddy, mould and all. the bag's general. the loaf was a quid of pure optimism." },
  { emoji: "🥚", name: "an empty cardboard egg box", answer: "paper", diff: 1, reveal: "paper & card. the cardboard ones. plastic ones recycle, foam ones don't. eggs: total chaos." },
  { emoji: "🍶", name: "an empty glass olive oil bottle", answer: "recycling", diff: 1, reveal: "recycling. bottles and jars only, remember. the metal pourer's general. small print on everything now." },
  { emoji: "🧂", name: "a rinsed plastic tub of margarine", answer: "recycling", diff: 1, reveal: "recycling. rigid tub, rinsed. the foil seal's general. one item, two bins, classic suffolk." },
  { emoji: "🥩", name: "a polystyrene meat tray with the soaker pad", answer: "general", diff: 2, reveal: "general waste. polystyrene tray plus a mystery juice pad. neither recycles, both are grim." },
  { emoji: "🍳", name: "a worn-out non-stick frying pan", answer: "trick", diff: 3, reveal: "none of these. no bin takes a pan. scrap metal at the tip. the council waits, patiently, for your car." },
  { emoji: "📚", name: "an old paperback book", answer: "trick", diff: 3, reveal: "none of these. books aren't kerbside. charity shop or textile bank. someone, somewhere, wants your dan brown." },
  { emoji: "🪥", name: "a frayed old toothbrush", answer: "general", diff: 2, reveal: "general waste. mixed plastic, unloved by every bin. brush, bin, repeat, despair." },
  { emoji: "🛍️", name: "a scrunched-up carrier bag", answer: "recycling", diff: 2, reveal: "recycling. carrier bags are plastic film, in from june 2026. the one rule that actually got easier." },
  { emoji: "🪫", name: "a tangled phone charger cable", answer: "trick", diff: 3, reveal: "none of these. small electricals, special trip. it doesn't even work and it still wants a car journey." },
  { emoji: "🥄", name: "a wooden lolly stick", answer: "general", diff: 2, reveal: "general waste. it's wood, but it's not food and it's not garden. the bin of last resort." },
  { emoji: "💊", name: "an empty foil blister pack of pills", answer: "general", diff: 3, reveal: "general waste. foil and plastic fused for eternity. some pharmacies take them, yours doesn't, naturally." },
  { emoji: "🧯", name: "an empty hairspray can", answer: "recycling", diff: 2, reveal: "recycling. empty aerosols are metal. don't heat it, don't bin it, just behave." },
  { emoji: "🌱", name: "a coffee cup stamped 'compostable'", answer: "general", diff: 3, reveal: "general waste. 'compostable' needs an industrial composter you'll never own. it's a vibe, not a bin." },
  { emoji: "📀", name: "a scratched old dvd", answer: "trick", diff: 3, reveal: "none of these. not kerbside. charity shop or landfill. it's shrek 2, it's time to let go." },
  { emoji: "🪴", name: "a dead pot plant, soil and all", answer: "trick", diff: 3, reveal: "none of these. soil isn't food, the pot's plastic, garden waste is the bin you pay for. murdered by admin." },
  { emoji: "🚬", name: "a tin of cigarette butts", answer: "general", diff: 2, reveal: "general waste. not compost, not recycling, whatever the internet promised you." },
  { emoji: "🪞", name: "a small cracked mirror", answer: "general", diff: 3, reveal: "general waste, wrapped up. mirror glass isn't bottle glass. seven years bad luck either way." },
  { emoji: "🧇", name: "a grimy washing-up sponge", answer: "general", diff: 1, reveal: "general waste. plastic foam and grease. there has never been a good bin for a sponge." },
  { emoji: "🧦", name: "a single odd sock", answer: "trick", diff: 3, reveal: "none of these. textile bank if it's clean. its partner is gone and it's not coming back." },
  { emoji: "🧫", name: "a yoghurt pot you couldn't be bothered to rinse", answer: "general", diff: 2, reveal: "would've been recycling. you didn't rinse it, so it contaminates the lot, so it's general. wash up." },
  { emoji: "📧", name: "a window envelope", answer: "paper", diff: 1, reveal: "paper & card. the little plastic window can stay. one mercy, granted grudgingly." },

  { emoji: "🥕", name: "a handful of carrot peelings", answer: "food", diff: 0, reveal: "food caddy. peelings, straight in. don't look so surprised." },
  { emoji: "🥚", name: "a bowl of eggshells", answer: "food", diff: 0, reveal: "food caddy. shells count as food. crack on." },
  { emoji: "📄", name: "a stack of old printer paper", answer: "paper", diff: 0, reveal: "paper & card. clean paper. they can't trap you on every single one. just most of them." },
  { emoji: "🍾", name: "an empty prosecco bottle", answer: "recycling", diff: 0, reveal: "recycling. glass bottle, rinsed. the foil round the neck is general. even celebrating is a two-bin job." },
  { emoji: "🥤", name: "a plastic drinks bottle with the cap back on", answer: "recycling", diff: 1, reveal: "recycling, cap ON. they want it on now. the one time the lid's allowed and nobody told you." },
  { emoji: "🧴", name: "a rinsed bleach bottle", answer: "recycling", diff: 1, reveal: "recycling. plastic bottle, rinsed. the trigger spray's the bit they go quiet about." },
  { emoji: "🍪", name: "an empty metal biscuit tin", answer: "recycling", diff: 1, reveal: "recycling. the tin's metal, fine. the plastic insert tray is general. biscuits: never simple." },
  { emoji: "🧻", name: "the cardboard tube from the kitchen roll", answer: "paper", diff: 1, reveal: "paper & card. the little tube counts. take the win, they're rare." },
  { emoji: "🥫", name: "a soup tin with the paper label still on", answer: "recycling", diff: 1, reveal: "recycling. the label can stay. rinse the soup, not the paperwork." },
  { emoji: "🍯", name: "a sticky empty honey jar", answer: "recycling", diff: 1, reveal: "recycling, once rinsed. or declare it an ant attraction and accept the consequences." },
  { emoji: "📕", name: "a glossy magazine", answer: "paper", diff: 1, reveal: "paper & card. glossy's fine for magazines, no matter what your gut insists." },
  { emoji: "🧃", name: "an empty soup carton", answer: "recycling", diff: 1, reveal: "recycling. cartons go with plastics and metal now. yes, still baffling, no, they won't explain." },
  { emoji: "🛒", name: "a greasy paper chip bag", answer: "general", diff: 2, reveal: "general waste. grease again. a clean paper bag would've been fine, but you HAD to get chips." },
  { emoji: "🧊", name: "an empty frozen veg bag", answer: "recycling", diff: 2, reveal: "recycling. it's plastic film, accepted from june 2026. you'd have sworn it was landfill." },
  { emoji: "🪀", name: "a kid's snapped plastic toy", answer: "general", diff: 2, reveal: "general waste. mixed plastic, no bin wants it, peppa included." },
  { emoji: "🧼", name: "a pump-action hand soap dispenser", answer: "general", diff: 2, reveal: "general waste. the bottle alone would've recycled. the pump ruins the party every time." },
  { emoji: "🍞", name: "a bread bag with a little plastic window", answer: "general", diff: 2, reveal: "general waste. paper fused to film. the council does not do hybrids." },
  { emoji: "🍱", name: "a black plastic microwave-meal tray", answer: "general", diff: 2, reveal: "general waste. black plastic, invisible to the sorting machine. technology, defeated by a ready meal." },
  { emoji: "🧖", name: "an inner toilet roll tube", answer: "paper", diff: 2, reveal: "paper & card. yes, even this. the one bit of the bathroom that recycles." },
  { emoji: "☕", name: "a chipped ceramic mug", answer: "trick", diff: 2, reveal: "none of these. ceramic isn't recycling and shouldn't go loose in general either. charity or the tip. of course." },
  { emoji: "💐", name: "a bunch of dead supermarket flowers", answer: "trick", diff: 2, reveal: "none of these. cut flowers are garden waste, the bin you pay extra for. romance, billed quarterly." },
  { emoji: "🪥", name: "an electric toothbrush head", answer: "trick", diff: 3, reveal: "none of these. small electrical, special trip. the council will not rest until you've driven somewhere." },
  { emoji: "✨", name: "a dead set of fairy lights", answer: "trick", diff: 3, reveal: "none of these. tangled electricals, recycling centre. festive right up until disposal." },
  { emoji: "🎨", name: "a half-full can of spray paint", answer: "trick", diff: 3, reveal: "none of these. not empty means hazardous. household waste centre, not the kerb. enjoy the drive." },
  { emoji: "💄", name: "an empty lipstick tube", answer: "general", diff: 3, reveal: "general waste. tiny and mixed-material, too fiddly for any recycling stream. glamour, binned." },
  { emoji: "🩹", name: "a used plaster", answer: "general", diff: 3, reveal: "general waste. obviously. and yet someone, somewhere, asked. it is not compost, suffolk." },
  { emoji: "🧤", name: "a single disposable glove", answer: "general", diff: 3, reveal: "general waste. not recycling, not the caddy, despite a confident year of pretending otherwise." },
  { emoji: "📓", name: "a wire-bound notebook", answer: "general", diff: 3, reveal: "general waste, unless you rip the wire spiral out, then the paper recycles. they're really testing your commitment." },
  { emoji: "🥢", name: "a used wooden chopstick", answer: "general", diff: 3, reveal: "general waste. small treated wood, not food, not garden. the odd one out, every time." },
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
