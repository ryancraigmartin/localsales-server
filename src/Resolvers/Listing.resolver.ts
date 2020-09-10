import { v4 as uuidv4 } from 'uuid'
import { AddListingInput } from '../Entities/Listing/Listing.inputs'
import { Listing } from '../Entities/Listing/Listing.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'

@Resolver()
export class ListingResolver {
  @Query(() => [Listing])
  allListings(): Promise<Listing[]> {
    return Listing.find()
  }

  @Query(() => Listing, { nullable: true })
  listingById(@Arg('listingUUID', () => String) listingUUID: string): Promise<Listing | undefined> {
    return Listing.findOne({ where: { listingUUID: listingUUID } })
  }

  @Mutation(() => Listing)
  async addListing(@Arg('data') listingData: AddListingInput): Promise<Listing | undefined> {
    try {
      const listing = Listing.create({
        listingUUID: uuidv4(),
        ...listingData,
      })
      console.log(listing)
      await listing.save()
      return listing
    } catch (error) {
      return error
    }
  }
}
