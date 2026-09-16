import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/components/icon/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpySectionDirective } from '../../shared/directives/spy-section.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { WEB3FORMS_ACCESS_KEY } from '../../core/config/app.config.constants';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, Icon, RevealDirective, SpySectionDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnDestroy {
  protected readonly data = PORTFOLIO_DATA;
  protected readonly copied = signal(false);
  protected readonly state = signal<SendState>('idle');

  private fb = new FormBuilder();
  private copyTimer?: ReturnType<typeof setTimeout>;

  protected form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get name() { return this.form.controls.name; }
  get email() { return this.form.controls.email; }
  get message() { return this.form.controls.message; }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.data.email);
      this.copied.set(true);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {}
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('sending');
    const { name, email, message } = this.form.getRawValue();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Portfolio inquiry from ${name}`,
          from_name: 'Portfolio website',
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.message ?? 'Submission failed');

      this.state.set('sent');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  ngOnDestroy(): void {
    if (this.copyTimer) clearTimeout(this.copyTimer);
  }
}