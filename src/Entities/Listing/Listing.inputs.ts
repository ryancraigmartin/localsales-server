import { Condition } from './Listing.enums'
import { Listing } from './Listing.model'
import { InputType, Field } from 'type-graphql'

@InputType({ description: 'Input needed to create a new listing.' })
export class AddListingInput implements Partial<Listing> {
  @Field()
  title: string

  @Field()
  description: string

  @Field(() => Condition)
  condition: Condition
}

@InputType({ description: 'Input needed to update a new listing.' })
export class UpdateListingInput implements Partial<Listing> {
  @Field()
  id!: string

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field(() => Condition, { nullable: true })
  condition?: Condition

  @Field()
  isPromoted: boolean

  @Field()
  isActive: boolean
}
