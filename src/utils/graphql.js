import gql from "graphql-tag";
/**
 * Query the current users details.
 */
export const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      email
    }
  }
`;
/**
 * Sign up a new user mutation.
 */
export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
    }
  }
`;
/**
 * Random query for example.
 */
export const RANDOM_QUERY = gql`
  query {
    user {
      firstName
    }
  }
`;
/**
 * List of users GameCodes with event info
 */
export const PlayerGameCodes = gql`
  query {
    gameCodesList {
      items {
        event {
          name
          description
          banner {
            downloadUrl
          }
        }
        id
        code
      }
    }
  }
`;