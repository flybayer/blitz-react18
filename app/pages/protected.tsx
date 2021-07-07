import { BlitzPage } from "blitz"

const LoginPage: BlitzPage = () => {
  return <h1>Protected Page</h1>
}

LoginPage.authenticate = { redirectTo: "/" }

export default LoginPage
