import { Table, Pagination, MultiSelect } from '@mantine/core';
import { useState } from 'react';

import { APPLICATIONS } from './const';
import css from './home.module.css';
import { findFilterValuesFromList } from './utils/findFilterValuesFromList';

import { Page } from '../../components/page/Page';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <Page>
      <div className={css.filtersContainer}>
        <MultiSelect
          placeholder="univeristy"
          data={findFilterValuesFromList(APPLICATIONS, 'university')}
        />
        <MultiSelect
          placeholder="country"
          data={findFilterValuesFromList(APPLICATIONS, 'country')}
        />
        <MultiSelect
          placeholder="duration"
          data={findFilterValuesFromList(APPLICATIONS, 'country')}
        />
        <MultiSelect
          placeholder="language"
          data={findFilterValuesFromList(APPLICATIONS, 'language')}
        />
        {/* TODO: Programmatically implement the filter as a range */}
        <MultiSelect placeholder="cost" />
      </div>

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
