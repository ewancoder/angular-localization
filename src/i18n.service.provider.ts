import { FactoryProvider } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';
import { I18nService } from './i18n.service';

let i18nServiceFactory = (logger: LoggerService) => {
    return new I18nService(logger, []);
};

export let i18nServiceProvider: FactoryProvider = {
    provide: I18nService,
    useFactory: i18nServiceFactory,
    deps: [LoggerService]
};
