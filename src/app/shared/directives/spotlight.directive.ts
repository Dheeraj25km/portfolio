import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Tracks the pointer inside an element and writes its position to the
 * `--mx` / `--my` custom properties, which CSS turns into a radial "spotlight".
 *
 * The listener runs outside Angular's zone: it fires on every pointer move and
 * has no bearing on application state, so triggering change detection for it
 * would be pure waste.
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
})
export class SpotlightDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private node!: HTMLElement;

  private readonly onMove = (event: PointerEvent): void => {
    const rect = this.node.getBoundingClientRect();
    this.node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    this.node.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  ngOnInit(): void {
    this.node = this.el.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.node.addEventListener('pointermove', this.onMove, { passive: true });
    });
  }

  ngOnDestroy(): void {
    this.node?.removeEventListener('pointermove', this.onMove);
  }
}
