import { Injectable, signal } from '@angular/core';

/**
 * Tracks which section id is currently most visible in the viewport
 * so the navbar can highlight the corresponding link. Sections register
 * themselves via `observe()`; a single IntersectionObserver is reused
 * for the whole page rather than one per section.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeId = signal<string>('home');

  private observer?: IntersectionObserver;
  private visibleRatios = new Map<string, number>();

  observe(el: HTMLElement): void {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).id;
            this.visibleRatios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          }
          let bestId = this.activeId();
          let bestRatio = 0;
          for (const [id, ratio] of this.visibleRatios) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          }
          if (bestRatio > 0) this.activeId.set(bestId);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-15% 0px -55% 0px' }
      );
    }
    this.observer.observe(el);
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}
