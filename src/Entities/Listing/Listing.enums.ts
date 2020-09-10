import { registerEnumType } from 'type-graphql'

export enum Condition {
  new = 'NEW',
  likeNew = 'LIKE NEW',
  openBox = 'OPEN BOX',
  used = 'USED',
}

registerEnumType(Condition, {
  name: 'Condition',
  description: 'Condition of the item being listed.',
})
