export function formValues<T = Record<string, unknown>>(form: FormData): T {
  const json: Record<string, unknown> = {}

  for (const [key, value] of form.entries()) {
    json[key] = value
  }

  return json as T
}
