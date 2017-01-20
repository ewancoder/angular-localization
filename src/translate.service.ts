import { Injectable } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';
import { I18nService } from './i18n.service';
import { LocaleService } from './locale.service';

@Injectable()
export class TranslateService {
    constructor(
        private readonly i18n: I18nService,
        locale: LocaleService,
        logger: LoggerService) {

        locale.language$.subscribe(res => {
            this.i18n.setLanguage(res);
        });

        logger.log('Initialized TranslateService.', ['init', 'translate', 'service', 'localization']);
    }

    translate(phrase: string, args?: string[]): string {
        return this.i18n.translate(phrase, args);
    }
}
