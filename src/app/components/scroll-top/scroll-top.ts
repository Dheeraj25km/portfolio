import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';

/**
 * Floating "back to top" control.
 *
 * Appears only once the visitor is far enough down the page that scrolling
 * back would be tedious, so it never competes with the hero.
 */
@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="to-top"
      [class.is-visible]="visible()"
      (click)="scrollToTop()"
      aria-label="Scroll back to top"
    >
      <app-icon name="arrow-up" [size]="18" />
    </button>
  `,
  styles: [
    `
      .to-top {
        position: fixed;
        right: clamp(1rem, 3vw, 2rem);
        bottom: clamp(1rem, 3vw, 2rem);
        z-index: 90;
        display: grid;
        place-items: center;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        color: #fff;
        background: var(--grad-brand);
        box-shadow: 0 14px 34px -12px rgba(var(--accent-rgb), 0.9);
        opacity: 0;
        pointer-events: none;
        transform: translateY(14px) scale(0.85);
        transition: opacity var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-spring);
      }

      .to-top.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: none;
      }

      .to-top:hover {
        transform: translateY(-3px);
      }
    `,
  ],
})
export class ScrollTop {
  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > window.innerHeight * 0.9);
  }

  scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
