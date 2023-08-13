import { Controller } from '@infra/controller'

export default class RegisterAccountUseCase
  implements Controller<unknown, unknown>
{
  constructor(private accountRepository: RegisterAccountUseCase) {}

  handle: (request: unknown) => Promise<unknown>
}
