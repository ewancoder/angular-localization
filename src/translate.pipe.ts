import { Pipe, PipeTransform } from '@angular/core';
import { LoggerService } from 'ewancoder-angular-logger';
import { TranslateService } from './translate.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    constructor(
        logger: LoggerService,
        private readonly translate: TranslateService) {

        logger.log('Initialized TranslatePipe.', ['translate', 'pipe', 'localization', 'init']);
    }

    transform(value: string, args?: string[]): string {
        return this.translate.translate(value, args);
    }
}
