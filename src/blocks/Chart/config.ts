import type { Block } from 'payload'

export const Chart: Block = {
  slug: 'chartBlock',
  interfaceName: 'ChartBlock',
  fields: [
    {
      name: 'chartConfig',
      type: 'array',
      fields: [
        {
          name: 'color',
          type: 'text',
          required: true,
          label: 'Color',
        },
      ],
    },
    {
      name: 'chartData',
      type: 'array',
      fields: [
        {
          name: 'fields',
          type: 'array',
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              required: true,
              label: 'Field Name',
            },
            {
              name: 'value',
              type: 'number',
              required: true,
              label: 'Value',
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
          ],
        },
      ],
    },
    {
      name: 'showTooltip',
      type: 'checkbox',
      label: 'Show Tooltip',
    },
    {
      name: 'showLegend',
      type: 'checkbox',
      label: 'Show Legend',
    },
    {
      name: 'xAxisLegend',
      type: 'text',
      label: 'X Axis Legend',
      admin: {
        condition: (_, siblingData) => siblingData.showLegend,
      },
    },
    {
      name: 'yAxisLegend',
      type: 'text',
      label: 'Y Axis Legend',
      admin: {
        condition: (_, siblingData) => siblingData.showLegend,
      },
    },
  ],
}
