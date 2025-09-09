export default async function sitemap() {
  const base = "https://intervieweasy.io";

  const routes = ["", "/features", "/pricing", "/privacy"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: p === "" ? 1.0 : 0.7,
  }));

  return routes;
}
