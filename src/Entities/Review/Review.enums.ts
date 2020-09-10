import { registerEnumType } from 'type-graphql'

export enum ReviewScore {
  one = 1,
  oneAndAHalf = 1.5,
  two = 2,
  twoAndAHalf = 2.5,
  three = 3,
  threeAndAHalf = 3.5,
  four = 4,
  fourAndAHalf = 4.5,
  five = 5,
}

registerEnumType(ReviewScore, {
  name: 'ReviewScore',
  description: 'Overall score for a review of an interaction with a user for a listing.',
})
