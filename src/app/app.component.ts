import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, ViewEncapsulation} from '@angular/core';

enum EMode {
  DARK = 'dark',
  LIGHT = 'light',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @HostBinding('class') readonly class = 'app-component';
  title = 'CssVariablesTheming';
  mode: EMode = EMode.LIGHT;

  constructor(private cdr: ChangeDetectorRef) {}

  switchMode(): void {
    if (this.mode === EMode.LIGHT) {
      this.mode = EMode.DARK;
    } else {
      this.mode = EMode.LIGHT;
    }

    const bgColor = `var(--background-color--${this.mode})`;
    const fontColor = `var(--font-color--${this.mode})`;
    const btnColor = `var(--button-color--${this.mode})`;

    document.body.style.setProperty('--page--background-color', bgColor);
    document.body.style.setProperty('--page--font-color', fontColor);
    document.body.style.setProperty('--page--button-color', btnColor);
    this.cdr.detectChanges();
  }
}
