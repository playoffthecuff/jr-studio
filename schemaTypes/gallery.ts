import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  type: 'document',
  title: 'Галерея',
  preview: {
    select: {
      title: 'title.ru',
      media: 'image',
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'i18n.string',
      title: 'Заголовок',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Адрес страницы сайта',
      options: {
        source: 'title.en',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visible',
      type: 'boolean',
      title: 'Отображать изображение на сайте',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Изображение',
      options: {
        metadata: ['lqip'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lightColor',
      title: 'Цвет фона для светлой темы',
      description: 'Опциональная возможность определить цвет фона страницы',
      type: 'color',
    }),
    defineField({
      name: 'darkColor',
      title: 'Цвет фона для тёмной темы',
      description: 'Опциональная возможность определить цвет фона страницы',
      type: 'color',
      hidden: ({document}) => !document?.lightColor,
      validation: (r) =>
        r.custom((n, c) => {
          return !c.document?.lightColor || (c.document?.lightColor && n)
            ? true
            : 'определите также цвет и для тёмной темы или удалите для светлой'
        }),
    }),
    defineField({
      name: 'description',
      type: 'i18n.string',
      title: 'Описание',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: () => ({publishedAt: new Date().toISOString(), visible: true}),
})
