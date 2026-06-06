"use client";

import { useEffect, useRef, useState } from "react";
import { buildDeck, ANSWER_LABEL } from "../lib/items";
import { rankFor } from "../lib/ranks";

const BINS = [
  { value: "general", label: "general rubbish" },
  { value: "recycling", label: "recycling" },
  { value: "paper", label: "paper & card" },
  { value: "food", label: "food caddy" },
  { value: "trick", label: "none of these" },
];

const ADVANCE_MS = 120;

export default function Game() {
  const [phase, setPhase] = useState("title"); // title | playing | over | win
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [deadItem, setDeadItem] = useState(null);
  const [locked, setLocked] = useState(false);
  const [origin, setOrigin] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    setOrigin(window.location.origin);
    return () => timer.current && clearTimeout(timer.current);
  }, []);

  function start() {
    setDeck(buildDeck());
    setIdx(0);
    setStreak(0);
    setDeadItem(null);
    setLocked(false);
    setPhase("playing");
  }

  function choose(value) {
    if (locked || phase !== "playing") return;
    const item = deck[idx];
    if (value === item.answer) {
      // correct: streak up, advance automatically after a short beat
      setLocked(true);
      setStreak((s) => s + 1);
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

  if (phase === "title") return <Title onStart={start} />;
  if (phase === "playing")
    return <Round item={deck[idx]} streak={streak} locked={locked} onChoose={choose} />;

  // over or win
  return (
    <Results
      phase={phase}
      streak={streak}
      deadItem={deadItem}
      origin={origin}
      onRetry={start}
    />
  );
}

function Title({ onStart }) {
  return (
    <div>
      <h1>which bin is it?</h1>
      <p>babergh & mid suffolk changed the bins on 1 june 2026.</p>
      <p>one wrong bin and you're out. how far can you get?</p>
      <div className="actions">
        <button onClick={onStart}>start sorting</button>
      </div>
      <Footer />
    </div>
  );
}

function Round({ item, streak, locked, onChoose }) {
  return (
    <div>
      <p className="streak">streak: {streak}</p>
      <div className="item">
        {item.img ? (
          <img src={item.img} alt={item.name} />
        ) : (
          <div className="emoji">{item.emoji}</div>
        )}
        <div className="itemname">{item.name}</div>
      </div>
      <p>which bin?</p>
      <div>
        {BINS.map((b) => (
          <button
            key={b.value}
            className="binbtn"
            disabled={locked}
            onClick={() => onChoose(b.value)}
          >
            {b.label}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Results({ phase, streak, deadItem, origin, onRetry }) {
  const rank = rankFor(streak);
  const won = phase === "win";

  const shareUrl = `${origin}/?streak=${streak}&rank=${rank.slug}`;
  const ogUrl = `${origin}/share?streak=${streak}&rank=${rank.slug}`;
  const shareText = `i lasted ${streak} items before suffolk's new bin rules destroyed me. rank: ${rank.label}. think you can do better?`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}`;

  const [copied, setCopied] = useState(false);
  function copyLink() {
    if (!origin) return;
    navigator.clipboard?.writeText(shareUrl).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {}
    );
  }

  return (
    <div>
      <h1>{won ? "you cleared every bin." : "wrong bin."}</h1>
      <div className="bigstreak">{streak}</div>
      <p className="streak">items sorted before you cracked</p>
      <div className="rank">{rank.label}</div>

      {won ? (
        <div className="reveal">
          nobody knows this much about babergh & mid suffolk's bins by accident. are you a council employee?
        </div>
      ) : (
        deadItem && (
          <div className="reveal">
            it was: {ANSWER_LABEL[deadItem.answer]}.
            <br />
            {deadItem.reveal}
          </div>
        )
      )}

      <div className="sharecard">
        {origin && <img src={ogUrl} alt="your share card" width="1200" height="630" />}
      </div>

      <div className="actions">
        <a href={xHref} target="_blank" rel="noopener noreferrer">
          post to x
        </a>
        <button onClick={copyLink}>{copied ? "link copied" : "copy link"}</button>
        {origin && (
          <a href={ogUrl} target="_blank" rel="noopener noreferrer">
            save image
          </a>
        )}
        <button onClick={onRetry}>try again</button>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return <p className="footer">babergh & mid suffolk rules</p>;
}
