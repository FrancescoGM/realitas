export type Controller<T, R> = {
  handle: (request: T) => Promise<R>
}
