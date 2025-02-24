import {defineField, defineType} from 'sanity'

const HOUR = 3600000

export default defineType({
  type: 'document',
  name: 'event',
  title: 'События',
  fields: [
    defineField({
      name: 'name',
      title: 'Наименование',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'i18n.string',
      title: 'Заголовок',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'visible',
      title: 'Отображать событие на сайте',
      initialValue: true,
    }),
    defineField({
      name: 'date',
      title: 'Дата и время начала проведения',
      type: 'datetime',
      initialValue: new Date(~~(Date.now() / HOUR) * HOUR + HOUR).toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateEnd',
      title: 'Дата и время окончания',
      type: 'datetime',
      initialValue: new Date(~~(Date.now() / HOUR) * HOUR + 2 * HOUR).toISOString(),
      validation: (Rule) => Rule.required().min(Rule.valueOfField('date')),
    }),
    defineField({
      name: 'content',
      title: 'Контент',
      type: 'object',
      fields: [
        defineField({
          name: 'ru',
          title: 'на русском',
          type: 'eventContent',
        }),
        defineField({
          name: 'en',
          title: 'на английском',
          type: 'eventContent',
        }),
      ],
    }),
    defineField({
      name: 'place',
      title: 'Место проведения',
      type: 'geopoint',
    }),
  ],
})
