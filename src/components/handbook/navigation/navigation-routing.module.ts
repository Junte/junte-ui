import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationTestComponent } from './navigation-test.component';
import { AccordionTestComponent } from 'src/components/handbook/navigation/accordion/accordion-test.component';
import { LinkTestComponent } from 'src/components/handbook/navigation/link/link-test.component';
import { MenuTestComponent } from 'src/components/handbook/navigation/menu/menu-test.component';
import { PagerTestComponent } from 'src/components/handbook/navigation/pager/pager-test.component';
import { TabsTestComponent } from 'src/components/handbook/navigation/tabs/tabs-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Navigation'},
    children: [
      {
        path: '',
        component: NavigationTestComponent,
      },
      {
        path: 'link',
        component: LinkTestComponent,
        data: {breadcrumb: 'Link', animation: 'Link'}
      },
      {
        path: 'menu',
        component: MenuTestComponent,
        data: {breadcrumb: 'Menu', animation: 'Menu'}
      },
      {
        path: 'tabs',
        component: TabsTestComponent,
        data: {breadcrumb: 'Tabs', animation: 'Tabs'}
      },
      {
        path: 'pager',
        component: PagerTestComponent,
        data: {breadcrumb: 'Pager', animation: 'Pager'}
      },
      {
        path: 'breadcrumbs',
        data: {breadcrumb: {label: 'Breadcrumbs'}},
        loadChildren: () => import('../navigation/breadcrumbs/breadcrumbs-test.module')
          .then(m => m.BreadcrumbsTestModule)
      },
      {
        path: 'accordion',
        component: AccordionTestComponent,
        data: {breadcrumb: 'Accordion', animation: 'Accordion'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
}
