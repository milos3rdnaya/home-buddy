import './modal.scss';

export function Modal() {
  return (
    <section className="modal">

      {/* <div className="modalChoice">
        <header className="modalChoice__header">
          <button className="close"></button>
        </header>
        <h3>Are you homeowner or authrized to make property changes?</h3>
        <div className="modalAnswers">
          <button className="modalAnswers__yes"> <span>Yes</span></button>
          <button className="modalAnswers__no"><span>No</span></button>
        </div>
        <div className="modalAnswers__btn">
          <button className="modalAnswers__button button">Next</button>
        </div>
      </div> */}

      <div className="modalForm">
        <header className="modalForm__header">
          <button className="close"></button>
        </header>
        <h3>Who should I prepare this estimate for?</h3>
        <small className="modalForm__choice">Your choice: <b>Yes</b></small>
        <div className="modalInputs">
            <div className="input-wrapper">
              <input className="input" type="text" placeholder="  Full name"/>
              <span>Full name</span>
            </div>
            <div className="input-wrapper">
              <input className="input" type="text" placeholder="  Email address"/>
              <span>Email address</span>
            </div>
        </div>
        <div className="modalAnswers__btn">
          <button className="modalAnswers__button button">Next</button>
        </div>
        <small className="modalForm__safe">Safe, Secure and Confidential</small>
      </div>

    </section>
  );
}