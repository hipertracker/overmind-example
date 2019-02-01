import { Post } from './state'

export const jsonPlaceholder = {
  async getPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
  }
}
