import { Injectable } from '@angular/core';
interface Alert {
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor() {

  }

  private static createAlert(alert: Alert) {
    const alertContainer = document.getElementById('alerts-container')!;

    const alertDiv = document.createElement('div');
    alertDiv.classList.add(
      'flex',
      'items-center',
      'p-3',
      'rounded-lg',
      'shadow-lg',
      'text-white',
      'space-x-4',
      'max-w-sm',
      'transition-opacity',
      'duration-300',
      'opacity-100',
      'relative'
    );

    switch (alert.type) {
      case 'info':
        alertDiv.classList.add('bg-blue-100', 'border', 'border-blue-200');
        alertDiv.innerHTML = `
        <div class="flex flex-row gap-2 flex-grow items-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-primary shrink-0" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
          <div class="text-primary font-semibold text-sm flex-grow">${alert.message}</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-blue-400 shrink-0 cursor-pointer hover:text-red-400" viewBox="0 -960 960 960" fill="currentColor">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          </div>
        `;
        break;

      case 'warning':
        alertDiv.classList.add('bg-yellow-100', 'border', 'border-yellow-200');
        alertDiv.innerHTML = `
        <div class="flex flex-row gap-2 flex-grow items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-warning shrink-0"  viewBox="0 -960 960 960" fill="currentColor">
        <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/>
        </svg>
        <div class="text-warning font-semibold text-sm flex-grow">${alert.message}</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-yellow-400 cursor-pointer shrink-0 hover:text-red-400" viewBox="0 -960 960 960" fill="currentColor">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          </div>
          `;
        break;

      case 'error':
        alertDiv.classList.add('bg-red-100', 'border', 'border-red-200');
        alertDiv.innerHTML = ` 
        <div class="flex flex-row gap-2 flex-grow items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-danger shrink-0"  viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/>
        </svg>
        <div class="text-danger font-semibold text-sm flex-grow">${alert.message}</div>
         <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-red-400 cursor-pointer shrink-0 hover:text-red-600" viewBox="0 -960 960 960" fill="currentColor">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          </div>
          `;
        break;

      case 'success':
        alertDiv.classList.add('bg-green-100', 'border', 'border-green-200');
        alertDiv.innerHTML = `
        <div class="flex flex-row gap-2 flex-grow items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-success shrink-0" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
        <div class="text-success font-semibold text-sm flex-grow">${alert.message}</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-green-400 cursor-pointer shrink-0 hover:text-red-400" viewBox="0 -960 960 960" fill="currentColor">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
          </div>
          `;
        break;
    }

    alertContainer.appendChild(alertDiv);

    const closeIcon = alertDiv.querySelector('.cursor-pointer');
    if (closeIcon) {
      closeIcon.addEventListener('click', () => {
        alertDiv.classList.add('opacity-0');
        setTimeout(() => {
          alertDiv.remove();
        }, 200);
      });
    }
    let alertTimeout = setTimeout(() => {
      alertDiv.classList.add('opacity-0');
      setTimeout(() => {
        alertDiv.remove();
      }, 200);
    }, 2000);
    alertDiv.addEventListener('mouseenter', () => {
      clearTimeout(alertTimeout);
    });

    alertDiv.addEventListener('mouseleave', () => {
      alertTimeout = setTimeout(() => {
        alertDiv.classList.add('opacity-0');
        setTimeout(() => {
          alertDiv.remove();
        }, 200);
      }, 1000000000000);
    });

    const textSpan = alertDiv.querySelector('span');
    if (textSpan) {
      const lineHeight = parseInt(window.getComputedStyle(textSpan).lineHeight);
      const textHeight = textSpan.offsetHeight;
      const maxHeightForSingleLine = lineHeight;

      if (textHeight > maxHeightForSingleLine) {
        closeIcon?.classList.remove('absolute', 'top-0', 'right-0', 'p-2');
        closeIcon?.classList.add('absolute', 'top-2', 'right-2', 'p-2', 'size-8');
      }
      else {
        closeIcon?.classList.remove('absolute', 'top-2', 'right-2', 'p-2');
        closeIcon?.classList.add('size-4',);
      }
    }
  }

  public static showAlert(type: 'info' | 'warning' | 'error' | 'success', message: string) {
    const alert: Alert = { type, message };
    this.createAlert(alert);
  }

}
