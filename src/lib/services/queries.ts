import { gql } from "@apollo/client";

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    eventCollection {
      items {
        title
        startTime
        locationName
        locationGoogleMapsLink
      }
    }
  }
`;
