import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: '',
    loadChildren: () => import('./start/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/stepper-form/stepper-form.page').then(m => m.StepperFormPage)
  },
];
