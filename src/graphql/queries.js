/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
      id
      isClockedIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStatuses = /* GraphQL */ `
  query ListStatuses(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isClockedIn
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      dateTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateTime
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
