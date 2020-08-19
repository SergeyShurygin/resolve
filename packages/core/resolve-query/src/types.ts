export type CreateQueryOptions = {
  invokeEventBusAsync: Function
  readModelConnectors: any
  readModels: any[]
  viewModels: any[]
  performanceTracer: any
  eventstoreAdapter: any
  getRemainingTimeInMillis: any
  performAcknowledge: any
  sendReactiveEvent: any
}

type WrapModelOptions = Omit<
  Omit<CreateQueryOptions, 'readModels'>,
  'viewModels'
>

export type WrapReadModelOptions = WrapModelOptions & { readModel: any }
export type WrapViewModelOptions = WrapModelOptions & { viewModel: any }

export type SerializedError = {
  name: string | null
  code: string | null
  message: string
  stack: string
}

export type ReadModelMeta = {
  name: string
  resolvers: { [key: string]: any }
  projection: { [key: string]: Function }
  connectorName: string
}

export type ReadModelPool = {
  performanceTracer: any
  getSecretsManager: any
  eventstoreAdapter: any
  isDisposed: boolean
  connector: any
  connections: Set<any>
  readModel: ReadModelMeta
  invokeEventBusAsync: Function
  performAcknowledge: Function
  sendReactiveEvent: Function
  getRemainingTimeInMillis: Function
}
