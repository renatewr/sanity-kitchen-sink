export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fae35dba0d584704a4337d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oxrqbmdp',
                  apiId: '5d0955af-f464-4326-a67c-fbfdbe9dbd0d'
                },
                {
                  buildHookId: '5fae35dc5ece4870211bf6a5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mcizkq9v',
                  apiId: '90f66093-4ccc-4d6b-b04a-49d445ff343f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/renatewr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mcizkq9v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
