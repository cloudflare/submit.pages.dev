/**
 * POST /api/submit
 */
export function onRequestPost({ request }) {
	let { pathname } = new URL(request.url);
	return new Response(`hello from: ${pathname}`);
}

/**
 * GET /api/submit
 */
 export function onRequestGet({ request }) {
	return new Response(`hello world`);
}
