import { TestBed, async } from '@angular/core/testing';
import { AppComponent, MyComponent, MyCreatorDirective } from './app.component';
import { Component, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});



@Component({
  template: `<span myCreator></span>`
})
class TestHostComponent {
}

@NgModule({
  entryComponents: [
    MyComponent, // tests don't work without this :(
  ],
})
class TestMockModule { }

describe('MyCreatorDirective', () => {
  let directive;
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent,
        MyCreatorDirective,
        TestHostComponent,
      ],
      imports: [TestMockModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const directiveEl = fixture.debugElement.query(By.directive(MyCreatorDirective));
    directive = directiveEl.injector.get(MyCreatorDirective);
  });

  it('should create an instance of directive', () => {
    expect(directive).toBeTruthy();
  });
});

