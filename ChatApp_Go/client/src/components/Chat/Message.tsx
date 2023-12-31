import { Box, Text } from 'grommet';
import { memo, useMemo } from 'react';
import { UserWorker, User } from 'grommet-icons';

import type { ReceivedMessage } from '../../types';

type MessageProps = {
    me?: boolean;
    messageData: ReceivedMessage;
};

const Message = ({ me, messageData }: MessageProps) => {
    const timeStamp = useMemo(() => {
        // The browser's default locale is used when undefined is passed in.
        const formatter = new Intl.DateTimeFormat(undefined, {
            minute: 'numeric',
            hour12: true,
            hour: 'numeric',
        });

        return formatter.format(new Date(messageData.time));
    }, [messageData]);

    return (
        <Box
            flex={{ shrink: 0 }}
            alignSelf={!me ? 'start' : 'end'}
            direction='column'
            background={!me ? '#242424' : 'black'}
            elevation='small'
            height='fit-content'
            round='xsmall'
            width={{ width: 'auto', max: '85%', min: '25%' }}
            overflow='hidden'>
            <Box background={me ? '#242424' : 'white'} direction='row' align='center' justify='between' pad='xxsmall' gap='medium'>
                <Box direction='row' align='center' gap='5px'>
                    {me ? <UserWorker color='white' size='small' /> : <User color='#242424' size='small' />}
                    <Text size='xsmall'>{messageData.sender}</Text>
                </Box>
                <Text size='xsmall'>{timeStamp}</Text>
            </Box>
            <Box pad='xsmall'>
                <Text style={{ overflowWrap: 'break-word', maxWidth: '100%' }} size='small'>
                    {messageData.message}
                </Text>
            </Box>
        </Box>
    );
};

export default memo(Message);
