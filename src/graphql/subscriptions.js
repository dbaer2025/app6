/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDiary = /* GraphQL */ `
  subscription OnCreateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onCreateDiary(filter: $filter) {
      id
      name
      image
      description
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDiary = /* GraphQL */ `
  subscription OnUpdateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onUpdateDiary(filter: $filter) {
      id
      name
      image
      description
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDiary = /* GraphQL */ `
  subscription OnDeleteDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onDeleteDiary(filter: $filter) {
      id
      name
      image
      description
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      fid
      src
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      fid
      src
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      fid
      src
      createdAt
      updatedAt
      __typename
    }
  }
`;
