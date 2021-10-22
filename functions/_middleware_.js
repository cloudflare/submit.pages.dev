export const onRequestGet = async ({ next }) => {
  const response = await next()
  response.headers.set('X-Hello', 'Hello from Plinko Middleware!')
  return response
}