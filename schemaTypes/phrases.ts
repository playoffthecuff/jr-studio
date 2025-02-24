import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'phrase',
  type: 'document',
  title: 'Фразы',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Наименование',
    }),
    defineField({
      type: 'i18n.string',
      name: 'phrase',
      title: 'Фраза',
    }),
  ],
})
