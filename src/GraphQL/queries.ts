import { gql } from "@apollo/client"

export const GET_COMPANY_ID = gql`
  query GetMyCompanyId($email: String!) {
    getMyCompany(email: $email) {
      id
    }
  }
`

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    whoAmI {
      avatar
      name
      email
      role
    }
  }
`

export const GET_TASKS = gql`
  query GetTasks($filterBy: FilterBy!) {
    getTasks(TaskFilter: { filterBy: $filterBy }) {
      nodes {
        name
        id
        isDone
        completionDate
        users {
          id
          name
          avatar
        }
      }
    }
  }
`

export const GET_USERS = gql`
  query GetUsers($limit: Float!) {
    getUsers(UserFilter: { limit: $limit }) {
      nodes {
        id
        name
        avatar
      }
    }
  }
`
