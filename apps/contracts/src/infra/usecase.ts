export type UseCase<T, R> = {
  execute(request: T): R;
};
