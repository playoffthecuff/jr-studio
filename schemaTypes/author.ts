import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Автор',
  type: 'document',
  fields: [
    defineField({
      name: 'settings',
      title: 'Настройки',
      type: 'object',
      fields: [
        defineField({
          name: 'aboutVisible',
          title: 'Отображать основную информацию на сайте',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'timelineVisible',
          title: 'Отображать временную линию на сайте',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'mentionsVisible',
          title: 'Отображать упоминания на сайте',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),

    defineField({
      name: 'mainInfo',
      title: 'Основная информация',
      type: 'object',
      fields: [
        defineField({
          name: 'authorName',
          title: 'Имя',
          type: 'i18n.string',
          validation: r => r.required(),
        }),
        defineField({
          name: 'image',
          title: 'Фото',
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['lqip']
          },
        }),
        defineField({
          name: 'annotation',
          title: 'Аннотация',
          type: 'object',
          fields: [
            defineField({
              name: 'ru',
              title: 'на русском',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                }),
              ],
            }),
            defineField({
              name: 'en',
              title: 'на английском',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'timeline',
      title: 'Временная линия',
      type: 'object',
      fields: [
        defineField({
          name: 'settings',
          title: 'Настройки',
          type: 'object',
          fields: [
            defineField({
              name: 'monthVisible',
              title: 'Отображать месяц даты ( ГГГГ.(Месяц) )',
              type: 'boolean',
              initialValue: true,
            }),
          ],
        }),
        defineField({
          name: 'stages',
          title: 'События',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'stage',
              title: 'Событие',
              type: 'object',
              preview: {
                select: {
                  title: 'heading.ru',
                },
              },
              fields: [
                defineField({
                  name: 'heading',
                  type: 'i18n.string',
                  title: 'Заголовок',
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: 'startDate',
                  type: 'date',
                  title: 'Дата начала',
                  validation: (r) => r.required(),
                  options: {
                    dateFormat: 'YYYY-MM'
                  },
                }),
                defineField({
                  name: 'endDate',
                  type: 'date',
                  title: 'Дата окончания',
                  options: {
                    dateFormat: 'YYYY-MM'
                  },
                  validation: (Rule) => Rule.min(Rule.valueOfField('startDate')),
                }),
                defineField({
                  name: 'content',
                  title: 'Содержание',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'ru',
                      title: 'на русском',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                        },
                      ],
                    }),
                    defineField({
                      name: 'en',
                      title: 'на английском',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                        },
                      ],
                    }),
                  ]
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'mentions',
      title: 'Упоминания',
      type: 'array',
      of: [
        defineField({
          name: 'mention',
          title: 'Упоминание',
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Цитата',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'source',
              title: 'Источник',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Ссылка на источник',
              type: 'url',
              validation: (r) => r.uri({scheme: ['http', 'https']}),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainInfo.authorName.ru',
      media: 'mainInfo.image',
    },
  },
})


