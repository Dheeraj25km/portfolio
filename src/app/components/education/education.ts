import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

/**
 * Education section.
 *
 * Deliberately not linked from the navbar — it sits between Experience and
 * Projects as a scroll-through section, not a primary nav destination, per
 * the site owner's request. Reuses the same timeline visual language as
 * Experience so the two sections read as part of one continuous story.
 */
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [Icon, RevealDirective, SpySectionDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly data = PORTFOLIO_DATA;
}
