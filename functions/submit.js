/**
 * POST /api/submit
 */
export async function onRequestPost({ request }) {
	try {
		let data = await request.json();
		let pretty = JSON.stringify(data, null, 2);
		return new Response(pretty, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 });
	}
}
