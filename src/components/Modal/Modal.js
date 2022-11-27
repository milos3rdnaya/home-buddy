import './modal.scss';

export function Modal() {
  return (
    <section className="modal">

      <div className="modalChoice">
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
      </div>

    </section>
  );
}