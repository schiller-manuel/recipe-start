import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link to="/recipes/$id" params={{ id: '1' }}>View Chocolate Cookie Recipe</Link>
      <br />
      <Link to="/recipes/$id" params={{ id: '2' }}>View Pizza Margeritha Recipe</Link>
    </main>
  )
}
