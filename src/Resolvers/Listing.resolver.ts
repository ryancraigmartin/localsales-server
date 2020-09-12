import { AddListingInput, UpdateListingInput } from './../Entities/Listing/Listing.inputs'
import { Listing } from '../Entities/Listing/Listing.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { getRepository } from 'typeorm'

@Resolver()
export class ListingResolver {
  @Query(() => [Listing])
  allListings(): Promise<Listing[] | undefined> {
    return getRepository(Listing).find()
  }

  @Query(() => Listing, { nullable: true })
  listingById(@Arg('id', () => String) id: string): Promise<Listing | undefined> {
    return getRepository(Listing).findOne({
      where: { id: id },
    })
  }

  @Mutation(() => Listing)
  async addListing(@Arg('data') listingData: AddListingInput): Promise<Listing | Error> {
    try {
      const listing: Listing = getRepository(Listing).create({
        ...listingData,
      })
      console.log(listing)
      await listing.save()
      return listing
    } catch (error) {
      return error
    }
  }

  @Mutation(() => Listing)
  async updateListing(@Arg('data') listingInputData: UpdateListingInput): Promise<Listing | Error> {
    try {
      const listing: Listing | undefined = await getRepository(Listing).findOne(
        listingInputData.id,
      )
      if (!listing) throw new Error('404 listing not found')
      Object.assign(listing, listingInputData)
      await listing.save()
      console.log(listing)
      return listing
    } catch (error) {
      return error
    }
  }
}
