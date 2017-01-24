export interface Translation {
    language: string;
    translations: I18nPairs;
}

export interface I18nPairs {
    [key: string]: string;
}
