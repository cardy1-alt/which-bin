"use client";

import { useEffect, useRef, useState } from "react";
import { buildDeck, ANSWER_LABEL } from "../lib/items";
import { rankFor } from "../lib/ranks";

// bin colours follow suffolk's "better recycling" scheme (the same one
// babergh & mid suffolk are rolling out): black general, blue recycling,
// green-lidded paper & card, grey food caddy. "none of these" has no bin.
const BINS = [
  { value: "general", label: "general rubbish", colour: "#1a1a1a" },
  { value: "recycling", label: "recycling", colour: "#2b6cb0" },
  { value: "paper", label: "paper & card", colour: "#3f8f29" },
  { value: "food", label: "food caddy", colour: "#8a8d91" },
  { value: "trick", label: "none of these", colour: null },
];

const MAIN_BINS = BINS.filter((b) => b.value !== "trick");
const TRICK_BIN = BINS.find((b) => b.value === "trick");

// emoji squares for the wordle-style copy/paste result. closest to the bin
// colours: black general, blue recycling, green paper, brown food caddy,
// white "none of these".
const BIN_EMOJI = {
  general: "⬛",
  recycling: "🟦",
  paper: "🟩",
  food: "🟫",
  trick: "⬜",
};

const ADVANCE_MS = 120;

export default function Game() {
  const [phase, setPhase] = useState("playing"); // playing | over | win
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [deadItem, setDeadItem] = useState(null);
  const [locked, setLocked] = useState(false);
  const [origin, setOrigin] = useState("");
  const [history, setHistory] = useState([]); // bin answer for each correct item
  const timer = useRef(null);

  // build the deck on the client after mount (avoids a hydration mismatch
  // from the random shuffle) so the link drops you straight into the game.
  useEffect(() => {
    setOrigin(window.location.origin);
    setDeck(buildDeck());
    return () => timer.current && clearTimeout(timer.current);
  }, []);

  function start() {
    setDeck(buildDeck());
    setIdx(0);
    setStreak(0);
    setDeadItem(null);
    setLocked(false);
    setHistory([]);
    setPhase("playing");
  }

  function choose(value) {
    if (locked || phase !== "playing") return;
    const item = deck[idx];
    if (value === item.answer) {
      // correct: streak up, advance automatically after a short beat
      setLocked(true);
      setStreak((s) => s + 1);
      setHistory((h) => [...h, item.answer]);
      timer.current = setTimeout(() => {
        const next = idx + 1;
        if (next >= deck.length) {
          setPhase("win");
        } else {
          setIdx(next);
        }
        setLocked(false);
      }, ADVANCE_MS);
    } else {
      // wrong: sudden death
      setDeadItem(item);
      setPhase("over");
    }
  }

  if (phase === "playing") {
    if (deck.length === 0) {
      // brief mount-time state before the deck is ready
      return (
        <div>
          <Title />
          <p>sorting your bins...</p>
          <Footer />
        </div>
      );
    }
    return <Round item={deck[idx]} streak={streak} locked={locked} onChoose={choose} />;
  }

  return (
    <Results
      phase={phase}
      streak={streak}
      deadItem={deadItem}
      origin={origin}
      history={history}
      onRetry={start}
    />
  );
}

function Title() {
  return (
    <div className="head">
      <h1>which bin is it?</h1>
      <p className="tagline">
        the council rewrote every bin rule in suffolk. they're not totally sure
        either. your turn.
      </p>
    </div>
  );
}

function Swatch({ colour }) {
  return (
    <span
      className="swatch"
      style={{ background: colour || "#fff" }}
      aria-hidden="true"
    />
  );
}

// little wheelie-bin icon matching the share-card mock-up
function BinIcon({ colour }) {
  return (
    <span className="binicon" aria-hidden="true">
      <span className="binicon-lid" style={{ background: colour }} />
      <span className="binicon-body" style={{ background: colour }} />
    </span>
  );
}

