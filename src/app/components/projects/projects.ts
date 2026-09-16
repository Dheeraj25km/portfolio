import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Icon, RevealDirective, SpySectionDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly data = PORTFOLIO_DATA;
}
