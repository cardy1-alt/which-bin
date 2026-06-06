import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// node runtime (not edge) so the bundled serif fonts don't blow the 1mb edge
// function size limit. node functions have a much larger limit.
export const runtime = "nodejs";
export const contentType = "image/png";
export const dynamic = "force-dynamic";

// bundled liberation serif (times-metric-compatible). read from the project
// root at runtime; the ttf files are force-included in this function's bundle
// via outputFileTracingIncludes in next.config.mjs.
async function loadFonts() {
  const dir = join(process.cwd(), "app", "share");
  const [serif, serifBold] = await Promise.all([
    readFile(join(dir, "serif.ttf")),
    readFile(join(dir, "serif-bold.ttf")),
  ]);
  return { serif, serifBold };
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const streakRaw = searchParams.get("streak");
  const rank = (searchParams.get("rank") || "").replace(/-/g, " ").toLowerCase();
  const hasScore = streakRaw !== null && streakRaw !== "";
  const streak = hasScore ? streakRaw : "";

  const { serif, serifBold } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#000000",
          fontFamily: "serif",
          padding: "60px",
          border: "4px solid #000000",
        }}
      >
        <div style={{ display: "flex", fontSize: 38 }}>which bin is it?</div>

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
              <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
                i lasted {streak} items
              </div>
              <div style={{ display: "flex", fontSize: 48, marginTop: 14 }}>
                before suffolk's bins beat me
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 40,
                  fontWeight: 700,
                  marginTop: 34,
                }}
              >
                rank: {rank}
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
              how long can you last?
            </div>
          )}
        </div>

        <div style={{ display: "flex", fontSize: 34 }}>whichbinisit.co.uk</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "serif", data: serif, weight: 400, style: "normal" },
        { name: "serif", data: serifBold, weight: 700, style: "normal" },
      ],
    }
  );
}
