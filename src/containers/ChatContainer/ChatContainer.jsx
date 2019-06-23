import './ChatContainer.scss';
import React from 'react';
import { FixedWrapper, SampleMaximized, SampleMinimized, IconButton, ChatIcon} from '@livechat/ui-kit';

const ChatContainer = () => {
    return (
        <FixedWrapper.Root>
            <FixedWrapper.Maximized>
            </FixedWrapper.Maximized>
            <FixedWrapper.Minimized style={{ width: '200px', height: '70px' }}>
               <IconButton className="chat-icon">
                <ChatIcon />
               </IconButton>
            </FixedWrapper.Minimized>
        </FixedWrapper.Root>
    );
}


export default ChatContainer;

