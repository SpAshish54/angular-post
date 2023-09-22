import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postId: number = 0;

  constructor(private router: Router) {}

  showPost() {
    if (this.postId) {
      const postId = this.postId;
      // Navigate to the 'post-detail' component with the provided postId as a route parameter
      this.router.navigate(['/posts', postId]);
    }
  }
}
