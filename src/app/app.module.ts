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
import { SpecialRulesEditComponent } from './components/update/special-rules/special-rules.component';
import { ClosedStoresComponent } from './components/rules/closed-stores/closed-stores.component';
import { ClosedStoresEditComponent } from './components/update/closed-stores/closed-stores.component';
import { ClosedInstitutionsComponent } from './components/rules/closed-institutions/closed-institutions.component';
import { ClosedInstitutionsEditComponent } from './components/update/closed-institutions/closed-institutions.component';
import { GoingOutBanComponent } from './components/rules/going-out-ban/going-out-ban.component';
import { GoingOutBanEditComponent } from './components/update/going-out-ban/going-out-ban.component';
import { ImportantAnnouncementComponent } from './components/rules/important-announcement/important-announcement.component';
import { ImportantAnnouncementEditComponent } from './components/update/important-announcement/important-announcement.component';
import { MasksRuleComponent } from './components/rules/masks-rule/masks-rule.component';
import { MasksRuleEditComponent } from './components/update/masks-rule/masks-rule.component';
import { KeysPipe } from './components/update/update.pipe';
import { IncidenceValuesComponent } from './components/update/incidence-values/incidence-values.component';
import { SportsRuleComponent } from './components/rules/sports-rule/sports-rule.component';
import { SportsRuleEditComponent } from './components/update/sports-rule/sports-rule.component';
import { TravelRuleComponent } from './components/rules/travel-rule/travel-rule.component';
import { TravelRuleEditComponent } from './components/update/travel-rule/travel-rule.component';
import { PartyRulesComponent } from './components/rules/party-rules/party-rules.component';
import { PartyRulesEditComponent } from './components/update/party-rules/party-rules.component';
import { CultureRulesComponent } from './components/rules/culture-rules/culture-rules.component';
import { CultureRulesEditComponent } from './components/update/culture-rules/culture-rules.component';


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
    ClosedInstitutionsEditComponent,
    SpecialRulesEditComponent,
    ClosedStoresEditComponent,
    GoingOutBanEditComponent,
    ImportantAnnouncementEditComponent,
    MasksRuleEditComponent,
    SportsRuleComponent,
    TravelRuleComponent,
    SportsRuleEditComponent,
    TravelRuleEditComponent,
    PartyRulesComponent,
    CultureRulesComponent,
    PartyRulesEditComponent,
    CultureRulesEditComponent,
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
