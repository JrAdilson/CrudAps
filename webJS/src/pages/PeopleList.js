import React, { useEffect, useState } from 'react';

import Edit from '../components/Edit';
import Delete from '../components/Delete';

import api from '../services/api';

import { MdEdit, MdDelete } from 'react-icons/md';
import '../styles/pages/PeopleList.css';

const PeopleList = () => {
  const [people, setPeople] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  useEffect(() => {
    async function fetchPeopleData() {
      await api.get('/people').then((res) => {
        setPeople(res.data);
      });
    }

    fetchPeopleData();
  }, []);

  function closeModal() {
    setIsDeleteModalVisible(false);
    setIsEditModalVisible(false);
  }

  async function handleEdit(people) {
    setSelectedPeople(people);
    setIsEditModalVisible(true);
  }

  async function handleDelete(people) {
    setSelectedPeople(people);
    setIsDeleteModalVisible(true);
  }
  console.log(people);
  return (
    <div className="container">
      <Delete
        people={selectedPeople}
        isVisible={isDeleteModalVisible}
        closeModal={closeModal}
      />
      <Edit
        people={selectedPeople}
        isVisible={isEditModalVisible}
        closeModal={closeModal}
      />
      <nav className="header">
        <h1>Register</h1>
      </nav>

      <div className="people-list">
        <h2>Suas informações</h2>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Profissão</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
              {people &&
                people.map((people) => (
                  <tr key={people._id}>
                    <td>{people.name}</td>
                    <td>{people.age}</td>
                    <td>{people.email}</td>
                    <td>{people.number}</td>
                    <td>{people.job}</td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleEdit(people)}
                      >
                        <MdEdit size={18} color="#3a3a3a" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleDelete(people)}
                      >
                        <MdDelete size={18} color="#d91e18" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
