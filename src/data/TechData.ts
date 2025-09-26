import { Technology } from '@models/Technology.model';

const TechMockObjectData: any = {
  angular: {
    name: 'Angular',
    description: 'A platform for building mobile and desktop web applications.',
    url: 'https://angular.dev/',
    logo_path: 'angular.svg',
    color_primary: '#DD0031',
    color_secondary: '#C3002F',
    versions: [
      { name: '1.x', description: 'https://angularjs.org/', date: '2010' },
      { name: '2.x', description: 'https://angular.io/', date: '2016' },
      { name: '4.x', description: 'https://angular.io/', date: '2017' },
      { name: '5.x', description: 'https://angular.io/', date: '2017' },
      { name: '6.x', description: 'https://angular.io/', date: '2018' },
      { name: '7.x', description: 'https://angular.io/', date: '2018' },
      { name: '8.x', description: 'https://angular.io/', date: '2019' },
      { name: '9.x', description: 'https://angular.io/', date: '2020' },
      { name: '10.x', description: 'https://angular.io/', date: '2020' },
      { name: '11.x', description: 'https://angular.io/', date: '2020' },
      { name: '12.x', description: 'https://angular.io/', date: '2021' },
      { name: '13.x', description: 'https://angular.io/', date: '2021' },
      { name: '14.x', description: 'https://angular.io/', date: '2022' },
      { name: '15.x', description: 'https://angular.io/', date: '2022' },
    ],
  },
  nodejs: {
    name: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org/',
    logo_path: 'nodejs.svg',
    color_primary: '#339933',
    color_secondary: '#333333',
    versions: [
      { name: '10.x', description: 'https://nodejs.org/en/blog/release/v10.0.0/', date: '2018' },
      { name: '12.x', description: 'https://nodejs.org/en/blog/release/v12.0.0/', date: '2019' },
      { name: '14.x', description: 'https://nodejs.org/en/blog/release/v14.0.0/', date: '2020' },
      { name: '16.x', description: 'https://nodejs.org/en/blog/release/v16.0.0/', date: '2021' },
      { name: '18.x', description: 'https://nodejs.org/en/blog/release/v18.0.0/', date: '2022' },
      { name: '20.x', description: 'https://nodejs.org/en/blog/release/v20.0.0/', date: '2023' },
    ],
  },
  react: {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
    logo_path: 'react.svg',
    color_primary: '#61DAFB',
    color_secondary: '#20232A',
    versions: [
      { name: '15.x', description: 'https://reactjs.org/blog/2016/03/07/react-v15.html', date: '2016' },
      { name: '16.x', description: 'https://reactjs.org/blog/2017/09/26/react-v16.0.html', date: '2017' },
      { name: '17.x', description: 'https://reactjs.org/blog/2020/10/20/react-v17.html', date: '2020' },
      { name: '18.x', description: 'https://reactjs.org/blog/2022/03/29/react-v18.html', date: '2022' },
    ],
  },
  vue: {
    name: 'Vue.js',
    description: 'The Progressive JavaScript Framework.',
    url: 'https://vuejs.org/',
    logo_path: 'vue.svg',
    color_primary: '#4FC08D',
    color_secondary: '#35495E',
    versions: [
      { name: '1.x', description: 'https://vuejs.org/v1/guide/', date: '2014' },
      { name: '2.x', description: 'https://vuejs.org/v2/guide/', date: '2016' },
      { name: '3.x', description: 'https://vuejs.org/guide/introduction.html', date: '2020' },
    ],
  },
};

const TechMockData: Technology[] = [
  TechMockObjectData.angular,
  TechMockObjectData.nodejs,
  TechMockObjectData.react,
  TechMockObjectData.vue,
];

export default TechMockData;
