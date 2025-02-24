import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Блог',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
      media: 'titleImage.image',
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
      title: 'Адрес страницы поста',
      options: {
        source: 'title.en',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visible',
      title: 'Отображать статью на сайте',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'titleImage',
      type: 'reference',
      to: {type: 'galleryImage'},
      title: 'Изображение заголовка',
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
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Контент',
      type: 'object',
      fields: [
        defineField({
          name: 'ru',
          title: 'на русском',
          type: 'blogContent',
        }),
        defineField({
          name: 'en',
          title: 'на английском',
          type: 'blogContent',
        }),
      ],
    }),
  ],
})
