import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'favicon',
  type: 'document',
  title: 'Айдентика',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Название',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'use',
      type: 'boolean',
      title: 'Использовать на сайте',
      initialValue: true,
    }),
    defineField({
      name: 'ico',
      type: 'file',
      title: 'Иконка в формате .ico',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'svg',
      type: 'image',
      title: 'Иконка в формате .svg',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Логотип .svg',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'applePng',
      type: 'image',
      title: 'Иконка в формате apple-touch .png',
    }),
    defineField({
      name: 'png96',
      type: 'image',
      title: 'Иконка в формате 96x96 .png',
    }),
    defineField({
      name: 'png192',
      type: 'image',
      title: 'Иконка в формате 192x192 .png',
    }),
    defineField({
      name: 'png512',
      type: 'image',
      title: 'Иконка в формате 512x512 .png',
    }),
    defineField({
      name: 'manifest',
      type: 'file',
      title: 'Файл веб манифеста site.webmanifest',
    }),
  ],
})
