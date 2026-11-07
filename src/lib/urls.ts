const rawBase = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Base path the site is deployed under (empty string at the domain root). */
export const base = rawBase;

/** Absolute-from-root link for a page path such as `en/services` or `en#people`. */
export const href = (path = ''): string => {
  const [page, hash] = path.split('#');
  const clean = page.replace(/^\/+/, '').replace(/\/+$/, '');
  const url = clean ? `${rawBase}/${clean}/` : `${rawBase}/`;
  return hash ? `${url}#${hash}` : url;
};

/** Link to a file in `public/` (spaces are encoded). */
export const asset = (path: string): string =>
  encodeURI(`${rawBase}/${path.replace(/^\/+/, '')}`);
