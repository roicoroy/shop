import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage-angular';
// 
import { NgxStripeModule } from 'ngx-stripe';
// 
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
// 
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEn, 'en');
registerLocaleData(localePt, 'pt');

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import '@angular/compiler';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'en' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
      }),
      NgxsModule.forRoot([]),
      NgxsResetPluginModule.forRoot(),
      NgxsFormPluginModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot({ disabled: false }),
      NgxsLoggerPluginModule.forRoot({ disabled: true }),
      NgxsStoragePluginModule.forRoot({
        key: [],
      }),
      IonicStorageModule.forRoot()
    ),
    provideAnimations()
  ],
});
