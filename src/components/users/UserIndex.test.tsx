import React from 'react';
import ReactDOM from 'react-dom';
import { User } from '../../models/User';
import UserIndex from './UserIndex';
import renderer from 'react-test-renderer';
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
        {id: 0, forename: 'John', surname: 'Doe', email: 'john.doe@example.com'},
        {id: 1, forename: 'Jane', surname: 'Doe', email: 'jane.doe@example.com'},
        {id: 2, forename: 'Johann', surname: 'Doe', email: 'johann.doe@example.com'}
      ],
      deleteUser: () => {},
      editUser: () => {}
    }

    return <UserIndex {...defaultProps} {...props} />
  }

  it('should render a row for each user', () => {
    const stage = renderer.create(renderUserIndex());
    const bodyTableRows = stage.root.findByProps({id: 'blub'}).findAllByType(TableRow);
    expect(bodyTableRows.length).toBe(3);
  });

  it('should call the delete callback', () => {
    const deleteCallbackMock = jest.fn();
    const stage = renderer.create(renderUserIndex({deleteUser: deleteCallbackMock}));
    stage.root
      .findByType(TableBody)
      .findAllByType(TableRow)[0]
      .findAllByType(Button)[1]
      .props.onClick();
    expect(deleteCallbackMock).toBeCalledTimes(1);
  })
})
