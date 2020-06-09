import React, { Fragment } from 'react';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';

const Scrin = props => {

    return (
        <Fragment>
            <Placeholder
                header="Сошьем для вас маску за 2 дня"
                action={''}
            >
                Когда маска будет готова, напишем вам и согласуем дату доставки.
                <br />
          </Placeholder>
        </Fragment>
    )
};

export default Scrin;