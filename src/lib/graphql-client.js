import { GraphQLClient } from 'graphql-request'
const HYGRAPH_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/clck9n9w011h201rr1chgd0af/master'
export const client = new GraphQLClient(HYGRAPH_ENDPOINT)