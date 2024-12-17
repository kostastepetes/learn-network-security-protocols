import * as d3 from 'd3'

export function createDHCPVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  // Create DHCP components
  const nodes = [
    { id: 'client', x: width * 0.2, y: height * 0.5, label: 'Client' },
    { id: 'dhcp', x: width * 0.8, y: height * 0.5, label: 'DHCP Server' }
  ]

  // Draw nodes
  const nodeGroups = svg.selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  nodeGroups.append('rect')
    .attr('x', -40)
    .attr('y', -30)
    .attr('width', 80)
    .attr('height', 60)
    .attr('rx', 8)
    .style('fill', '#4F46E5')
    .style('stroke', '#312E81')
    .style('stroke-width', 2)

  nodeGroups.append('text')
    .attr('y', 45)
    .attr('text-anchor', 'middle')
    .text(d => d.label)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  // DHCP messages
  const messages = [
    { text: 'DHCP Discover', y: height * 0.3 },
    { text: 'DHCP Offer', y: height * 0.4 },
    { text: 'DHCP Request', y: height * 0.6 },
    { text: 'DHCP Acknowledge', y: height * 0.7 }
  ]

  function animateDHCP() {
    messages.forEach((msg, index) => {
      const isRequest = index % 2 === 0
      const path = svg.append('path')
        .attr('d', createArrowPath(
          { x: isRequest ? width * 0.2 : width * 0.8, y: msg.y },
          { x: isRequest ? width * 0.8 : width * 0.2, y: msg.y }
        ))
        .style('stroke', '#10B981')
        .style('stroke-width', 2)
        .style('fill', 'none')
        .style('marker-end', 'url(#arrow)')
        .style('opacity', 0)

      svg.append('text')
        .attr('x', width * 0.5)
        .attr('y', msg.y - 10)
        .attr('text-anchor', 'middle')
        .text(msg.text)
        .style('font-size', '14px')
        .style('fill', '#4B5563')
        .style('opacity', 0)
        .transition()
        .delay(index * 1000)
        .duration(500)
        .style('opacity', 1)

      path.transition()
        .delay(index * 1000)
        .duration(1000)
        .style('opacity', 1)
    })
  }

  // Add arrow marker
  svg.append('defs').append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 8)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .style('fill', '#10B981')

  animateDHCP()
}

function createArrowPath(source: any, target: any) {
  return `M${source.x},${source.y} L${target.x},${target.y}`
}