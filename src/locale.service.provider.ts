import { FactoryProvider } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';
import { LocaleService } from './locale.service';

let localeServiceFactory = (logger: LoggerService) => {
    return new LocaleService('en-US', logger);
};

export let localeServiceProvider: FactoryProvider = {
    provide: LocaleService,
    useFactory: localeServiceFactory,
    deps: [LoggerService]
};
