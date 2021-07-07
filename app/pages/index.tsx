import { BlitzPage, Link, Router } from "blitz"

const Home: BlitzPage = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
      <a href="/protected">
        Click to go to /protected and be redirected back here with corrupted page
      </a>
    </div>
  )
}

export default Home
