import { Injectable } from '@angular/core';
import { LoggerService } from '@ewancoder/angular-logger';
import { Translation, I18nPairs } from './translation.model';

@Injectable()
export class I18nService {
    private cache: I18nPairs;

    constructor(
        logger: LoggerService,
        private readonly translations: Translation[]) {

        logger.log('Initialized I18nService.', ['i18n', 'service', 'localization', 'init']);
    }

    setLanguage(language: string) {
        for (var i = 0; i < this.translations.length; i++) {
            if (this.translations[i].language === language) {
                this.cache = this.translations[i].translations;
                break;
            }
        }
    }

    translate(key: string, args?: string[]): string {
        let translation = key;

        if (this.cache) {
            translation = this.cache.hasOwnProperty(key)
                ? this.cache[key]
                : key;
        }

        if (args) {
            args.forEach(arg => {
                translation = translation.replace(/%s/, arg);
            });
        }

        return translation;
    }
}
