import React, {useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { platform, IOS } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Tooltip from '@vkontakte/vkui/dist/components/Tooltip/Tooltip';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Mask from './Mask';
import Scrin from '../components/Scrin';

const osName = platform();

const Container = props => {
    
    const [tooltip, setTooltip] = useState(true);
    
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.this.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>}
            >
                Маска
        </PanelHeader>
            <Mask />
            <Scrin />
            <Div>
                <Tooltip text="Нажми на кнопку для заказа"
                    isShown={tooltip}
                    onClose={() => setTooltip(false)}
                    offsetY={0}
                    offsetX={0}
                >
                    <Button size="xl" mode="primary" onClick={() => props.this.setActiveModal("send")} >
                        Заказать
                    </Button>
                </Tooltip>
            </Div>
        </Panel>
    )
};

export default Container;