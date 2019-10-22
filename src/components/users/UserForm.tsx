import React, { useState, FormEvent, ChangeEvent } from 'react';
import Modal from '../Modal';
import { User, defaultUser } from '../../models/User';

interface Props {
  user?: User;
  saveUser: (user: User) => void;
}

const UserForm: React.FC<Props> = (props) => {
  const [open, isOpen] = useState(false);
  const [user, setUser] = useState<User>(
    props.user ? props.user : defaultUser
  );

  const toggleModal = () => {
    isOpen(!open);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.saveUser(user);
    toggleModal();
    e.currentTarget.reset();
  } 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string | Date | null = e.currentTarget.value;
    if(e.currentTarget.type === 'date') {
      value = e.currentTarget.valueAsDate ? e.currentTarget.valueAsDate.toISOString() : null;
    }
    setUser({...user, [e.currentTarget.name]: value});
  }

  return (
    <>
      <button onClick={toggleModal}>{props.user ? 'Edit' : 'New'}</button>
      <Modal open={open}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='forename'>Forename</label>
          <input type='text' name='forename' id='forename' onChange={handleChange} defaultValue={user.forename} />
          <label htmlFor='surname'>Surname</label>
          <input type='text' name='surname' id='surname' onChange={handleChange} defaultValue={user.surname} />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleChange} defaultValue={user.email} />
          <label htmlFor='birthday'>Birthday</label>
          <input type='date' name='birthday' id='birthday' onChange={handleChange} defaultValue={user.birthday ? user.birthday.substr(0, 10) : undefined} />
          <div>
            <button onClick={toggleModal} type='button'>Cancel</button>
            <input type='submit' value='Save' />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default UserForm;