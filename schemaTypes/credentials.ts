import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credentials',
  type: 'document',
  title: 'Контакты',
  groups: [
    {
      name: 'email',
      title: 'Электронная почта',
    },
    {
      name: 'phone',
      title: 'Телефон',
    },
    {
      name: 'social',
      title: 'Социальные сети',
    },
    {
      name: 'rss',
      title: 'RSS каналы',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Наименование',
      description: 'Документ в системе - выбирается произвольно для удобства',
    }),
    defineField({
      name: 'social',
      type: 'array',
      title: 'Социальные сети',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'label.ru',
              media: 'icon',
            }
          },
          fields: [
            {
              title: 'Наименование',
              name: 'label',
              type: 'i18n.string',
            },
            {
              title: 'Отображать ссылку на сайте',
              name: 'visibility',
              type: 'boolean',
              initialValue: true,
            },
            {
              title: 'Ссылка',
              name: 'link',
              type: 'url',
              validation: Rule => Rule.required(),
            },
            {
              title: 'Иконка',
              name: 'icon',
              type: 'image',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'email',
      type: 'object',
      title: 'Электронная почта',
      fieldsets: [{name: 'email', title: 'Электронная почта'}],
      group: 'email',
      fields: [
        {
          title: 'Адрес',
          name: 'email',
          type: 'email',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Отображать почту на сайте',
          name: 'visibility',
          type: 'boolean',
          initialValue: true,
        },
        {
          title: 'Иконка',
          name: 'icon',
          type: 'image',
          validation: Rule => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'phone',
      type: 'object',
      title: 'Телефон',
      fieldsets: [{name: 'phone', title: 'Телефон'}],
      group: 'phone',
      fields: [
        {
          title: 'Номер',
          name: 'phone',
          type: 'string',
          description: 'в формате +7(XXX)XXX-XXXX',
          validation: (Rule) => Rule.regex(/^\+7\(\d{3}\)\d{3}-\d{4}$/),
        },
        {
          title: 'Отображать телефон на сайте',
          name: 'visibility',
          type: 'boolean',
          initialValue: true,
        },
        {
          title: 'Иконка',
          name: 'icon',
          type: 'image',
          validation: Rule => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'rss',
      type: 'object',
      title: 'RSS канал',
      fieldsets: [{name: 'rss', title: 'RSS канал'}],
      group: 'rss',
      fields: [
        {
          title: 'Ссылка на канал на русском',
          name: 'linkRu',
          type: 'url',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Ссылка на канал на английском',
          name: 'linkEn',
          type: 'url',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Отображать ссылку на сайте',
          name: 'visibility',
          type: 'boolean',
          initialValue: true,
        },
        {
          title: 'Иконка',
          name: 'icon',
          type: 'image',
          validation: Rule => Rule.required(),
        },
      ],
    }),
  ],
})
