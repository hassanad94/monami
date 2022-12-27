import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'monami',

  projectId: 'j188mrk8',
  dataset: 'monami',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
