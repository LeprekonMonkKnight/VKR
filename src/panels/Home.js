import React, {useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Tooltip from '@vkontakte/vkui/dist/components/Tooltip/Tooltip';

import persik from '../img/persik.png';
import mask from '../img/mask.svg';
import '../styles/Card.css';
import '../styles/Home.css'

const Home = ({ id, go }) => {

	const [tooltip, setTooltip] = useState(true);

	return (
		<Panel id={id}>
			<PanelHeader>Showroom</PanelHeader>
			<Group>
				<Div className="fullsсrin">
					<CardGrid>
						<Card size='l' mode="shadow" onClick={go} data-to="container">
							<Div className="maskImg">
								<Tooltip text="Нажми на карточку, чтобы кастомизировать маску"
									isShown={tooltip}
									onClose={() => setTooltip(false)}
									offsetY={180}
									offsetX={120}
								>
									<img className="img-card" src={mask} alt="Защитная маска" />
								</Tooltip>
							</Div>
							<Header className="nameCard" mode="secondary" >Защитная маска</Header>
						</Card>
						<Card size='l' mode="shadow">
							<img className="img-card" src={persik} alt="Persik The Cat" />
							<Header className="nameCard" mode="secondary">/В разработке/<br /><br />Двусторонний бафф</Header>
						</Card>
						<Card size='l' mode="shadow">
							<img className="img-card" src={persik} alt="Persik The Cat" />
							<Header className="nameCard" mode="secondary">/В разработке/<br /><br />Худи</Header>
						</Card>
						<Card size='l' mode="shadow">
							<img className="img-card" src={persik} alt="Persik The Cat" />
							<Header className="nameCard" mode="secondary">/В разработке/<br /><br />Куртка</Header>
						</Card>
					</CardGrid>
				</Div>
			</Group>
		</Panel>
	)
};

export default Home;
