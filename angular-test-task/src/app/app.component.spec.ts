import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PLACEHOLDERS } from './shared/constants/placeholders';
import { DROPDOWN_OPTIONS } from './shared/constants/dropdown-options';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeDropdownPlaceholder() should change `placeholder` to one of the PLACEHOLDERS item', () => {
    component.changeDropdownPlaceholder();

    expect(PLACEHOLDERS.includes(component.placeholder)).toBeTruthy();
  });

  it('changeDropdownOptions() should change `dropdownOptions` to one of the DROPDOWN_OPTIONS item', () => {
    component.changeDropdownOptions();

    expect(DROPDOWN_OPTIONS.includes(component.dropdownOptions)).toBeTruthy();
  });

  it('resetSelectedOption() should set `selectedOption` to null', () => {
    component.resetSelectedOption();

    expect(component.selectedOption).toBeNull();
  });

  it('onDropdownValueChanged() should set `selectedOption`', () => {
    const optionMock = { value: 'value', id: 'id' };

    component.onDropdownValueChanged(optionMock);

    expect(component.selectedOption).toEqual(optionMock);
  });
});
