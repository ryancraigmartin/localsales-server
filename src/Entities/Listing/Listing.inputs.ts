import { Condition } from './Listing.enums'
import { Listing } from './Listing.model'
import { InputType, Field } from 'type-graphql'

@InputType({ description: 'Input needed to create a new listing.' })
export class AddListingInput implements Partial<Listing> {
  @Field({ nullable: false })
  title: string

  @Field({ nullable: false })
  description: string

  @Field(() => Condition)
  condition: Condition
}
