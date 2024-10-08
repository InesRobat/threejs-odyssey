import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./content/content.component').then(m => m.ContentComponent),
        data: { animation: 'Home' }
    },
    {
        path: ':id',
        loadComponent: () => import('./detail/detail.component').then(m => m.DetailComponent),
        data: { animation: 'Article' }
    }
];
