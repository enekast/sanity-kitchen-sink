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
                  buildHookId: '5f412f19560aaa16bce641fc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ghw7csdi',
                  apiId: 'eb07c3c3-1f76-463f-b9c6-cf92b128782a'
                },
                {
                  buildHookId: '5f412f19a293b72bff4a9b6f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-huewx9un',
                  apiId: '499e1fed-a25b-4441-b1c3-ee67145ac196'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enekast/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-huewx9un.netlify.app', category: 'apps'}
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
