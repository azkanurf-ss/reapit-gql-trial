import { useQuery } from 'react-query'
import { gql } from 'graphql-request'
import graphQLRequestClient from '../../platform-api/graphqlClient'

export function useGetOffice(session, variables) {
  graphQLRequestClient.setHeaders({
    authorization: session?.idToken,
    'reapit-connect-token': session?.accessToken,
  })
  //   query GetAllOffice($pageSize:number, $pageNumber:number)
  return useQuery(
    ['office', { ...variables }],
    async () => {
      const data = await graphQLRequestClient.request(
        gql`
          query{
            GetOffices(pageSize:${variables.pageSize}, pageNumber: ${variables.pageNumber}) {
              _embedded {
                id
                name
              }
              pageNumber
              pageSize
              totalCount
            }
          }
        `,
        variables,
      )
      return data
    },
    {
      enabled: !!session,
    },
  )
}
