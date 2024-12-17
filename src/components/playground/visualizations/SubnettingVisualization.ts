import * as d3 from 'd3'

export function createSubnettingVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  const network = '192.168.0.0/24'
  const subnets = [
    { name: 'Subnet 1', range: '192.168.0.0/26', hosts: '62 hosts' },
    { name: 'Subnet 2', range: '192.168.0.64/26', hosts: '62 hosts' },
    { name: 'Subnet 3', range: '192.168.0.128/26', hosts: '62 hosts' },
    { name: 'Subnet 4', range: '192.168.0.192/26', hosts: '62 hosts' }
  ]

  // Draw main network
  const mainNetwork = svg.append('rect')
    .attr('x', width * 0.1)
    .attr('y', height * 0.1)
    .attr('width', width * 0.8)
    .attr('height', height * 0.2)
    .attr('rx', 8)
    .style('fill', '#4F46E5')
    .style('opacity', 0.8)

  svg.append('text')
    .attr('x', width * 0.5)
    .attr('y', height * 0.2)
    .attr('text-anchor', 'middle')
    .style('fill', 'white')
    .style('font-weight', 'bold')
    .text(network)

  // Draw subnets
  const subnetHeight = height * 0.15
  const subnetSpacing = height * 0.05

  subnets.forEach((subnet, i) => {
    const y = height * 0.4 + i * (subnetHeight + subnetSpacing)

    svg.append('rect')
      .attr('x', width * 0.1)
      .attr('y', y)
      .attr('width', width * 0.8)
      .attr('height', subnetHeight)
      .attr('rx', 8)
      .style('fill', '#10B981')
      .style('opacity', 0.8)

    svg.append('text')
      .attr('x', width * 0.2)
      .attr('y', y + subnetHeight / 2)
      .style('fill', 'white')
      .text(subnet.name)

    svg.append('text')
      .attr('x', width * 0.5)
      .attr('y', y + subnetHeight / 2)
      .style('fill', 'white')
      .text(subnet.range)

    svg.append('text')
      .attr('x', width * 0.8)
      .attr('y', y + subnetHeight / 2)
      .style('fill', 'white')
      .text(subnet.hosts)
  })

  // Draw connecting lines
  subnets.forEach((_, i) => {
    const y1 = height * 0.3
    const y2 = height * 0.4 + i * (subnetHeight + subnetSpacing)

    svg.append('path')
      .attr('d', `M${width * 0.5},${y1} L${width * 0.5},${y2}`)
      .style('stroke', '#6B7280')
      .style('stroke-width', 2)
      .style('stroke-dasharray', '4,4')
  })
}