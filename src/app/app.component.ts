import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `{{ count() }}`,
})
export class AppComponent implements OnInit {
  count = signal(0);

  ngOnInit(): void {
    setInterval(() => {
      this.count.set(this.count() + 1);
    }, 1000);
  }
}
