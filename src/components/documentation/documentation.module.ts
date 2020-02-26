import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { AppFooterModule } from 'src/components/app-footer/app-footer.module';
import { CollectionsTestModule } from 'src/components/documentation/collections/collections-test.module';
import { DynamicTestModule } from 'src/components/documentation/dynamic/dynamic-test.module';
import { ElementsTestModule } from 'src/components/documentation/elements/elements-test.module';
import { FormsTestModule } from 'src/components/documentation/forms/forms-test.module';
import { GeneralModule } from 'src/components/documentation/general/general.module';
import { HomeModule } from './general/home/home.module';
import { LayoutTestModule } from './layout/layout-test.module';
import { NavigationTestModule } from './navigation/navigation-test.module';
import { OtherModule } from './other/other.module';
import { OverlaysTestModule } from './overlays/overlays-test.module';
import { SharedModule } from './shared/shared.module';
import { OutletModule } from '../outlet/outlet.module';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { ModalTestFactoryComponent } from './overlays/modal/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrismModule,
    JunteUiModule,
    SharedModule,
    DocumentationRoutingModule,
    AppFooterModule,
    OutletModule,
    CollectionsTestModule,
    DynamicTestModule,
    ElementsTestModule,
    FormsTestModule,
    GeneralModule,
    LayoutTestModule,
    NavigationTestModule,
    OverlaysTestModule,
    OtherModule,
    HomeModule
  ],
  declarations: [
    DocumentationComponent,
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class DocumentationModule {

}
