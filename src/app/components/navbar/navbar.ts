import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { Icon } from '../../shared/components/icon/icon';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

interface NavLink {
  id: string;
  label: string;
}

/**
 * Sticky top navigation.
 *
 * Highlights the in-view section (via ScrollSpyService), shows a reading
 * progress bar, exposes the theme toggle, and collapses into a full-screen
 * sheet below the small breakpoint.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly spy = inject(ScrollSpyService);
  protected readonly data = PORTFOLIO_DATA;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  /** 0–1 fraction of the page scrolled, driving the progress bar. */
  protected readonly progress = signal(0);

  protected readonly links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 12);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(y / max, 1) : 0);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    // Lock the page behind the mobile sheet so it does not scroll underneath.
    document.body.style.overflow = next ? 'hidden' : '';
  }
  scrollTo(id: string, event: Event): void {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}
}
