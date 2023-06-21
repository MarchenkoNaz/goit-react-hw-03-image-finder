import { Component } from "react";
import './modal.css'

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = e => {
		if (e.key === 'Escape') {
			this.props.closeModal();
		}
	};


	render() {
		const { children, closeModal } = this.props;
		return (
			<>
				<div className="backdrop" onClick={closeModal}>
					<div className="modal-image">
						{children}
					</div>
				</div>
			</>
		);
	}
}

export default Modal;