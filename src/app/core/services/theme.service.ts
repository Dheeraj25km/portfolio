import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

/**
 * Owns the single source of truth for the active theme.
 * - Reads a saved preference first, falls back to OS preference.
 * - Persists changes to localStorage.
 * - Applies `data-theme` on <html> so plain CSS variables can react —
 *   no runtime style recalculation needed per-component.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      const value = this.theme();
      document.documentElement.setAttribute('data-theme', value);
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // localStorage may be unavailable (private mode) — theme still works for the session.
      }
    });
  }

  toggle(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private resolveInitialTheme(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      /* ignore */
    }
    const prefersLight =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}
