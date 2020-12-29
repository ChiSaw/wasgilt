import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbButtonsModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { UpdateComponent } from './components/update/update.component';
import { RulesComponent } from './components/rules/rules.component';
import { ContactRuleComponent } from './components/rules/contact-rule/contact-rule.component';
import { ContactRuleEditComponent } from './components/update/contact-rule/contact-rule.component';
import { SpecialRulesComponent } from './components/rules/special-rules/special-rules.component';
import { ClosedStoresComponent } from './components/rules/closed-stores/closed-stores.component';
import { ClosedInstitutionsComponent } from './components/rules/closed-institutions/closed-institutions.component';
import { GoingOutBanComponent } from './components/rules/going-out-ban/going-out-ban.component';
import { ImportantAnnouncementComponent } from './components/rules/important-announcement/important-announcement.component';
import { MasksRuleComponent } from './components/rules/masks-rule/masks-rule.component';
import { KeysPipe } from './components/update/update.pipe';
import { IncidenceValuesComponent } from './components/update/incidence-values/incidence-values.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    RulesComponent,
    ContactRuleComponent,
    ContactRuleEditComponent,
    SpecialRulesComponent,
    ClosedStoresComponent,
    ClosedInstitutionsComponent,
    GoingOutBanComponent,
    ImportantAnnouncementComponent,
    MasksRuleComponent,
    KeysPipe,
    IncidenceValuesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbButtonsModule,
    NgbDropdownModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
