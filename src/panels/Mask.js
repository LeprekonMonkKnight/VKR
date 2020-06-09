import React, { useState, Fragment } from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Tooltip from '@vkontakte/vkui/dist/components/Tooltip/Tooltip';

import '../styles/Mask.css'

const Mask = props => {
	const [name, setName] = useState("fillMask");
	const [tooltip_1, setTooltip_1] = useState(false);
	const [tooltip_2, setTooltip_2] = useState(false);

	const img = <svg className="MaskImg" width="200" height="98" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd" clip-rule="evenodd"
			d="M143.93 65.047c14.434 9.686 34.639 6.732 45.128-6.597 10.489-13.329 17.024-44.355 
				2.589-54.04-14.434-9.686-44.372 5.636-54.861 18.965-10.489 13.329-7.29 31.986 7.144 
				41.672zm4.286-5.55c11.894 7.98 28.544 5.547 37.187-5.437 8.644-10.983 14.029-36.55 
				2.134-44.532-11.894-7.982-36.564 4.645-45.208 15.628-8.643 10.984-6.008 26.359 5.887 
				34.34zM56.07 65.047c-14.434 9.686-34.639 6.732-45.127-6.597C.453 45.121-6.082 14.095 
				8.353 4.41c14.434-9.686 44.372 5.636 54.86 18.965 10.49 13.329 7.291 31.986-7.143 
				41.672zm-4.286-5.55c-11.894 7.98-28.544 5.547-37.187-5.437C5.953 43.077.567 17.51 12.463 
				9.528c11.894-7.982 36.564 4.645 45.208 15.628 8.643 10.984 6.008 26.359-5.887 34.34z"
			fill="#000009"
		/>
		<path
			id={name} fill-rule="evenodd" clip-rule="evenodd"
			d="M99.853 97.5a44.127 44.127 0 0020.362-4.945c2.072-1.074 4.122-2.215 6.173-3.357 6.028-3.356 
				12.066-6.719 18.719-8.39l6.811-1.713c10.842-2.725 17.345-13.808 14.435-24.602l-7.704-28.58a20 20 0 
				00-16.913-14.65l-4.216-.508c-6.509-.787-12.618-3.262-18.731-5.74-2.77-1.122-5.541-2.244-8.349-3.21C107.047.638 103.502 
				0 99.853 0s-7.194.638-10.587 1.805c-2.809.966-5.58 2.088-8.349 3.21-6.113 2.478-12.223 4.953-18.732 
				5.74l-4.215.509a20 20 0 00-16.912 14.65l-7.705 28.579c-2.91 10.794 3.594 21.877 14.436 24.602l6.81 1.712c6.652 
				1.672 12.69 5.034 18.719 8.391 2.05 1.142 4.1 2.283 6.172 3.357A44.127 44.127 0 0099.853 97.5zM71.317 
				15.512l3.87-.317 5.55 67.713-3.87.317-5.55-67.713zm53.749-.428l3.869.317-5.55 67.713-3.869-.317 5.55-67.713z"
			fill="#3E9AEE"
		/>
		<path
			d="M144.584 72.957l4.431-10.872 7.377 15.14-7.863 3.83-3.945-8.098z"
			fill="#866559"
		/>
	</svg> ;
	
	return (
		<Fragment>
			
			<Card className="CardMask">
				<Tooltip text="Это не медецинская маска"
					isShown={tooltip_1}
					onClose={() => { setTooltip_1(false); setTooltip_2(true) }}
					offsetX={20}
				>
					{img}</Tooltip>
				</Card>
			
		<Group>
			<Div className="ChangeColorBtn">
					<Button className="Green Btn" size="m" onClick={() => setName("GREEN_fillMask")}>&nbsp;</Button>
					<Button className="Orange Btn" size="m" onClick={() => setName("ORANGE_fillMask")}>&nbsp;</Button>
					<Tooltip text="Нажмите, чтобы выбрать цвет маски"
						isShown={tooltip_2}
						onClose={() => setTooltip_2(false)}
						offsetX={-20}
					>
						<Button className="Red Btn" size="m" onClick={() => setName("RED_fillMask")}>&nbsp;</Button>
					</Tooltip>
					<Button className="Black Btn" size="m" onClick={() => setName("BLACK_fillMask")}>&nbsp;</Button>
					<Button className="Vilet Btn" size="m" onClick={() => setName("VILET_fillMask")}>&nbsp;</Button>
					<Button className="Blue Btn" size="m" onClick={() => setName("BLUE_fillMask")}>&nbsp;</Button>
			</Div>
		</Group>
	</Fragment>
)};

export default Mask;