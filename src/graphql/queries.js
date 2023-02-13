/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      clockInTime
      clockOutTime
      breaks {
        startTime
        endTime
      }
      lunch {
        startTime
        endTime
      }
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
        clockInTime
        clockOutTime
        breaks {
          startTime
          endTime
        }
        lunch {
          startTime
          endTime
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchEntries = /* GraphQL */ `
  query SearchEntries(
    $filter: SearchableEntryFilterInput
    $sort: [SearchableEntrySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableEntryAggregationInput]
  ) {
    searchEntries(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        clockInTime
        clockOutTime
        breaks {
          startTime
          endTime
        }
        lunch {
          startTime
          endTime
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