function Round({ item, streak, locked, onChoose }) {
  return (
    <div className="round">
      <Title />
      <p className="streak">streak: {streak}</p>
      <div className="item">
        {item.img ? (
          <img src={item.img} alt={item.name} />
        ) : (
          <div className="emoji">{item.emoji}</div>
        )}
        <div className="itemname">{item.name}</div>
      </div>
      <p className="prompt">go on then. which bin?</p>
      <div className="bingrid">
        {MAIN_BINS.map((b) => (
          <button
            key={b.value}
            className="bintile"
            disabled={locked}
            onClick={() => onChoose(b.value)}
          >
            <BinIcon colour={b.colour} />
            <span>{b.label}</span>
          </button>
        ))}
      </div>
      <button
        className="binbtn binwide"
        disabled={locked}
        onClick={() => onChoose(TRICK_BIN.value)}
      >
        <Swatch colour={TRICK_BIN.colour} />
        {TRICK_BIN.label}
      </button>
      <Footer />
    </div>
  );
}

function Results({ phase, streak, deadItem, origin, history, onRetry }) {
  const rank = rankFor(streak);
  const won = phase === "win";

  const shareUrl = `${origin}/?streak=${streak}&rank=${rank.slug}`;
  const ogUrl = `${origin}/share?streak=${streak}&rank=${rank.slug}`;
  const storyUrl = `${origin}/share?format=story&streak=${streak}&rank=${rank.slug}`;
  const shareText = `i lasted ${streak} items before suffolk's new bin rules destroyed me. rank: ${rank.label}. think you can do better?`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}`;

  // wordle-style copy/paste result: bin-colour emoji squares + the link
  const squares = (history || []).map((a) => BIN_EMOJI[a] || "⬛");
  if (!won) squares.push("❌");
  const rows = [];
  for (let i = 0; i < squares.length; i += 10) rows.push(squares.slice(i, i + 10).join(""));
  const resultText = [
    "which bin is it?",
    won
      ? `i cleared all ${streak} bins. suspected council employee.`
      : `i lasted ${streak} before suffolk's bins beat me.`,
    "",
    rows.join("\n"),
    "",
    `rank: ${rank.label}`,
    shareUrl,
  ].join("\n");

  const [copied, setCopied] = useState(false);
  function copyResults() {
    navigator.clipboard?.writeText(resultText).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {}
    );
  }

  // primary share: open the native sheet (instagram stories, whatsapp, etc).
  // share the vertical story image itself so it drops straight into a story.
  const [sharing, setSharing] = useState(false);
  async function shareNow() {
    if (!origin || sharing) return;
    setSharing(true);
    try {
      if (navigator.canShare) {
        try {
          const res = await fetch(storyUrl);
          const blob = await res.blob();
          const file = new File([blob], "which-bin-is-it.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              text: shareText,
              url: shareUrl,
              title: "which bin is it?",
            });
            return;
          }
        } catch (e) {
          if (e && e.name === "AbortError") return;
        }
      }
      if (navigator.share) {
        try {
          await navigator.share({ text: shareText, url: shareUrl, title: "which bin is it?" });
          return;
        } catch (e) {
          if (e && e.name === "AbortError") return;
        }
      }
      // desktop fallback: x intent
      window.open(xHref, "_blank", "noopener,noreferrer");
    } finally {
      setSharing(false);
    }
  }

  return (
    <div>
      <h1>{won ? "you cleared every bin." : "nope. wrong bin."}</h1>
      <div className="bigstreak">{streak}</div>
      <p className="streak">bins you got right before you bottled it</p>
      <div className="rank">{rank.label}</div>

      {squares.length > 0 && (
        <div className="resultgrid">
          {rows.map((r, i) => (
            <div key={i}>{r}</div>
          ))}
        </div>
      )}

      {won ? (
        <div className="reveal">
          you sorted all {streak} without a single mistake. that is not normal. nobody knows the bins this well by accident. blink twice if the council is making you do this.
        </div>
      ) : (
        deadItem && (
          <div className="reveal">
            it was the {ANSWER_LABEL[deadItem.answer]}, obviously.
            <br />
            {deadItem.reveal}
          </div>
        )
      )}

      <div className="sharecard">
        {origin && <img src={ogUrl} alt="your share card" width="1200" height="630" />}
      </div>

      <p className="prompt">go on, drag your friends down with you:</p>
      <div className="actions">
        <button onClick={shareNow}>{sharing ? "sharing..." : "share to your story"}</button>
        {origin && (
          <a href={storyUrl} download="which-bin-is-it.png" target="_blank" rel="noopener noreferrer">
            save image
          </a>
        )}
        <button onClick={copyResults}>{copied ? "copied!" : "copy results"}</button>
        <button onClick={onRetry}>try again</button>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <p className="footer">
      babergh &amp; mid suffolk rules. unofficial, nothing to do with the council.
    </p>
  );
}
