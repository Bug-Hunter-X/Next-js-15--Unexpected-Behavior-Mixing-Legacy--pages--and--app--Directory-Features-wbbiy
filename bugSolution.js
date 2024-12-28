/* bugSolution.js */
// Solution: Migrate all relevant pages to the `app` directory or completely separate them.
// Example showing migration to the app directory:
// app/page.js
// ... (use app directory's data fetching mechanisms here) 
export default function Page({params}) {
  return (
    <div>Hello {params.id}</div>
  )
}

// Or, keep the pages directory completely separate from the app directory and manage their data fetching separately.  Avoid overlaps in route structure.