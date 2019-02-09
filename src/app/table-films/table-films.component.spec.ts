import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilmsComponent } from './table-films.component';

describe('TableFilmsComponent', () => {
  let component: TableFilmsComponent;
  let fixture: ComponentFixture<TableFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
