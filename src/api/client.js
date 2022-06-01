import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql',
    cache: new InMemoryCache()
});

export const BOOK = gql`
    query GetBook {
        author
        title
        pages {
            pageIndex
            content
            tokens{
                position
                value
            }
        }
    }
`