import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

// bundled liberation serif (times-metric-compatible). loaded as a static asset
// so it works on the edge runtime.
const serifData = fetch(new URL("./serif.ttf", import.meta.url)).then((r) =>
  r.arrayBuffer()
);
const serifBoldData = fetch(new URL("./serif-bold.ttf", import.meta.url)).then(
  (r) => r.arrayBuffer()
);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const streakRaw = searchParams.get("streak");
  const rank = (searchParams.get("rank") || "").replace(/-/g, " ").toLowerCase();
  const hasScore = streakRaw !== null && streakRaw !== "";
  const streak = hasScore ? streakRaw : "";

  const [serif, serifBold] = await Promise.all([serifData, serifBoldData]);

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
