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
  query GetTasks($filterBy: FilterBy!, $search: String!, $skip: Float!) {
    getTasks(
      TaskFilter: { filterBy: $filterBy, search: $search, skip: $skip }
    ) {
      nodes {
        name
        id
        isDone
        completionDate
        users {
          id
          avatar
        }
      }
    }
  }
`

export const GET_USERS = gql`
  query GetUsers($limit: Float!, $search: String!) {
    getUsers(UserFilter: { limit: $limit, search: $search }) {
      nodes {
        id
        name
        avatar
      }
    }
  }
`
