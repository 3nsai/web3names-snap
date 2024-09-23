import { Box, Input, Link } from '@metamask/snaps-sdk/jsx';
import { SnapComponent } from '@metamask/snaps-sdk/jsx';

export type SearchProps = {
  domain?: string;
};

export const Search: SnapComponent<SearchProps> = ({ domain = '' }) => {
  return (
    <Box direction="horizontal" alignment="center">
      <Input name="example-input" placeholder="Enter something..." />
      <Link href={`https://web3names.app/?q=${domain}`}>Search</Link>
    </Box>
  );
};
