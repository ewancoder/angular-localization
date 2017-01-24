import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule } from 'ewancoder-angular-logger';
import { Translation } from './translation.model';
import { i18nServiceProvider, provideI18nTranslations } from './i18n.service.provider';
import { localeServiceProvider } from './locale.service.provider';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

@NgModule({
    imports: [
        LoggerModule.forRoot()
    ],
    providers: [
        TranslateService
    ],
    declarations: [ TranslatePipe ],
    exports: [ TranslatePipe ]
})
export class LocalizationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LocalizationModule,
            providers: [
                i18nServiceProvider,
                localeServiceProvider
            ]
        };
    }

    static provideTranslations(translations: Translation[]): ModuleWithProviders {
        return {
            ngModule: LocalizationModule,
            providers: [
                provideI18nTranslations(translations),
                localeServiceProvider
            ]
        };
    }
}
