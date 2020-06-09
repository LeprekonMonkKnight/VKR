import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import './Intro.css';
import { Group, Div, Avatar, FixedLayout, Button } from '@vkontakte/vkui';


const Intro = ({ id, snackbarError, fetchedUser, userHasSeeIntro, go}) => {
    return (
        <Panel id={id} centered={true} > 
            <PanelHeader>
                Showroom
            </PanelHeader>
            {(!userHasSeeIntro && fetchedUser) && 
                <Fragment>
                    <Group>
                        <Div className='User'>
                            {fetchedUser.photo_200 && 
                            <Avatar src={fetchedUser.photo_200} />}
                        <h2>Привет, {fetchedUser.first_name}!</h2>
                        <h3>Этот сервис создан для того, чтобы помочь тебе кастомизировать товары фирмы BYCLAY</h3>
                        </Div>
                    </Group>
                    <FixedLayout vertical='bottom'>
                        <Div>
                            <Button mode='commerce' size='xl' onClick={go}>
                                Ок
                            </Button>
                        </Div>
                    </FixedLayout>
                </Fragment>
            
            }
            
            {snackbarError}
        </Panel>
    )
};

export default Intro;
