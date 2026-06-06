import Game from "./game";
import { unslugify } from "../lib/ranks";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://whichbinisit.co.uk");

export function generateMetadata({ searchParams }) {
  const streak = searchParams?.streak;
  const rankSlug = searchParams?.rank;
  const hasScore = streak !== undefined && streak !== "";

  const ogPath = hasScore
    ? `/share?streak=${encodeURIComponent(streak)}&rank=${encodeURIComponent(rankSlug || "")}`
    : "/share";

  const title = "which bin is it?";
  const description = hasScore
    ? `i lasted ${streak} items before suffolk's bins beat me. rank: ${unslugify(rankSlug)}. think you can do better?`
    : "suffolk's new bin rules are impossible. how long can you last?";

  return {
    metadataBase: new URL(SITE),
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/",
      siteName: "which bin is it?",
      images: [{ url: ogPath, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogPath],
    },
  };
}

export default function Page() {
  return (
    <main>
      <Game />
    </main>
  );
}
