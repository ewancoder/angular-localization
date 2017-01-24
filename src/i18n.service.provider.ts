import { FactoryProvider } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';
import { Translation } from './translation.model';
import { I18nService } from './i18n.service';

let i18nServiceFactory = (logger: LoggerService) => {
    return new I18nService(logger, []);
};

export let i18nServiceProvider: FactoryProvider = {
    provide: I18nService,
    useFactory: i18nServiceFactory,
    deps: [LoggerService]
};

export let provideI18nTranslations: (translations: Translation[]) => FactoryProvider = (translations: Translation[]) => {
    return {
        provide: I18nService,
        useFactory: (logger: LoggerService) => {
            return new I18nService(logger, translations);
        },
        deps: [LoggerService]
    }
}
