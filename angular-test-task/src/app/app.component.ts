import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Option } from './models/option.model';
import { DROPDOWN_OPTIONS } from './shared/constants/dropdown-options';
import { PLACEHOLDERS } from './shared/constants/placeholders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public selectedOption: Option | null;
  public placeholder = PLACEHOLDERS[0];
  public dropdownOptions = DROPDOWN_OPTIONS[0];

  public changeDropdownPlaceholder(): void {
    const randomPlaceholder = PLACEHOLDERS[this.getRandomIndex(PLACEHOLDERS.length)];

    this.placeholder = randomPlaceholder;
  }

  public changeDropdownOptions(): void {
    const randomOptions = DROPDOWN_OPTIONS[this.getRandomIndex(DROPDOWN_OPTIONS.length)];

    this.dropdownOptions = randomOptions;
  }

  public resetSelectedOption(): void {
    this.selectedOption = null;
  }

  public onDropdownValueChanged(option: Option): void {
    this.selectedOption = option;
  }

  private getRandomIndex(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber);
  }
}
