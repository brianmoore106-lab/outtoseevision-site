// Blog helpers. Posts live in src/site/blog/<slug>.html with their details in meta.json.
import meta from './meta.json';

export type Post = {
  slug: string; title: string; h1: string; date: string; description: string | null;
  ogImage: string | null; schema: object[]; pagination: { prev?: string; next?: string };
};

export const posts: Post[] = Object.entries(meta.posts as Record<string, any>)
  .map(([slug, p]) => ({ slug, ...p }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const postBodies = import.meta.glob('./blog/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const tz = { timeZone: 'Pacific/Honolulu' };
const d = (iso: string) => new Date(iso + 'T12:00:00Z');
export const shortDate = (iso: string) => d(iso).toLocaleDateString('en-US', { ...tz, month: 'numeric', day: 'numeric', year: '2-digit' });
export const postDate = (iso: string) => d(iso).toLocaleDateString('en-US', { ...tz, month: 'short', day: 'numeric' });
export const bySlugPath = (path?: string) => posts.find((p) => path && path.endsWith('/' + p.slug));
