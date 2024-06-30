import { Interactive01Component } from './../../../../src/app/interactive01/interactive01.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'demo-01', loadComponent: () => import('./interactive01/interactive01.component').then(m => m.Interactive01Component), title: 'Demo Interactive 1' },
    { path: 'demo-02', loadComponent: () => import('./interactive02/interactive02.component').then(m => m.Interactive02Component), title: 'Demo Interactive 2' },

    { path: '', redirectTo: '/demo-01', pathMatch: 'full' }
];
