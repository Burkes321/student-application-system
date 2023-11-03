import { Table, Pagination } from '@mantine/core';
import { useState } from 'react';

import { APPLICATIONS } from './const';
import css from './home.module.css';

import { Page } from '../../components/page/Page';

export const Home = () => {
  console.log('🚀 ~ file: Home.tsx:5 ~ APPLICATIONS:', APPLICATIONS);
  const [currentPage, setCurrentPage] = useState(1);

  // cur page 0 shows 0 to 9
  // then 10 to 19
  // then 20 to 29

  const rows = APPLICATIONS.map((application) => (
    <Table.Tr key={application.cost} className={css.tableRow}>
      <Table.Td>{application.name}</Table.Td>
      <Table.Td>{application.university}</Table.Td>
      <Table.Td>{application.country}</Table.Td>
      <Table.Td>{application.duration}</Table.Td>
      <Table.Td>{application.cost}</Table.Td>
      <Table.Td>{application.applicationDeadlineDate.toDateString()}</Table.Td>
      <Table.Td>{application.language}</Table.Td>
    </Table.Tr>
  )).slice((currentPage - 1) * 10, currentPage * 10);

  // TODO: create a hook here which manages which list items to show

  return (
    <Page>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>University</Table.Th>
            <Table.Th>Country</Table.Th>
            <Table.Th>Duration</Table.Th>
            <Table.Th>Cost</Table.Th>
            <Table.Th>ApplicationDeadlineDate</Table.Th>
            <Table.Th>Language</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Pagination
        className={css.pagination}
        value={currentPage}
        onChange={setCurrentPage}
        total={APPLICATIONS.length / 10}
      />
    </Page>
  );
};
