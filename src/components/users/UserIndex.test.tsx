import React from 'react';
import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import UserIndex from './UserIndex';
import { User } from '../../models/User';
import { TableBody, TableRow, Button } from '@material-ui/core';

interface Props {
  users: User[];
  deleteUser: (user: User) => void;
  editUser: (user: User) => void;
}

describe('UserIndex as', () => {
  const renderUserIndex = (props?: Partial<Props>) => {
    const defaultProps: Props = {
       users: [
        {id: 0, forename: 'Joe', surname: 'Doe', email: 'joe.doe@example.com'},
        {id: 1, forename: 'Joe1', surname: 'Doe1', email: 'joe.doe1@example.com'},
        {id: 2, forename: 'Joe2', surname: 'Doe2', email: 'joe.doe2@example.com'},
      ],
      deleteUser: () => {},
      editUser: () => {}
    }

    return <UserIndex {...defaultProps} {...props} />;
  }

  it('should render three rows', () => {
    const component = renderer.create(renderUserIndex());
    const tableRows = component.root.findByType(TableBody).findAllByType(TableRow);
    expect(tableRows.length).toBe(3);
  })

  it('should call the delete callback', () => {
    const deleteCallbackMock = jest.fn();
    const component = renderer.create(renderUserIndex({deleteUser: deleteCallbackMock}))
    component.root.findByType(TableBody).findAllByType(TableRow)[0].findAllByType(Button)[1].props.onClick();
    expect(deleteCallbackMock).toBeCalledTimes(1);
  })
})