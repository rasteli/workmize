import { ComponentProps } from "react"
import { NextComponentType } from "next"

import Login from "../../pages/login"
import { useAuth } from "../../contexts/AuthContext"

export const withAuth = (Component: NextComponentType) => {
  const PrivateRoute = (props: ComponentProps<NextComponentType>) => {
    const { user, userLoading } = useAuth()

    if (!user && !userLoading) {
      return <Login />
    }

    return <Component {...props} />
  }

  if (Component.getInitialProps) {
    PrivateRoute.getInitialProps = Component.getInitialProps
  }

  return PrivateRoute
}
