export {}

export interface ApiList {
  [key: string]: ListOptions
}

export interface Apis<T> {
  [key: string]: (data: object) => Promise<T>
}

export interface ModulesApiList {
  [key: string]: ApiList
}

export interface ModuleApis<T> {
  [key: string]: Apis<T>
}

export interface ListOptions {
  url: string
  method: string
  headers?: any
  baseUrl?: any
  openDefaultParams?: boolean
  contentType?: string
  listParams?: boolean
}

export interface Options {
  data: any
  params?: any
  url: string
  method?: string
  headers?: any
  baseUrl?: any
  openDefaultParams?: boolean
  contentType?: string
  listParams?: boolean
}
