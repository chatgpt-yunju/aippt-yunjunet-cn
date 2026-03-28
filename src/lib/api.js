const rawApiBase = (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/+$/, '')

export const apiBaseUrl = rawApiBase

export function apiUrl(path) {
  if (/^https?:\/\//i.test(path)) return path
  if (!rawApiBase) return path
  return `${rawApiBase}${path.startsWith('/') ? path : `/${path}`}`
}

export function assetUrl(path) {
  if (!path) return path
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  if (!rawApiBase) return path
  return `${rawApiBase}${path.startsWith('/') ? path : `/${path}`}`
}
