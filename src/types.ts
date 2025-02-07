export interface PuppeteerOptions {
	[key: string]: any;
	headless?: boolean;
	timeout?: number;
}

export interface Options extends PuppeteerOptions {
	[key: string]: any;
	from?: lang | 'auto';
	to: lang;
}

export interface Query extends Options {
	op: 'translate' | 'docs';
	text?: string;
}

type lang =
	| 'af'
	| 'sq'
	| 'am'
	| 'ar'
	| 'hy'
	| 'az'
	| 'eu'
	| 'be'
	| 'bn'
	| 'bs'
	| 'bg'
	| 'ca'
	| 'ceb'
	| 'zh-CN'
	| 'zh'
	| 'zh-TW'
	| 'co'
	| 'hr'
	| 'cs'
	| 'da'
	| 'nl'
	| 'en'
	| 'eo'
	| 'et'
	| 'fi'
	| 'fr'
	| 'fy'
	| 'gl'
	| 'ka'
	| 'de'
	| 'el'
	| 'gu'
	| 'ht'
	| 'ha'
	| 'haw'
	| 'he'
	| 'iw'
	| 'hi'
	| 'hmn'
	| 'hu'
	| 'is'
	| 'ig'
	| 'id'
	| 'ga'
	| 'it'
	| 'ja'
	| 'jv'
	| 'kn'
	| 'kk'
	| 'km'
	| 'rw'
	| 'ko'
	| 'ku'
	| 'ky'
	| 'lo'
	| 'la'
	| 'lv'
	| 'lt'
	| 'lb'
	| 'mk'
	| 'mg'
	| 'ms'
	| 'ml'
	| 'mt'
	| 'mi'
	| 'mr'
	| 'mn'
	| 'my'
	| 'ne'
	| 'no'
	| 'ny'
	| 'or'
	| 'ps'
	| 'fa'
	| 'pl'
	| 'pt'
	| 'pa'
	| 'ro'
	| 'ru'
	| 'sm'
	| 'gd'
	| 'sr'
	| 'st'
	| 'sn'
	| 'sd'
	| 'si'
	| 'sk'
	| 'sl'
	| 'so'
	| 'es'
	| 'su'
	| 'sw'
	| 'sv'
	| 'tl'
	| 'tg'
	| 'ta'
	| 'tt'
	| 'te'
	| 'th'
	| 'tr'
	| 'tk'
	| 'uk'
	| 'ur'
	| 'ug'
	| 'uz'
	| 'vi'
	| 'cy'
	| 'xh'
	| 'yi'
	| 'yo'
	| 'zu'
	| 'la';
