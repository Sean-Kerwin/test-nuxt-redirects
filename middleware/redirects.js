// These redirects would actually just come from the store getter, they're only
// here as a demo.
const redirects = [
  {
    from: '/products/123',
    to: '/products/xyz'
  }
]

export default function ({store, route, redirect}) {
  console.log(route)
  const path = route.path
  const r = redirects.find(r => r.from === path)
  if (r) {
    console.log('there was a redirect, so going to that instead')
    return redirect(r.to)
  }
}
