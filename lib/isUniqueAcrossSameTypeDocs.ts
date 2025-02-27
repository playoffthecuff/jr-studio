const isUniqueAcrossSameTypeDocs = async (slug: any, context: any) => {
  const {getClient} = context
  const client = getClient({apiVersion: '2024-02-27'})

  const exists = await client.fetch(
    `count(*[_type == $type && slug.current == $slug && !(_id in [$draft, $published])])`,
    {
      type: context.document?._type,
      slug,
      draft: `drafts.${context.document?._id}`,
      published: context.document?._id,
    },
  )

  return exists === 0
}

export default isUniqueAcrossSameTypeDocs
