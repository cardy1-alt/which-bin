import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// node runtime (not edge) so reading the bundled font files from disk works.
export const runtime = "nodejs";
export const contentType = "image/png";
export const dynamic = "force-dynamic";

// bundled comic neue (an open comic sans lookalike). read from the project
// root at runtime; the woff files are force-included in this function's bundle
// via outputFileTracingIncludes in next.config.mjs.
async function loadFonts() {
  const dir = join(process.cwd(), "app", "share");
  const [comic, comicBold] = await Promise.all([
    readFile(join(dir, "comic.woff")),
    readFile(join(dir, "comic-bold.woff")),
  ]);
  return { comic, comicBold };
}

// the four colour-coded suffolk bins, the recognisable brand mark.
const BIN_COLOURS = ["#1a1a1a", "#2b6cb0", "#3f8f29", "#8a8d91"];

function Bins({ bodyW, bodyH, lidH, gap }) {
  return (
    <div style={{ display: "flex", gap }}>
      {BIN_COLOURS.map((c, i) => (
        <div
          key={i}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              width: bodyW + Math.round(bodyW * 0.18),
              height: lidH,
              background: c,
              border: "4px solid #000",
              borderRadius: 6,
              marginBottom: Math.round(lidH * 0.3),
            }}
          />
          <div
            style={{
              display: "flex",
              width: bodyW,
              height: bodyH,
              background: c,
              border: "4px solid #000",
              borderRadius: "8px 8px 16px 16px",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const streakRaw = searchParams.get("streak");
  const rank = (searchParams.get("rank") || "").replace(/-/g, " ").toLowerCase();
  const story = searchParams.get("format") === "story";
  const hasScore = streakRaw !== null && streakRaw !== "";
  const streak = hasScore ? streakRaw : "";

  const { comic, comicBold } = await loadFonts();

  // landscape (1200x630) for link previews; vertical (1080x1920) for stories.
  const W = story ? 1080 : 1200;
  const H = story ? 1920 : 630;
  const pad = story ? 96 : 44;
  const border = story ? 10 : 8;
  const bodyW = story ? 132 : 108;
  const bodyH = story ? 150 : 108;
  const lidH = story ? 26 : 18;
  const binGap = story ? 34 : 26;
  const titleSize = story ? 52 : 38;
  const bigSize = story ? 116 : 78;
  const subSize = story ? 60 : 42;
  const rankSize = story ? 64 : 40;
  const urlSize = story ? 50 : 30;
  const sectionGap = story ? 64 : 28;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: sectionGap,
          background: "#ffffff",
          color: "#000000",
          fontFamily: "Comic Neue",
          padding: pad,
          border: `${border}px solid #000000`,
        }}
      >
        <div style={{ display: "flex", fontSize: titleSize, fontWeight: 700 }}>
          which bin is it?
        </div>

        <Bins bodyW={bodyW} bodyH={bodyH} lidH={lidH} gap={binGap} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {hasScore ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", fontSize: bigSize, fontWeight: 700 }}>
                i lasted {streak} items
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: subSize,
                  marginTop: story ? 18 : 12,
                }}
              >
                before suffolk's bins beat me
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: story ? 40 : 24,
                  border: "4px solid #000",
                  padding: story ? "16px 34px" : "8px 20px",
                  fontSize: rankSize,
                  fontWeight: 700,
                }}
              >
                rank: {rank}
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", fontSize: bigSize, fontWeight: 700 }}>
              how long can you last?
            </div>
          )}
        </div>

        <div style={{ display: "flex", fontSize: urlSize }}>whichbinisit.co.uk</div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "Comic Neue", data: comic, weight: 400, style: "normal" },
        { name: "Comic Neue", data: comicBold, weight: 700, style: "normal" },
      ],
    }
  );
}
