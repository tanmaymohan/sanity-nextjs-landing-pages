export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '604757777d6b57d18ab01f5e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zryadjy8',
                  apiId: '52201385-af82-425f-a9e4-18f3f2580268'
                },
                {
                  buildHookId: '604757778bd416afa7a284cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zojcn12h',
                  apiId: '96247227-e6a8-4d5e-a1eb-032efeb3a840'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tanmaymohan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zojcn12h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
