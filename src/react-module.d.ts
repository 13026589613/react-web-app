declare module 'moment/locale/*' {
  import { LocaleSpecification } from 'moment'
  const locale: LocaleSpecification & ReadonlyRecordable
  export default locale
}

declare module '@types/node'
declare module 'fastclick'
declare module 'js-md5'
declare module 'js-cookie'

declare module 'qs'
