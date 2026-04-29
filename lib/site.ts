const DEFAULT_SITE_URL = 'http://localhost:3000';

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL;

  const normalized =
    raw.startsWith('http://') || raw.startsWith('https://')
      ? raw
      : `https://${raw}`;

  return normalized.replace(/\/+$/, '');
}

export function absoluteUrl(path: string = '/'): string {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  return new URL(pathname, getSiteUrl()).toString();
}
