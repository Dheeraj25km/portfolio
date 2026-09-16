import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

/**
 * Hero / intro section.
 *
 * The profile portrait is the anchor: a gradient-ringed frame that tilts
 * toward the pointer, with floating credential chips around it. Headline,
 * availability status and animated stat counters sit alongside so the first
 * screen answers "who, what, and are they available" without a scroll.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon, RevealDirective, SpySectionDirective, TiltDirective, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly data = PORTFOLIO_DATA;
  protected readonly firstName = PORTFOLIO_DATA.name.split(' ')[0];

  /**
   * The ticker is duplicated so the CSS animation can translate by exactly
   * -50% and loop seamlessly without a visible jump.
   */
  protected readonly marqueeLoop = [...PORTFOLIO_DATA.marquee, ...PORTFOLIO_DATA.marquee];

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
