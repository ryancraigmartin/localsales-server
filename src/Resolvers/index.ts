import { UserResolver } from './User.resolver';
import { ListingResolver } from './Listing.resolver';

const resolverArray = [
  UserResolver,
  ListingResolver
];

module.exports = resolverArray