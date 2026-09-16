import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly data = PORTFOLIO_DATA;
  protected readonly year = new Date().getFullYear();
}
