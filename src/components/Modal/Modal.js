import "./modal.scss";
import cn from "classnames";

export function Modal({
	open,
	closeModal = (f) => f,
	onSubmitNext = (f) => f,
	step = 1,
	onYes = (f) => f,
	onNo = (f) => f,
	answer,
}) {
	if (open === false) {return};

	return (
		<section className="modal">
			{step === 1 ? (
				<div className="modalChoiceWrapper">
					<div className="modalChoice">
						<header className="modalChoice__header">
							<button onClick={closeModal} className="close"/>
						</header>
						<h3>Are you homeowner or authrized to make property changes?</h3>
						<div className="modalAnswers">
							<button
								onClick={onYes}
								className={cn("modalAnswers__btn", "modalAnswers__btn_yes", {
									modalAnswers__btn_active: answer,
								})}
							>
								<span>Yes</span>
							</button>
							<button
								onClick={onNo}
								className={cn("modalAnswers__btn", "modalAnswers__btn_no", {
									modalAnswers__btn_active: !answer,
								})}
							>
								<span>No</span>
							</button>
						</div>
						<div className="modalAnswers__next">
							<button
								type="button"
								onClick={onSubmitNext}
								className="button"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			) : (
				<form className="modalFormWrapper" onSubmit={onSubmitNext}>
					<div className="modalForm">
						<header className="modalForm__header">
							<button onClick={closeModal} className="close"/>
						</header>
						<h3>Who should I prepare this estimate for?</h3>
						<small className="modalForm__choice">
							Your choice: { answer ? 'Yes' : 'No' }
						</small>
						<div className="modalInputs">
							<div className="input-wrapper">
								<input
									className="input"
									type="text"
									required={true}
									minLength={2}
									maxLength={30}
									placeholder="  Full name"
								/>
								<span>Full name</span>
							</div>
							<div className="input-wrapper">
								<input
									className="input"
									type="email"
									required={true}
									placeholder="  Email address"
								/>
								<span>Email address</span>
							</div>
						</div>
						<div className="modalAnswers__next">
							<button type="submit" className="button">
								Next
							</button>
						</div>
						<small className="modalForm__safe">
							Safe, Secure and Confidential
						</small>
					</div>
				</form>
			)}
		</section>
	);
}
