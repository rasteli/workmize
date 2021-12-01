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
    $responsible: [String!]!
    $completionDate: DateTime!
  ) {
    createTask(
      CreateTaskInput: {
        name: $name
        responsible: $responsible
        completionDate: $completionDate
      }
    )
  }
`

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $name: String!
    $taskId: String!
    $isDone: Boolean!
    $responsible: [String!]!
    $completionDate: DateTime!
  ) {
    updateTask(
      UpdateTaskInput: {
        name: $name
        taskId: $taskId
        isDone: $isDone
        responsible: $responsible
        completionDate: $completionDate
      }
    )
  }
`

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(DeleteTaskInput: { taskId: $taskId })
  }
`

export const TOGGLE_TASK = gql`
  mutation ToggleTask($taskId: String!) {
    toggleTask(ToggleTaskInput: { taskId: $taskId })
  }
`
