const isUniqueAcrossSameTypeDocs = async (slug: any, context: any) => {
  const { getClient } = context
  const client = getClient({ apiVersion: '2024-02-27' })

  const docId = context.document?._id
  const publishedId = docId?.startsWith('drafts.') ? docId.replace('drafts.', '') : docId
  const draftId = `drafts.${publishedId}`

  const exists = await client.fetch(
    `count(*[_type == $type && slug.current == $slug && !(_id in [$draftId, $publishedId])])`,
    {
      type: context.document?._type,
      slug,
      draftId,
      publishedId,
    }
  )

  return exists === 0;
}

export default isUniqueAcrossSameTypeDocs;