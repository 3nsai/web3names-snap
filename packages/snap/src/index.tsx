import {
  UserInputEventType,
  type OnHomePageHandler,
  OnUserInputHandler,
} from '@metamask/snaps-sdk';
import { Box, Text, Divider, Image } from '@metamask/snaps-sdk/jsx';
import full3nssvg from '../images/full-3ns.svg';
import { Search } from './components/Search';

export const onHomePage: OnHomePageHandler = async () => {
  return {
    content: (
      <Box>
        <Box alignment="center" direction="horizontal">
          <Image src={full3nssvg} alt="logo" />
        </Box>
        <Divider />
        <Search />
      </Box>
    ),
  };
};

export const onUserInput: OnUserInputHandler = async ({
  id,
  event,
  context,
}) => {
  if (event.type === UserInputEventType.InputChangeEvent) {
    switch (event.name) {
      case 'example-input':
        await snap.request({
          method: 'snap_updateInterface',
          params: {
            id,
            ui: (
              <Box>
                <Box alignment="center" direction="horizontal">
                  <Image src={full3nssvg} alt="logo" />
                </Box>
                <Divider />
                <Search domain={event.value.toString()} />
              </Box>
            ),
          },
        });
        break;

      default:
        await snap.request({
          method: 'snap_updateInterface',
          params: {
            id,
            ui: (
              <Box>
                <Text>Oops! Something went wrong.</Text>
              </Box>
            ),
          },
        });
        break;
    }
  }
};
