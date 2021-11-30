import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $role: Roles!
    $companyId: String!
  ) {
    signUp(
      SignUpInput: {
        name: $name
        email: $email
        password: $password
        role: $role
        companyId: $companyId
      }
    )
  }
`

export const LOGIN_USER = gql`
  mutation LogIn($email: String!, $password: String!, $role: Roles!) {
    signIn(SignInInput: { email: $email, password: $password, role: $role }) {
      token
    }
  }
`

export const CREATE_TASK = gql`
  mutation CreateTask(
    $name: String!
    $responsibleIds: [String!]!
    $completionDate: DateTime!
  ) {
    createTask(
      CreateTaskInput: {
        name: $name
        responsible: $responsibleIds
        completionDate: $completionDate
      }
    )
  }
`

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: String!
    $name: String!
    $isDone: Boolean!
    $responsible: [String!]!
    $completionDate: DateTime!
  ) {
    updateTask(
      UpdateTaskInput: {
        taskId: $id
        name: $name
        isDone: $isDone
        responsible: $responsible
        completionDate: $completionDate
      }
    )
  }
`

export const DELETE_TASK = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(DeleteTaskInput: { taskId: $id })
  }
`

export const TOGGLE_TASK = gql`
  mutation ToggleTask($id: String!) {
    toggleTask(ToggleTaskInput: { taskId: $id })
  }
`
