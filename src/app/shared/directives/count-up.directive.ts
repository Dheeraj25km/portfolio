import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Animates a numeric value from 0 to its target the first time it scrolls
 * into view, preserving any non-numeric prefix/suffix (e.g. "400+", "1.5+").
 *
 * The raw string stays the source of truth in the data file — the directive
 * parses it — so content authors never have to think about animation.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  /** The final display string, e.g. "400+" or "1.5+". */
  @Input('appCountUp') value = '';
  @Input() countDuration = 1400;

  private el = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private frame?: number;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    const match = /^([^\d]*)([\d.]+)(.*)$/.exec(this.value.trim());
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!match || reduceMotion) {
      node.textContent = this.value;
      return;
    }

    const [, prefix, numeric, suffix] = match;
    const target = Number(numeric);
    const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0;
    node.textContent = `${prefix}0${suffix}`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        this.observer?.disconnect();
        this.zone.runOutsideAngular(() => this.run(node, prefix, target, decimals, suffix));
      },
      { threshold: 0.4 }
    );
    this.observer.observe(node);
  }

  private run(
    node: HTMLElement,
    prefix: string,
    target: number,
    decimals: number,
    suffix: string
  ): void {
    const start = performance.now();
    const step = (now: number): void => {
      const t = Math.min((now - start) / this.countDuration, 1);
      // easeOutExpo keeps the number racing up then settling, which reads
      // far more deliberate than a linear ramp.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      node.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
      if (t < 1) this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
  }
}
