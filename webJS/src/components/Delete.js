import React from 'react';
import Modal from '@material-ui/core/Modal';

import api from '../services/api';

import '../styles/components/modal.css';

function Dialog({ isVisible, closeModal, people}) {
  async function handleSubmitForm(event) {
    await api.delete(`/people/${people._id}`);
    window.location.reload();
    closeModal();
  }

  return (
    <Modal open={isVisible} onClose={closeModal} className="modal">
      <div className="dialog delete-dialog">
        <h3 className="modal-title">Deseja deletar esta pessoa?</h3>
        <div className="buttons-container delete-project-buttons">
          <button
            onClick={closeModal}
            className="submit-button modal-button cancel-button"
          >
            Cancelar
          </button>
          <button onClick={handleSubmitForm} className="submit-button modal-button">
            Confirmar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Dialog;
