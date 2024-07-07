// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

import pages from './data/pages.json';
 
// type AddCommentParams = {
//   postId: string
// }
 
// type AddCommentRequestBody = {
//   author: string
//   comment: string
// }
 
// type AddCommentResponseBody = {
//   commentUrl: string
// }

const postParams = {"structuredQuery":{"from":[{"collectionId":"pages"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]}}


const docsURI = decodeURI(new URL(encodeURI(`/v1/projects/bm-github-io/databases/\\('default'\\)/documents:runQuery`), 'https://firestore.googleapis.com').href);
console.log(docsURI);
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/user', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),

  http.post(docsURI, async({ params, request }) => {
    return HttpResponse.json(pages);
  }),
  http.get('https://firestore.googleapis.com/v1/projects/bm-github-io/databases/(default)/documents:runQuery', async({ params, request }) => {
    console.log('params', params);
    console.log('request', request);
  }),
//   http.post<
//   AddCommentParams,
//   AddCommentRequestBody,
//   AddCommentResponseBody,
//   '/post/:postId'
// >('/post/:postId', async ({ params, request }) => {
//   // Request path parameters are narrowed to the
//   // provided "AddCommentParams" type.
//   const { postId } = params
 
//   // The request body JSON is narrowed to the
//   // provided "AddCommentRequestBody" type.
//   const commentData = await request.json()
//   commentData.comment
 
//   // The JSON response body type must satisfy
//   // the "AddCommentResponseBody" type.
//   return HttpResponse.json({
//     commentUrl: `/post/${postId}?commentId=1`,
//   })
// })
];
