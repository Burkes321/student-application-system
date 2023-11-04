import { Table, Pagination, Select } from '@mantine/core';
import { useEffect, useState } from 'react';

import { APPLICATIONS } from './const';
import css from './home.module.css';
import { useHomeFilter } from './hooks/useFilteredList';
import { findFilterValuesFromList } from './utils/findFilterValuesFromList';

import { Page } from '../../components/page/Page';

export const Home = () => {
  const { filter, setFilter } = useHomeFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const [universityFilterValue, setUniversityFilterValue] = useState<
    string | null
  >('');
  const [countryFilterValue, setCountryFilterValue] = useState(filter.country);
  const [durationFilterValue, setDurationFilterValue] = useState(
    filter.duration
  );
  const [languageFilterValue, setLanguageFilterValue] = useState(
    filter.language
  );
  const [costFilterValue, setCostFilterValue] = useState(filter.cost);

  useEffect(() => {
    console.log('🚀 ~ file: Home.tsx:13 ~ Home ~ filter:', filter);
  });

  useEffect(() => {
    setFilter({
      ...filter,
      university: universityFilterValue,
      country: countryFilterValue,
      language: languageFilterValue,
      duration: durationFilterValue,
      cost: costFilterValue,
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [
    costFilterValue,
    countryFilterValue,
    currentPage,
    durationFilterValue,
    languageFilterValue,
    setFilter,
    universityFilterValue,
  ]);

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
        <Select
          placeholder="univeristy"
          data={findFilterValuesFromList(APPLICATIONS, 'university').sort()}
          value={filter.university}
          onChange={setUniversityFilterValue}
        />
        <Select
          placeholder="country"
          data={findFilterValuesFromList(APPLICATIONS, 'country').sort()}
          value={filter.country}
          onChange={setCountryFilterValue}
        />
        <Select
          placeholder="duration"
          data={findFilterValuesFromList(APPLICATIONS, 'duration').sort()}
          value={filter.duration}
          // TODO: fix typing error
          onChange={setDurationFilterValue}
        />
        <Select
          placeholder="language"
          data={findFilterValuesFromList(APPLICATIONS, 'language').sort()}
          value={filter.language}
          onChange={setLanguageFilterValue}
        />
        {/* TODO: implement cost filter - number type causes issues */}
        <Select placeholder="cost" />
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
