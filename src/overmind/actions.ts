import { Action } from 'overmind'

export const getPosts: Action = async ({ state, effects }) => {
  state.isLoadingPosts = true
  state.posts = await effects.jsonPlaceholder.getPosts()
  state.isLoadingPosts = false
}
