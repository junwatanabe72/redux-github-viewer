import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Layout = styled.div`
  max-width: 896px;
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 240px;
  margin: 10px 0px 50px;
  border-collapse: collapse;
  border-top: solid 1px #ccc;
`;

const Th = styled.th`
  min-width: 100px;
  border-top: solid 1px #ccc;

  text-align: center;
`;
const Td = styled.td`
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  text-align: center;
`;

function mappingState(state) {
  return state;
}

function IssueMain(props) {
  return (
    <Layout>
      <Table>
        <tr>
          <Th>
            <input type="checkbox" />
          </Th>
          <Th></Th>
          <Th>ステータス</Th>
          <Th>作成者</Th>
          <Th>作成日付</Th>
          <Th>更新日付</Th>
        </tr>
        <tr>
          <Td>
            <input type="checkbox" />
          </Td>
          <Td></Td>
          <Td>samplestatus</Td>
          <Td>samplecreater</Td>
          <Td>sampledate</Td>
          <Td>sampleupdate</Td>
        </tr>
        <tr>
          <Td>
            <input type="checkbox" />
          </Td>
          <Td>{props.counter}</Td>
          <Td>{props.counter}</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
        <tr>
          <Td>
            <input type="checkbox" />
          </Td>
          <Td></Td>
          <Td>{props.counter}</Td>
          <Td>samplesamplesamplesamplesamplesamplesamplesampl</Td>
          <Td></Td>
          <Td></Td>
        </tr>
      </Table>
    </Layout>
  );
}
IssueMain = connect(mappingState)(IssueMain);
export default IssueMain;
