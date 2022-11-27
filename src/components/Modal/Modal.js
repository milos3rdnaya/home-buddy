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
          <button className="modalAnswers__yes">Yes</button>
          <button className="modalAnswers__no">No</button>
          <button className="modalAnswers__button button">Next</button>
        </div>
      </div>

    </section>
  );
}