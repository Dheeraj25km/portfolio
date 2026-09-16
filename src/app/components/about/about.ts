import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

/**
 * About section.
 *
 * Alongside the written summary sits a self-typing TypeScript snippet that
 * literally declares the author as a `Developer` object — a device that fits
 * a developer portfolio thematically instead of another generic photo block.
 * Typing is skipped entirely when the user prefers reduced motion.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Icon, RevealDirective, SpySectionDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit, OnDestroy {
  protected readonly data = PORTFOLIO_DATA;
  protected readonly typedText = signal('');

  private readonly fullSnippet = `const developer: Developer = {
  name: "${PORTFOLIO_DATA.name}",
  role: "${PORTFOLIO_DATA.role}",
  based: "Bengaluru, India",
  stack: ["Angular", "TypeScript", ".NET", "Node.js"],
  focus: "clean, scalable, production-ready code",
  status: "open to opportunities",
};`;

  private timeoutId?: ReturnType<typeof setTimeout>;
  private index = 0;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typedText.set(this.fullSnippet);
      return;
    }
    this.typeNext();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private typeNext(): void {
    if (this.index > this.fullSnippet.length) return;
    this.typedText.set(this.fullSnippet.slice(0, this.index));
    this.index++;
    const char = this.fullSnippet[this.index - 1];
    // A newline pauses slightly longer, which reads like a person thinking.
    const delay = char === '\n' ? 90 : 18 + Math.random() * 22;
    this.timeoutId = setTimeout(() => this.typeNext(), delay);
  }
}
