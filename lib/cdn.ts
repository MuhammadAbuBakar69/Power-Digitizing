/**
 * Utility to resolve image URLs with optional CDN support.
 * If NEXT_PUBLIC_CDN_URL is configured (e.g., "https://cdn.powerdigitizing.com"),
 * the path will be served from the CDN. Otherwise, it serves from the local Next.js public directory.
 */
export function getImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL;
  if (cdnBase) {
    const cleanBase = cdnBase.endsWith("/") ? cdnBase.slice(0, -1) : cdnBase;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  }
  return path.startsWith("/") ? path : `/${path}`;
}
