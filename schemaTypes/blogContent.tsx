import {defineType, defineArrayMember, defineField} from 'sanity'
import React, {ReactElement} from 'react'

const HiddenStyle = ({children}: {children: ReactElement}) => (
  <span style={{opacity: 0.5}}>{children}</span>
)

const MarkedIcon = () => <span style={{fontWeight: 'bold'}}>M</span>

const MarkedDecorator = ({children}: {children: ReactElement}) => (
  <span style={{backgroundColor: 'yellow', color: 'black'}}>{children}</span>
)

export default defineType({
  title: 'Контент блога',
  name: 'blogContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Блок',
      type: 'block',
      styles: [
        {title: 'Текст', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'Цитата', value: 'blockquote'},
        {title: 'Скрытый', value: 'blockComment', component: HiddenStyle},
      ],
      lists: [
        {title: 'Ненумерованный', value: 'bullet'},
        {title: 'Нумерованный', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Жирный', value: 'strong'},
          {title: 'Наклонный', value: 'em'},
          {title: 'Выделенный', value: 'marked', icon: MarkedIcon, component: MarkedDecorator},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineField({
      name: 'ref',
      title: 'Изображение',
      type: 'reference',
      to: {type: 'galleryImage'},
    }),
  ],
})
