/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStatus = /* GraphQL */ `
  subscription OnCreateStatus(
    $filter: ModelSubscriptionStatusFilterInput
    $owner: String
  ) {
    onCreateStatus(filter: $filter, owner: $owner) {
      id
      isClockedIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStatus = /* GraphQL */ `
  subscription OnUpdateStatus(
    $filter: ModelSubscriptionStatusFilterInput
    $owner: String
  ) {
    onUpdateStatus(filter: $filter, owner: $owner) {
      id
      isClockedIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStatus = /* GraphQL */ `
  subscription OnDeleteStatus(
    $filter: ModelSubscriptionStatusFilterInput
    $owner: String
  ) {
    onDeleteStatus(filter: $filter, owner: $owner) {
      id
      isClockedIn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry(
    $filter: ModelSubscriptionEntryFilterInput
    $owner: String
  ) {
    onCreateEntry(filter: $filter, owner: $owner) {
      id
      dateTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry(
    $filter: ModelSubscriptionEntryFilterInput
    $owner: String
  ) {
    onUpdateEntry(filter: $filter, owner: $owner) {
      id
      dateTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry(
    $filter: ModelSubscriptionEntryFilterInput
    $owner: String
  ) {
    onDeleteEntry(filter: $filter, owner: $owner) {
      id
      dateTime
      createdAt
      updatedAt
      owner
    }
  }
`;
