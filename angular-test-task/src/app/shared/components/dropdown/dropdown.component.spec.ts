import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  const mockOption = { value: 'value', id: 'id' };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onMouseDown()', () => {
    it('should not call closeDropdown() if event contains an element with the `dropdown-collection` class', () => {
      const closeDropdownSpy = spyOn(component, 'closeDropdown' as any);
      const divElementMock: HTMLDivElement = document.createElement('div');
      const eventElementMock: HTMLSpanElement = document.createElement('span');
      const eventMock = { target: eventElementMock } as any;

      divElementMock.className = 'dropdown-collection';
      divElementMock.appendChild(eventElementMock);
      spyOn(document, 'getElementsByClassName').and.returnValue([divElementMock] as any);
      
      component.isDropdownOpen = true;
      component['onMouseDown'](eventMock);

      expect(closeDropdownSpy).toHaveBeenCalledTimes(0);
    });

    it('should not call closeDropdown() if dropdown is not open', () => {
      const closeDropdownSpy = spyOn(component, 'closeDropdown' as any);
      const eventMock = {} as any;

      component.isDropdownOpen = false;
      component['onMouseDown'](eventMock);

      expect(closeDropdownSpy).toHaveBeenCalledTimes(0);
    });

    it('should call closeDropdown()', () => {
      const closeDropdownSpy = spyOn(component, 'closeDropdown' as any);
      const eventMock = { target: null } as any;
      const divElementMock: HTMLDivElement = document.createElement('div');
      divElementMock.className = 'dropdown-collection';

      component.isDropdownOpen = true;
      component['onMouseDown'](eventMock);

      expect(closeDropdownSpy).toHaveBeenCalledWith();
      expect(closeDropdownSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('selectOption() should closeDropdown and emit value', () => {
    const emitSpy = spyOn(component.selectionChange, 'emit');

    component.isDropdownOpen = true;
    component.selectOption(mockOption);

    expect(component.isDropdownOpen).toBeFalsy();
    expect(emitSpy).toHaveBeenCalledWith(mockOption);
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('toggleDropdown() should toggle `isDropdownOpen`', () => {
    const res = component.isDropdownOpen;

    component.toggleDropdown();

    expect(component.isDropdownOpen).toEqual(!res);
  });

  it('optionTrackBy() should returd option id', () => {
    const res = component.optionTrackBy(0, mockOption);

    expect(res).toEqual(mockOption.id);
  });
});
