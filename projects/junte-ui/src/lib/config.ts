import { Injectable } from '@angular/core';
import { Locale } from 'date-fns';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { en } from './core/i18n/en';
import { I18nLoader } from './core/i18n/loader';

export function i18nLoaderFactory(config?: JunteUIModuleConfig) {
  const conf = config || <JunteUIModuleConfig>{};
  return new I18nLoader(conf.i18n || en);
}

export function dfnsFactory(config: JunteUIModuleConfig) {
  const conf = config || <JunteUIModuleConfig>{};
  const service = new DateFnsConfigurationService();
  const locale = conf.locale || {};
  service.setLocale(locale.dfns || dfnsEnUS);
  return service;
}

@Injectable()
export class JunteUIModuleConfig {
  i18n?: any;
  masks?: {
    date?: string,
    time?: string,
    datetime?: string
  };
  formats?: {
    date?: string,
    time?: string,
    datetime?: string
  };
  locale?: {
    dfns?: Locale
  };
}

export const JUNTE_MODULE_PROVIDES = [
  {
    provide: DateFnsConfigurationService,
    useFactory: dfnsFactory,
    deps: [JunteUIModuleConfig]
  },
  LoggerModule.forRoot({
    level: NgxLoggerLevel.DEBUG
  }).providers
];

export const JUNTE_DEFAULT_CONFIG = {
  i18n: en,
  masks: {
    date: '____.__.__',
    time: '__:__',
    datetime: '____.__.__ __:__'
  },
  formats: {
    date: 'yyyy.MM.dd',
    time: 'HH:mm',
    datetime: 'yyyy.MM.dd HH:mm'
  },
  locale: {
    dfns: dfnsEnUS
  }
};
