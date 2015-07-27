/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app' // Defines the <my-app></my-app> tag
})
@View({
    template: '<h1>Hello {{ name }}</h1>' // Defines the inline template for the component
                                          // Templates read from their component controllers.                                                 // Templates have access to any properties or functions                                             // placed on the component controller.
})
//Component controller
class MyAppComponent {
    name: string;
    
    constructor() {
      this.name = 'Colin Bear';
    }
}

bootstrap(MyAppComponent); //The bootstrap() function takes a component as a parameter, enabling                              //the component (as well as any child components it contains) to render.