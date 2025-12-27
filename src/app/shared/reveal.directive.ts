import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('active');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(this.el.nativeElement);
  }
}
