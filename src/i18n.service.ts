import { Injectable } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';

export interface Translation {
    language: string;
    translations: I18nPairs;
}

export interface I18nPairs {
    [key: string]: string;
}

@Injectable()
export class I18nService {
    private cache: I18nPairs;

    constructor(
        logger: LoggerService,
        private readonly translations: Translation[]) {

        logger.log('Initialized I18nService.', ['init', 'i18n', 'service', 'localization']);
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
                translation.replace(/%s/, arg);
            });
        }

        return translation;
    }
}
