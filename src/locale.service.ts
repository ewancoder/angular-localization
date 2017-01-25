import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from 'ewancoder-angular-logger';

@Injectable()
export class LocaleService {
    private readonly language: BehaviorSubject<string>;

    constructor(defaultLanguage: string, logger: LoggerService) {
        let language = localStorage.getItem('language');
        this.language = new BehaviorSubject(language != undefined ? language : defaultLanguage);

        logger.log('Initialized LocaleService.', ['locale', 'service', 'localization', 'init']);
    }

    get language$(): Observable<string> {
        return this.language.asObservable();
    }

    setLanguage(language: string): void {
        localStorage.setItem('language', language);
        this.notify(language);
    }

    private notify(language: string): void {
        this.language.next(language);
    }
}
