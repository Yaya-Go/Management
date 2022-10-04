import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface BreakPoint {
  name: string;
  value: number;
}
export type DeviceSize = 'Mobile' | 'Tablet' | 'Desktop' | null;

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  size = new BehaviorSubject<DeviceSize>(null);

  private breakpoints: BreakPoint[] = [
    { name: 'xs', value: 0 },
    { name: 'sm', value: 576 },
    { name: 'md', value: 768 },
    { name: 'lg', value: 992 },
    { name: 'xl', value: 1200 },
    { name: 'xxl', value: 1400 }
  ];

  private resizeSubject: Subject<Window>;

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  constructor(
    private eventManager: EventManager
  ) { 
    this.resizeSubject = new Subject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    this.checkScreenSize();
  }

  private onResize(event: UIEvent) {
    this.resizeSubject.next(event.target as Window);
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 992;
    this.isDesktop = window.innerWidth >= 992;

    if (this.isMobile) {
      this.size.next('Mobile');
    } else if (this.isTablet) {
      this.size.next('Tablet');
    } else {
      this.size.next('Desktop');
    }
  }
}
