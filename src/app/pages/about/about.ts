import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initScrollAnimations } from '../../shared/scroll-animate';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    initScrollAnimations();
  }
}
