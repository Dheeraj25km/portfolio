import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Subtle 3D tilt toward the pointer. Kept deliberately shallow (a few degrees)
 * so it reads as depth rather than a gimmick, and disabled entirely for
 * reduced-motion users and coarse (touch) pointers where it cannot be aimed.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnInit, OnDestroy {
  /** Maximum rotation in degrees on each axis. */
  @Input() tiltMax = 6;

  private el = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private node!: HTMLElement;
  private enabled = false;

  private readonly onMove = (event: PointerEvent): void => {
    const rect = this.node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    this.node.style.transform =
      `perspective(1000px) rotateX(${(-py * this.tiltMax).toFixed(2)}deg) ` +
      `rotateY(${(px * this.tiltMax).toFixed(2)}deg) translateZ(0)`;
  };

  private readonly onLeave = (): void => {
    this.node.style.transform = '';
  };

  ngOnInit(): void {
    this.node = this.el.nativeElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    this.enabled = !reduceMotion && finePointer;
    if (!this.enabled) return;

    this.node.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
    this.node.style.transformStyle = 'preserve-3d';

    this.zone.runOutsideAngular(() => {
      this.node.addEventListener('pointermove', this.onMove, { passive: true });
      this.node.addEventListener('pointerleave', this.onLeave);
    });
  }

  ngOnDestroy(): void {
    if (!this.enabled) return;
    this.node.removeEventListener('pointermove', this.onMove);
    this.node.removeEventListener('pointerleave', this.onLeave);
  }
}
