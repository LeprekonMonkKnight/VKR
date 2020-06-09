import React from 'react';

import View from '@vkontakte/vkui/dist/components/View/View';
import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot';
import ModalCard from '@vkontakte/vkui/dist/components/ModalCard/ModalCard';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Container from './panels/Container';
import Scrin from './components/Scrin';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: "home",
			activeModal: null,
		};
	}

	setActiveModal(activeModal) {
		activeModal = activeModal || null;

		this.setState({
			activeModal,
		});
	};

	go = e => {
		this.setState({ activePanel: e.currentTarget.dataset.to});
	};

	render() {
		const modal = (
			<ModalRoot
				activeModal={this.state.activeModal}
				onClose={null}
			>
				<ModalCard
					id="send"
					onClose={() => this.setActiveModal(null)}
					header="Сделайте скриншот"
					caption="Отправьте нам скриншот, чтобы мы знали какой цвет вы выбрали"
				>
					<br/>
					<Button component="a" size="xl" mode="primary" target='_blank' href='https://vk.com/im?sel=-70117851'>Отправить</Button>
				</ModalCard>
			</ModalRoot>
		);

		return (
			<View activePanel={this.state.activePanel} modal={modal} >
				<Home id="home" go={this.go} />
				<Container id="container" go={this.go} this={this} />
				<Scrin this={this} />
			</View>
		);
	}
}

export default App;