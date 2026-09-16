import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Adds a `.is-visible` class the first time an element scrolls into view,
 * which CSS uses to animate opacity/transform. A single directive keeps
 * this behaviour declarative and reusable across every section instead of
 * duplicating IntersectionObserver setup in each component.
 *
 * Respects `prefers-reduced-motion` by revealing content immediately.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Optional stagger delay in ms, useful for lists of cards. */
  @Input() revealDelay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      node.classList.add('is-visible');
      return;
    }

    node.classList.add('reveal');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
