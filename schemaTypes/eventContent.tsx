import {ReactElement} from 'react'
import {defineArrayMember, defineType} from 'sanity'

const MarkedIcon = () => <span style={{fontWeight: 'bold'}}>M</span>

const MarkedDecorator = ({children}: {children: ReactElement}) => (
  <span style={{backgroundColor: 'yellow', color: 'black'}}>{children}</span>
)

export default defineType({
  title: 'Контент события',
  name: 'eventContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Блок',
      type: 'block',
      styles: [
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Текст', value: 'normal'},
        {title: 'Цитата', value: 'blockquote'},
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
  ],
})
