import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './demo-main.component.html',
  styleUrl: './demo-main.component.scss'
})
export class DemoMainComponent implements OnInit, OnDestroy {
  banners = [
    {
      image: 'assets/banners/banner-1.png',
      title: 'Excellence in Education',
      subtitle: 'Nurturing the leaders of tomorrow with tradition and innovation.'
    },
    {
      image: 'assets/banners/banner-2.png',
      title: 'Modern Campus Life',
      subtitle: 'World-class facilities for holistic development.'
    },
    {
      image: 'assets/banners/banner-3.png',
      title: 'Join Our Legacy',
      subtitle: 'Admissions are open for the academic year 2026-27.'
    }
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
