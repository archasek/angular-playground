import { Component, Directive, ComponentRef, AfterViewInit, ViewChild, OnInit, Input, ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello';
}

@Component({
  selector: 'my-component',
  template: `<div>{{ text }}</div>`,
})
export class MyComponent {
  text = "Angular fans!"
}


@Directive({
  selector: "[myCreator]",
})
export class MyCreatorDirective implements OnInit {
  component: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit() {
    this.createComponent();
  }

  createComponent(): void {
    const factory = this.resolver.resolveComponentFactory<any>(MyComponent);
    const component: ComponentRef<any> = this.container.createComponent(factory);

    this.component = component;
  }
}