import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { Option } from '../../../models/option.model';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() public readonly options: Option[];
  @Input() public readonly placeholder: string;
  @Input() public readonly currentValue: Option;

  @Output() public readonly selectionChange: EventEmitter<Option> = new EventEmitter();

  @HostListener('document:mousedown', ['$event'])
  private onMouseDown(event: MouseEvent): void {
    if (this.isDropdownOpen) {
      const element = document.getElementsByClassName(this.dropdownCollectionClass)[0]?.contains(event.target as Node | null);

      if (!element) {
          this.closeDropdown();
      }
    }
  }

  public isDropdownOpen = false;
  public readonly dropdownCollectionClass = 'dropdown-collection';

  public selectOption(option: Option): void {
    this.closeDropdown();
    this.selectionChange.emit(option);
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public optionTrackBy(index: number, option: Option): string {
    return option.id;
  }

  private closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
