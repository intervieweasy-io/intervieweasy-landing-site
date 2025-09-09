export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://karyo.app/sitemap.xml",
    host: "https://karyo.app",
  };
}
