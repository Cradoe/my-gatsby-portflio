module.exports = {
  SiteTitle: 'Ismail',
  Sitelogo: '#',
  SiteLogoText: 'Ismail',
  SiteAuthor: 'Ismail Obadimu',
  SiteDescription: 'Software Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    github: 'https://github.com/Cradoe',
    linkedin: 'https://www.linkedin.com/in/ismailobadimu/',
  },
  SiteAddress: {
    city: 'Ilaro',
    region: 'Ogun State',
    country: 'Nigeria',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'me@ismailobadimu.com',
    phone: '08149617083',
  },
  SiteCopyright: '2021',
};
