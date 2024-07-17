import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cea'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/gravitino-open-source',
    component: ComponentCreator('/blog/gravitino-open-source', '98c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/apache',
    component: ComponentCreator('/blog/tags/apache', '94c'),
    exact: true
  },
  {
    path: '/blog/tags/gravitino',
    component: ComponentCreator('/blog/tags/gravitino', 'dbf'),
    exact: true
  },
  {
    path: '/blog/tags/metadata',
    component: ComponentCreator('/blog/tags/metadata', 'f52'),
    exact: true
  },
  {
    path: '/blog/tags/multicloud',
    component: ComponentCreator('/blog/tags/multicloud', '869'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '9df'),
    exact: true
  },
  {
    path: '/contrib',
    component: ComponentCreator('/contrib', '061'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a21'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bf3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b9e'),
            routes: [
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', 'f1b'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
