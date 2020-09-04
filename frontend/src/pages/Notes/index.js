import React from 'react';

import { Table } from 'react-bootstrap'
import { UpdateRounded ,DeleteOutlined } from '@material-ui/icons'
import { green } from '@material-ui/core/colors';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Notes() {
  return (
    <>
      <section>
        <div className="notes">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Title</th>
                <th>Text</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <a href="#"><UpdateRounded  style={{ color: green[500] }}/></a>
                  <a href="#"><DeleteOutlined  color="secondary"/></a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default Notes;