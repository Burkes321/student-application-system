import { Table, Pagination, Select } from '@mantine/core';
import { useEffect, useState } from 'react';

import { APPLICATIONS } from './const';
import css from './home.module.css';
import { useHomeFilter } from './hooks/useHomeFilter';
import { Application } from './interfaces';
import { findFilterValuesFromList } from './utils/findFilterValuesFromList';

import { Page } from '../../components/page/Page';

export const Home = () => {
  const { filter, setFilter } = useHomeFilter();
  const [currentPage, setCurrentPage] = useState(1);

  // Stretch goal would be to implement the filter state handlers as useReducer call
  // No change to functionality, but it would be better for extensbility and dev experience.
  const [universityFilterValue, setUniversityFilterValue] = useState<
    string | null
  >(filter.university);
  const [countryFilterValue, setCountryFilterValue] = useState(filter.country);
  const [durationFilterValue, setDurationFilterValue] = useState(
    filter.duration
  );
  const [languageFilterValue, setLanguageFilterValue] = useState(
    filter.language
  );
  const [costFilterValue, setCostFilterValue] = useState(filter.cost);
  const [sortBy, setSortBy] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const filterFunction = (application: Application) => {
    const universityFilter = filter.university
      ? filter.university === application.university
      : true;

    const countryFilter = filter.country
      ? filter.country === application.country
      : true;

    const durationFilter = filter.duration
      ? filter.duration === application.duration
      : true;

    const languageFilter = filter.language
      ? filter.language === application.language
      : true;

    const costFilter = filter.cost ? filter.cost === application.cost : true;

    return (
      universityFilter &&
      countryFilter &&
      durationFilter &&
      languageFilter &&
      costFilter
    );
  };

  const sortingFunction = (sortBy: string, sortAsc: boolean) => {
    if (sortBy === 'cost') {
      return (applicationA: Application, applicationB: Application) => {
        if (parseInt(applicationA.cost) === parseInt(applicationB.cost))
          return 0;

        return (
          (parseInt(applicationA.cost) > parseInt(applicationB.cost) ? 1 : -1) *
          (sortAsc ? 1 : -1)
        );
      };
    }

    if (sortBy === 'applicationDeadlineDate') {
      return (applicationA: Application, applicationB: Application) => {
        if (
          applicationA.applicationDeadlineDate ===
          applicationB.applicationDeadlineDate
        )
          return 0;

        return (
          (applicationA.applicationDeadlineDate >
          applicationB.applicationDeadlineDate
            ? 1
            : -1) * (sortAsc ? 1 : -1)
        );
      };
    }
  };

  const filteredApplications = APPLICATIONS.filter(filterFunction).sort(
    sortingFunction(sortBy, sortAsc)
  );

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

  const rows = filteredApplications
    .map((application) => (
      <Table.Tr key={application.cost} className={css.tableRow}>
        <Table.Td>{application.name}</Table.Td>
        <Table.Td>{application.university}</Table.Td>
        <Table.Td>{application.country}</Table.Td>
        <Table.Td>{application.duration}</Table.Td>
        <Table.Td>{application.cost}</Table.Td>
        <Table.Td>
          {application.applicationDeadlineDate.toDateString()}
        </Table.Td>
        <Table.Td>{application.language}</Table.Td>
      </Table.Tr>
    ))
    .slice((currentPage - 1) * 10, currentPage * 10);

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
          onChange={setDurationFilterValue}
        />
        <Select
          placeholder="language"
          data={findFilterValuesFromList(APPLICATIONS, 'language').sort()}
          value={filter.language}
          onChange={setLanguageFilterValue}
        />
        {/* NOTE: Way this works is not ideal but implemented like this due to time constraint
          would be better to have it work as a range filter, i.e. between certain values. Currently is just a list of costs present in list items */}
        <Select
          placeholder="cost"
          data={findFilterValuesFromList(APPLICATIONS, 'cost').sort((a, b) => {
            return parseInt(a) > parseInt(b) ? 1 : -1;
          })}
          value={filter.cost}
          onChange={setCostFilterValue}
        />
      </div>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>University</Table.Th>
            <Table.Th>Country</Table.Th>
            <Table.Th>Duration</Table.Th>
            <Table.Th
              onClick={() => {
                setSortBy('cost');

                setSortAsc(!sortAsc);
              }}
            >
              Cost
            </Table.Th>
            <Table.Th
              onClick={() => {
                setSortBy('applicationDeadlineDate');

                setSortAsc(!sortAsc);
              }}
            >
              Application Deadline Date
            </Table.Th>
            <Table.Th>Language</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Pagination
        className={css.pagination}
        value={currentPage}
        onChange={setCurrentPage}
        total={Math.ceil(filteredApplications.length / 10)}
      />
    </Page>
  );
};
