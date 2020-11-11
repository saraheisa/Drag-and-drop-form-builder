import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormViewComponent } from './form-view/form-view.component';
import { MenuComponent } from './menu/menu.component';
import { PopupComponent, BlankFormDialogComponent, ReuseFormDialogComponent } from './popup/popup.component';
import { CategoryComponent } from './category/category.component';
import { FormComponent, NotifyComponent } from './form/form.component';
import { FormBuilderPageComponent } from './form-builder-page/form-builder-page.component';
import { MuzimaFormComponent } from './muzima-form/muzima-form.component';
import { AttributesComponent } from './attributes/attributes.component';
import { OptionComponent } from './option/option.component';
import { FormatCodePipe } from './pipes/format-code.pipe';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormService } from './form.service';
import { AboutComponent } from './about/about.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    MenuComponent,
    PopupComponent,
    CategoryComponent,
    FormComponent,
    FormBuilderPageComponent,
    MuzimaFormComponent,
    AttributesComponent,
    OptionComponent,
    FormatCodePipe,
    BlankFormDialogComponent,
    ReuseFormDialogComponent,
    SearchComponent,
    HomePageComponent,
    NotifyComponent,
    AboutComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    Ng2SearchPipeModule,
    MatSnackBarModule
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, BlankFormDialogComponent, ReuseFormDialogComponent, NotifyComponent]
})
export class AppModule { }
