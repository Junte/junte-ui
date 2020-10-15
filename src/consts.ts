import { enUS as dfnsEnUS, ru as dfnsRu } from 'date-fns/locale';
import { i18nEn, i18nRu, localeEnUs as jntEn, localeRu as jntRu } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from './enums/language';

export const PRELOADING_DELAY = 5000;

export const CURRENT_LANGUAGE = (() => {
  const base = document.querySelector('base')
    .getAttribute('href');
  switch (base) {
    case '/ru/':
      return Language.ru;
    case '/en/':
    default:
      return Language.en;
  }
})();
export let JUNTE_UI_CONFIG = {
  i18n: i18nEn,
  locale: {
    ui: jntEn,
    dfns: dfnsEnUS
  }
};
switch (CURRENT_LANGUAGE) {
  case Language.ru:
    JUNTE_UI_CONFIG = {
      i18n: i18nRu,
      locale: {
        ui: jntRu,
        dfns: dfnsRu
      }
    };
    break;
  case Language.en:
  default:
  // en
}


export const CATEGORIES = {
  layout: {
    name: 'Layout',
    icon: LocalUI.icons.layout,
    link: 'layout',
    components: [
      {
        name: 'Stack',
        icon: LocalUI.icons.between,
        link: 'stack',
        teaser: 'The stack is the most popular pattern for aligning elements in views',
      },
      {
        name: 'Grid',
        icon: LocalUI.icons.grid,
        link: 'grid',
        teaser: 'Grid is a modern and flexible approach to display elements depending on device width',
      },
      {
        name: 'Block',
        icon: LocalUI.icons.block,
        link: 'block',
        teaser: 'Block is a grouping of elements related to one piece of functionality on the page',
      },
      {
        name: 'Card',
        icon: LocalUI.icons.card,
        link: 'card',
        teaser: 'Super stack...',
      },
      {
        name: 'Responsive',
        icon: LocalUI.icons.responsive,
        link: 'responsive',
        teaser: 'Responsive that makes web pages render well on a variety of devices and window or screen sizes',
      },
      {
        name: 'Skeleton',
        icon: LocalUI.icons.skeleton,
        link: 'skeleton',
        teaser: 'Skeleton provides a placeholder for future content which will be loaded soon',
      },
      {
        name: 'Spinner',
        icon: LocalUI.icons.spinner,
        link: 'spinner',
        teaser: 'Spinner displays loading data or performing some processing',
      },
      {
        name: 'Application',
        icon: LocalUI.icons.layout,
        link: 'application',
        teaser: 'Super stack...',
      },
      {
        name: 'Informer',
        icon: LocalUI.icons.informer,
        link: 'informer',
        teaser: 'Super stack...',
      },
      {
        name: 'Collapsible',
        icon: LocalUI.icons.collapsible,
        link: 'collapsible',
        teaser: 'Super stack...',
      },
    ]
  },
  navigation: {
    name: 'Navigation',
    icon: LocalUI.icons.navigation,
    link: 'navigation',
    components: [
      {
        name: 'Link',
        icon: LocalUI.icons.link,
        link: 'link',
        teaser: 'Super stack...',
      },
      {
        name: 'Menu',
        icon: LocalUI.icons.menu,
        link: 'menu',
        teaser: 'Super stack...',
      },
      {
        name: 'Tabs',
        icon: LocalUI.icons.tabs,
        link: 'tabs',
        teaser: 'Super stack...',
      },
      {
        name: 'Pager',
        icon: LocalUI.icons.pager,
        link: 'pager',
        teaser: 'Super stack...',
      },
      {
        name: 'Breadcrumbs',
        icon: LocalUI.icons.breadcrumbs,
        link: 'breadcrumbs',
        teaser: 'Super stack...',
      },
      {
        name: 'Accordion',
        icon: LocalUI.icons.accordion,
        link: 'accordion',
        teaser: 'Super stack...',
      }
    ]
  },
  elements: {
    name: 'UI Elements',
    icon: LocalUI.icons.elements,
    link: 'ui-elements',
    components: [
      {
        name: 'Icon',
        icon: LocalUI.icons.icon,
        link: 'icon',
        teaser: 'Super stack...',
      },
      {
        name: 'Avatar',
        icon: LocalUI.icons.avatar,
        link: 'avatar',
        teaser: 'Super stack...',
      },
      {
        name: 'Picture',
        icon: LocalUI.icons.picture,
        link: 'picture',
        teaser: 'Super stack...',
      },
      {
        name: 'Badge',
        icon: LocalUI.icons.badge,
        link: 'badge',
        teaser: 'Super stack...',
      },
      {
        name: 'Label',
        icon: LocalUI.icons.label,
        link: 'label',
        teaser: 'Super stack...',
      },
      {
        name: 'Dot',
        icon: LocalUI.icons.dot,
        link: 'dot',
        teaser: 'Super stack...',
      }
    ]
  },
  forms: {
    name: 'Forms',
    icon: LocalUI.icons.forms,
    link: 'forms',
    components: [
      {
        name: 'Button',
        icon: LocalUI.icons.button,
        link: 'button',
        teaser: 'Super stack...',
      },
      {
        name: 'Form',
        icon: LocalUI.icons.forms,
        link: 'form',
        teaser: 'Super stack...',
      },
      {
        name: 'Input',
        icon: LocalUI.icons.input,
        link: 'input',
        teaser: 'Super stack...',
      },
      {
        name: 'Checkbox',
        icon: LocalUI.icons.checkbox,
        link: 'checkbox',
        teaser: 'Super stack...',
      },
      {
        name: 'Radio',
        icon: LocalUI.icons.radio,
        link: 'radio',
        teaser: 'Super stack...',
      },
      {
        name: 'Select',
        icon: LocalUI.icons.select,
        link: 'select',
        teaser: 'Super stack...',
      },
      {
        name: 'Switch',
        icon: LocalUI.icons.switch,
        link: 'switch',
        teaser: 'Super stack...',
      },
      {
        name: 'Switcher',
        icon: LocalUI.icons.switcher,
        link: 'switcher',
        teaser: 'Super stack...',
      },
      {
        name: 'Calendar',
        icon: LocalUI.icons.calendar,
        link: 'calendar',
        teaser: 'Super stack...',
      },
      {
        name: 'Date Picker',
        icon: LocalUI.icons.datePicker,
        link: 'date-picker',
        teaser: 'Super stack...',
      },
      {
        name: 'Selectable',
        icon: LocalUI.icons.selectable,
        link: 'selectable',
        teaser: 'Super stack...',
      },
      {
        name: 'Filter',
        icon: LocalUI.icons.filter,
        link: 'filter',
        teaser: 'Super stack...',
      },
      {
        name: 'Image Cropper',
        icon: LocalUI.icons.cropper,
        link: 'image-cropper',
        teaser: 'Super stack...',
      },
      {
        name: 'Image Uploader',
        icon: LocalUI.icons.imageUploader,
        link: 'image-uploader',
        teaser: 'Super stack...',
      }
    ]
  },
  collections: {
    name: 'Collections',
    icon: LocalUI.icons.collections,
    link: 'collections',
    components: [
      {
        name: 'Gantt',
        icon: LocalUI.icons.gantt,
        link: 'gantt',
        teaser: 'Super stack...',
      },
      {
        name: 'Table',
        icon: LocalUI.icons.table,
        link: 'table',
        teaser: 'Super stack...',
      },
      {
        name: 'Timeline',
        icon: LocalUI.icons.timeline,
        link: 'timeline',
        teaser: 'Super stack...',
      }
    ]
  },
  overlays: {
    name: 'Overlays',
    icon: LocalUI.icons.overlays,
    link: 'overlays',
    components: [
      {
        name: 'Modal',
        icon: LocalUI.icons.modal,
        link: 'modal',
        teaser: 'Super stack...',
      },
      {
        name: 'Popover',
        icon: LocalUI.icons.popover,
        link: 'popover',
        teaser: 'Super stack...',
      }
    ]
  },
  dynamic_data: {
    name: 'Dynamic Data',
    icon: LocalUI.icons.dynamic,
    link: 'dynamic-data',
    components: [
      {
        name: 'Progress bar',
        icon: LocalUI.icons.progressBar,
        link: 'progress-bar',
        teaser: 'Super stack...',
      },
      {
        name: 'Circle bar',
        icon: LocalUI.icons.circleBar,
        link: 'circle-bar',
        teaser: 'Super stack...',
      },
      {
        name: 'Chart',
        icon: LocalUI.icons.chart,
        link: 'chart',
        teaser: 'Super stack...',
      },
      {
        name: 'Date Period',
        icon: LocalUI.icons.datePeriod,
        link: 'date-period',
        teaser: 'Super stack...',
      },
      {
        name: 'Timer',
        icon: LocalUI.icons.timer,
        link: 'timer',
        teaser: 'Super stack...',
      }
    ]
  },
  other: {
    name: 'Other',
    icon: LocalUI.icons.other,
    link: 'other',
    components: [
      {
        name: 'Pipes',
        icon: LocalUI.icons.pipes,
        link: 'pipes',
        teaser: 'Super stack...',
      },
      {
        name: 'Confirm',
        icon: LocalUI.icons.confirm,
        link: 'confirm',
        teaser: 'Super stack...',
      },
      {
        name: 'Message',
        icon: LocalUI.icons.message,
        link: 'message',
        teaser: 'Super stack...',
      }
    ]
  }
};

