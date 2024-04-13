import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "8dijgetf",
  dataset: 'production',
  apiVersion: 'v1',
  token: "skw28nzxfs5SD3IQcHQxp4gPQHtT6hgZySOewiofCXyWRMXD2Q6O8Hb7mlfhKNb8gySyYmsVIuDUPuySgigRH0Ozgolq3ELOTKW7LbM7pGWlys7HsUk14dLEW2ZpyRyDW088yvD60ZFNGVhBRxpeociQ45FHfqDYfh9lRDWOE9JyuNI0xTgP",
  useCdn: false,
})
