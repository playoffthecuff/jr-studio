import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {I18nFields} from 'sanity-plugin-i18n-fields'
import {colorInput} from '@sanity/color-input'
import {googleMapsInput} from '@sanity/google-maps-input'
import {media} from 'sanity-plugin-media'
import {removeBgAssetSourcePlugin} from 'sanity-plugin-asset-source-remove-bg'
import {ruKZLocale} from '@sanity/locale-ru-kz'
import { sanityComputedField } from 'sanity-plugin-computed-field';

export default defineConfig({
  name: 'default',
  title: 's4j',

  projectId: 'yu97ucqm',
  dataset: 'production',

  plugins: [
    structureTool(),
    media(),
    visionTool(),
    colorInput(),
    ruKZLocale({
      title: 'Russian (Kazakhstan)',
    }),
    I18nFields({
      ui: {
        position: 'bottom',
      },
      locales: [
        {code: 'ru', label: 'RU', title: 'Russian', default: true},
        {code: 'en', label: 'EN', title: 'English'},
      ],
    }),
    googleMapsInput({
      apiKey: 'AIzaSyDhQOFrwlb_5q_-Cv865-ElhayhYcvFEvc',
    }),
    removeBgAssetSourcePlugin({
      apiKey: 'fcbxsdcD5sPH9ag2pXPS5BY7',
      allowedUserRoles: ['administrator', 'editor'],
    }),
    sanityComputedField(),
  ],

  schema: {
    types: schemaTypes,
  },
})

