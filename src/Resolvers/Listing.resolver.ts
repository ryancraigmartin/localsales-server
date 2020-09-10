import { v4 as uuidv4 } from 'uuid';
import { AddListingInput } from '../Entities/Listing/Listing.inputs';
import { Listing } from "../Entities/Listing/Listing.model";
import { Resolver, Query, Mutation, Arg} from "type-graphql"

@Resolver()
export class ListingResolver {
  @Query(() => [Listing])
  allListings() {
    return Listing.find()
  }

  @Query(() => Listing, { nullable: true })
  getListingById(@Arg("listing_uuid", () => String) listing_uuid: String) {
    return Listing.findOne({ where: { listing_uuid: listing_uuid } })
  }

  @Mutation(() => Listing)
  async addListing(@Arg("data") listingData: AddListingInput) {
      try {
        const listing = Listing.create({
          listing_uuid: uuidv4(),
          ...listingData,
        });
        console.log(listing);
        await listing.save();
        return listing;
      } catch (error) {
        return error;
      }
  }
}