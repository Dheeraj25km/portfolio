import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Renders one icon from a small curated set as inline SVG.
 *
 * Inline SVG (instead of an icon font or library) keeps the bundle lean,
 * avoids an extra network request, and lets every icon inherit `currentColor`
 * so it follows the active theme automatically. Built-in `@switch` control
 * flow means no NgSwitch directives need importing.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="icon"
    >
      @switch (name) {
        @case ('github') {
          <path
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        }
        @case ('linkedin') {
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        }
        @case ('mail') {
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.3 11.3 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.3-11.3 1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('arrow-up') {
          <path d="M12 19V5M6 11l6-6 6 6" />
        }
        @case ('arrow-down') {
          <path d="M12 5v14M6 13l6 6 6-6" />
        }
        @case ('download') {
          <path d="M12 3v12m0 0-4-4m4 4 4-4M4 19h16" />
        }
        @case ('external') {
          <path d="M14 4h6v6M20 4 10 14M6 6h4v0H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        }
        @case ('code') {
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
        }
        @case ('layout') {
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        }
        @case ('server') {
          <rect x="2" y="3" width="20" height="7" rx="1.5" />
          <rect x="2" y="14" width="20" height="7" rx="1.5" />
          <path d="M6 6.5h.01M6 17.5h.01" />
        }
        @case ('cloud') {
          <path d="M17 18H7a4 4 0 1 1 .7-7.9 5 5 0 0 1 9.6 1.9H17a3.5 3.5 0 0 1 0 7z" />
        }
        @case ('cpu') {
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <rect x="10" y="10" width="4" height="4" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        }
        @case ('phone') {
          <path
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"
          />
        }
        @case ('briefcase') {
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
        }
        @case ('graduation') {
          <path d="m22 8-10-5L2 8l10 5 10-5Z" />
          <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
        }
        @case ('send') {
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        }
        @case ('check') {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ('map-pin') {
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        }
        @case ('sparkle') {
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
          <circle cx="12" cy="12" r="2.5" />
        }
        @case ('copy') {
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        }
        @case ('calendar') {
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        }
        @case ('award') {
          <circle cx="12" cy="9" r="6" />
          <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
        }
        @default {
          <circle cx="12" cy="12" r="9" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      .icon {
        display: block;
      }
    `,
  ],
})
export class Icon {
  @Input() name = '';
  @Input() size = 20;
}
