import type { CollectionConfig } from 'payload'

import { slugField } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'titleEn',
      type: 'text',
    },
    slugField({
      position: undefined,
    }),
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'domain',
      type: 'select',
      required: true,
      index: true,
      options: [
        {
          label: 'Stroller',
          value: 'stroller',
        },
        {
          label: 'Scooter',
          value: 'scooter',
        },
        {
          label: 'Bike',
          value: 'bike',
        },
      ],
    },
    {
      name: 'level',
      type: 'select',
      required: true,
      index: true,
      options: [
        {
          label: 'L2',
          value: 'L2',
        },
        {
          label: 'L3',
          value: 'L3',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'complianceNote',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'isLeaf',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },
  ],
}
