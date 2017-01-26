import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule } from 'ewancoder-angular-logger';
import { Translation } from './translation.model';
import { provideI18nTranslations } from './i18n.service.provider';
import { localeServiceProvider } from './locale.service.provider';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

@NgModule({
    imports: [
        LoggerModule
    ],
    providers: [
        TranslateService
    ],
    declarations: [ TranslatePipe ],
    exports: [ TranslatePipe ]
})
export class LocalizationModule {
    static forRoot(translations?: Translation[]): ModuleWithProviders {
        return {
            ngModule: LocalizationModule,
            providers: [
                provideI18nTranslations(translations ? translations : []),
                localeServiceProvider,
                ...LoggerModule.forRoot().providers
            ]
        };
    }
}
