export async function onRequest(context: any) {
  // Contents of context object
  const {
    request, // same as existing Worker API
  } = context;

  return new Response(JSON.stringify({
    'ip':request.headers.get('CF-Connecting-IP'),
    'ua':request.headers.get('user-agent')
  }), {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  });
}
