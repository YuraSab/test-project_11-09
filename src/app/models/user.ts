export type Gender = "male" | "female";

export interface User {
  gender: Gender,
  name: {
    title: string,
    first: string,
    last: string,
  },
  location: {
    street: {
      number: number,
      name: string,
    },
    "city": string,
    "country": string,
    "coordinates": {
      "latitude": string,
      "longitude": string,
    },
  },
  "email": string,
  "picture": {
    "large": string,
    "medium": string,
    "thumbnail": string,
  },
}
