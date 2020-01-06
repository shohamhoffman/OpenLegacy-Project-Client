import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'items', component: ItemsComponent, children: [
      { path: 'items', component: ItemsComponent },
      { path: 'new', component: ItemNewComponent }
    ]},
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}