/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
