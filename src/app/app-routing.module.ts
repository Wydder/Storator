import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// guards
import * as fromGuards from './guards';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: './graphics/graphics.module#GraphicsModule',
    },
    {
      path: 'expenses',
      loadChildren: './expenses/expenses.module#ExpensesModule',
    },
    {
      path: 'incomes',
      loadChildren: './incomes/incomes.module#IncomesModule',
    },
    {
      path: '**',
      redirectTo: '/home',
    },
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
