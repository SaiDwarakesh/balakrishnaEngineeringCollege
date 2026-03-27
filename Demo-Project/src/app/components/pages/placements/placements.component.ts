import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-[70vh] flex flex-col items-center justify-center bg-gray-50">
      <h1 class="text-4xl font-extrabold text-[#001e51] mb-6 uppercase">Placement Status</h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl px-6 w-full text-center">
        <div class="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-success">
          <h4 class="text-4xl font-extrabold text-success">98%</h4>
          <p class="text-sm font-bold text-gray-400 mt-2 uppercase tracking-widest">Placed</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-primary">
          <h4 class="text-4xl font-extrabold text-primary">50 LPA</h4>
          <p class="text-sm font-bold text-gray-400 mt-2 uppercase tracking-widest">Highest CTC</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-danger">
          <h4 class="text-4xl font-extrabold text-danger">500+</h4>
          <p class="text-sm font-bold text-gray-400 mt-2 uppercase tracking-widest">Company Partners</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-amber">
          <h4 class="text-4xl font-extrabold text-amber">12 LPA</h4>
          <p class="text-sm font-bold text-gray-400 mt-2 uppercase tracking-widest">Average CTC</p>
        </div>
      </div>
    </div>
  `
})
export class PlacementsComponent {}
