const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const img = (name: string) => `${base}/img/${name}.jpg`;
export const url = (path: string) => `${base}${path}`;
