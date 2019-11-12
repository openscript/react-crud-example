import React, { useState, FormEvent, ChangeEvent } from 'react';
import { User, defaultUser } from '../../models/User';
import styled from '@emotion/styled';
import { Button, TextField, Dialog } from '@material-ui/core';

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 30rem;

  input, div {
    margin-top: 1rem;
  }
`

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
      <Button onClick={toggleModal}>{props.user ? 'Edit' : 'New'}</Button>
      <Dialog open={open}>
        <CustomForm onSubmit={handleSubmit}>
          <TextField label='Forename' type='text' name='forename' id='forename' onChange={handleChange} defaultValue={user.forename} />
          <TextField label='Surname' type='text' name='surname' id='surname' onChange={handleChange} defaultValue={user.surname} />
          <TextField label='Email' type='email' name='email' id='email' onChange={handleChange} defaultValue={user.email} />
          <TextField 
            label='Birthday' 
            type='date' 
            name='birthday' 
            id='birthday' 
            onChange={handleChange} 
            defaultValue={user.birthday ? user.birthday.substr(0, 10) : undefined}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div>
            <Button onClick={toggleModal} type='button'>Cancel</Button>
            <Button type='submit'>Save</Button>
          </div>
        </CustomForm>
      </Dialog>
    </>
  );
}

export default UserForm;