import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';

import api from '../services/api';

import '../styles/components/form.css';
import '../styles/components/modal.css';

function Dialog({ isVisible, closeModal, people }) {
  const [newname, setNewname] = useState('');
  const [newage, setNewage] = useState('');
  const [newemail, setNewemail] = useState('');
  const [newnumber, setNewnumber] = useState('');
  const [newjob, setNewjob] = useState('');

  useEffect(() => {
    if (people) {
      setNewname(people.name);
      setNewage(people.age);
      setNewemail(people.email);
      setNewnumber(people.number);
      setNewjob(people.job);
    }
  }, [people]);

  async function handleSubmitForm(event) {
    event.preventDefault();

    await api.put(`/people/${people._id}`, {
      name: newname,
      age: newage,
      email: newemail,
      number: newnumber,
      job: newjob,
    });
  }
  console.log(people);
  return (
    <Modal open={isVisible} onClose={closeModal} className="modal">
      <div className="dialog">
        <form onSubmit={handleSubmitForm} className="form-content">
          <h3 className="modal-name">Editar pessoa:</h3>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              defaultValue={newname}
              maxLength="100"
              value={newname}
              onChange={(event) => setNewname(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="name">Idade</label>
            <input
              id="name"
              type="text"
              defaultValue={newage}
              maxLength="100"
              value={newage}
              onChange={(event) => setNewage(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="name">Email</label>
            <input
              id="name"
              type="text"
              defaultValue={newemail}
              maxLength="100"
              value={newemail}
              onChange={(event) => setNewemail(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="name">Telefone</label>
            <input
              id="name"
              type="text"
              defaultValue={newjob}
              maxLength="100"
              value={newjob}
              onChange={(event) => setNewjob(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="field">
            <label htmlFor="name">Profissão</label>
            <input
              id="name"
              type="text"
              defaultValue={newnumber}
              maxLength="100"
              value={newnumber}
              onChange={(event) => setNewnumber(event.target.value)}
              className="modal-input"
            />
          </div>
          <div className="buttons-container">
            <button
              onClick={closeModal}
              className="submit-button modal-button cancel-button"
            >
              Cancelar
            </button>
            <button type="submit" className="submit-button modal-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Dialog;
