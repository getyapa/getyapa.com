export interface LayoutProps {
  children?: any
}

export function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen text-gray-700 bg-gray-200">
      <div className="container py-4 mx-auto flex">{props.children}</div>
    </div>
  )
}
