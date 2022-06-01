import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql',
    cache: new InMemoryCache(),
});

export const GET_BOOK = gql`
    query GetBook {
        book {
            title
            author
            pages{
                pageIndex
                content
                tokens{
                    position
                    value
                }
            }
        }
    }
`