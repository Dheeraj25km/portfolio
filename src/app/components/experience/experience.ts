import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Icon, RevealDirective, SpySectionDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly data = PORTFOLIO_DATA;
}
