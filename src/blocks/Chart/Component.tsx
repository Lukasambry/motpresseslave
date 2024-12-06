"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import React from 'react'

type ChartBlockProps = {
  chartData: { fields: { fieldName: string, value: number, label: string, color: string }[] }[]
  chartConfig: {
    color: string
  }
  showTooltip: boolean
  showLegend: boolean
  xAxisLegend?: string
  yAxisLegend?: string
}

export const ChartBlock: React.FC<ChartBlockProps> = ({ chartData, chartConfig, showTooltip, showLegend, xAxisLegend, yAxisLegend }) => {
  const formattedData = chartData.map(datum => {
    const formattedDatum: { [key: string]: number } = {}
    datum.fields.forEach(field => {
      formattedDatum[field.fieldName] = field.value
    })
    return formattedDatum
  })

  const allFieldNames = Array.from(new Set(chartData.flatMap(datum => datum.fields.map(field => field.fieldName))))

  return (
    //@ts-ignore
    <ChartContainer className="min-h-[200px] w-full" config={chartConfig}>
      <BarChart accessibilityLayer data={formattedData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="fieldName"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          label={showLegend ? { value: xAxisLegend, position: 'insideBottom', offset: -5 } : undefined}
        />
        <YAxis
          label={showLegend ? { value: yAxisLegend, angle: -90, position: 'insideLeft' } : undefined}
        />
        {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
        {showLegend && <ChartLegend content={<ChartLegendContent />} />}
        {allFieldNames.map((fieldName, index) => {
          console.log('fieldName', fieldName, index)
          console.log('barcolor', chartConfig[index]?.color)
          return (
            /*<Bar key={index} dataKey={fieldName} fill={chartData[0].fields[index]?.color || '#000'} radius={4} />*/
          <Bar key={index} dataKey={fieldName} fill={chartConfig[index]?.color || '#000'} radius={4} />
          )
        })}
      </BarChart>
    </ChartContainer>
  )
}
