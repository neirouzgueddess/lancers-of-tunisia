import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninregisterPage } from './signinregister.page';

describe('SigninregisterPage', () => {
  let component: SigninregisterPage;
  let fixture: ComponentFixture<SigninregisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
