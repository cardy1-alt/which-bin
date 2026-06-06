// rank tiers by final streak
const TIERS = [
  { min: 20, label: "suspected council employee" },
  { min: 13, label: "caddy master" },
  { min: 8, label: "recycling curious" },
  { min: 4, label: "confidently wrong" },
  { min: 1, label: "fly-tipper" },
  { min: 0, label: "litterbug" },
];

export function rankFor(streak) {
  const tier = TIERS.find((t) => streak >= t.min) || TIERS[TIERS.length - 1];
  return { label: tier.label, slug: slugify(tier.label) };
}

export function slugify(label) {
  return label.replace(/&/g, "and").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
}

export function unslugify(slug) {
  return (slug || "").replace(/-/g, " ");
}
