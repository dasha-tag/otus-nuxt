import posts from "~/data/posts.json"

export default defineEventHandler((event) => {
    const id = event.context.params.id
    return posts.find(el => el.id === +id)
})
