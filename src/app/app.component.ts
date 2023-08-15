// Import necessary modules from Angular
import { Component } from '@angular/core';

@Component({
  // Selector defines the custom HTML element where this component will be rendered
  selector: 'app-root',
  
  // The HTML template file associated with this component
  templateUrl: './app.component.html',
  
  // The styles associated with this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Property that holds the title of the application
  title = 'angular-ecommerce';
}
