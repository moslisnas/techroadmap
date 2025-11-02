export const mockTechnologies = [
  { id: 1, name: 'Angular', color_primary: '#dd0031', color_secondary: '#c3002f' },
  { id: 2, name: 'React', color_primary: '#61dafb', color_secondary: '#20232a' },
];

export const mockTechnologyWithVersions = {
  id: 1,
  name: 'Angular',
  description: 'A platform for building mobile and desktop web applications.',
  url: 'https://angular.dev/',
  logo_path: 'angular.svg',
  color_primary: '#DD0031',
  color_secondary: '#C3002F',
  versions: [
    {
      id: 101,
      name: 'Angular 2',
      description: 'Initial release',
      release_date: new Date('2016-09-14'),
    },
    {
      id: 102,
      name: 'Angular 6',
      description: 'Major update',
      release_date: new Date('2018-05-04'),
    },
  ],
};
