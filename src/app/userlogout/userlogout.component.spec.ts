import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlogoutComponent } from './userlogout.component';

describe('UserlogoutComponent', () => {
  let component: UserlogoutComponent;
  let fixture: ComponentFixture<UserlogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlogoutComponent]
    });
    fixture = TestBed.createComponent(UserlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
