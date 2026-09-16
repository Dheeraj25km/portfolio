import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

/**
 * Marks a top-level <section id="..."> as trackable by the ScrollSpyService,
 * so the navbar can highlight the active link without each component
 * needing to know about the navbar.
 */
@Directive({
  selector: '[appSpySection]',
  standalone: true,
})
export class SpySectionDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private spy = inject(ScrollSpyService);

  ngAfterViewInit(): void {
    this.spy.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // Shared observer is disconnected once at app teardown, not per-section.
  }
}
