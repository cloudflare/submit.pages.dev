export const onRequestGet = async ({ next }) => {
  let response = await next()
	response = new Response(response.body, response);
  response.headers.set('X-Hello', 'Hello from Plinko Middleware!')
  return response
}
