import * as d3 from 'd3'

export function createTCPVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  // Create client and server nodes
  const nodes = [
    { id: 'client', x: width * 0.2, y: height * 0.5, label: 'Client' },
    { id: 'server', x: width * 0.8, y: height * 0.5, label: 'Server' }
  ]

  // Draw nodes
  const nodeGroups = svg.selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  nodeGroups.append('circle')
    .attr('r', 30)
    .style('fill', '#4F46E5')
    .style('stroke', '#312E81')
    .style('stroke-width', 2)

  nodeGroups.append('text')
    .attr('y', 45)
    .attr('text-anchor', 'middle')
    .text(d => d.label)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  // Animate TCP handshake
  function animateHandshake() {
    // SYN
    const syn = svg.append('path')
      .attr('d', createArrowPath(nodes[0], nodes[1]))
      .style('stroke', '#10B981')
      .style('stroke-width', 2)
      .style('fill', 'none')
      .style('marker-end', 'url(#arrow)')
      .style('opacity', 0)

    syn.transition()
      .duration(1000)
      .style('opacity', 1)
      .on('end', () => {
        // SYN-ACK
        const synAck = svg.append('path')
          .attr('d', createArrowPath(nodes[1], nodes[0]))
          .style('stroke', '#3B82F6')
          .style('stroke-width', 2)
          .style('fill', 'none')
          .style('marker-end', 'url(#arrow)')
          .style('opacity', 0)

        synAck.transition()
          .duration(1000)
          .style('opacity', 1)
          .on('end', () => {
            // ACK
            const ack = svg.append('path')
              .attr('d', createArrowPath(nodes[0], nodes[1]))
              .style('stroke', '#EC4899')
              .style('stroke-width', 2)
              .style('fill', 'none')
              .style('marker-end', 'url(#arrow)')
              .style('opacity', 0)

            ack.transition()
              .duration(1000)
              .style('opacity', 1)
          })
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

  // Add labels for each step
  const labels = [
    { text: 'SYN', x: width * 0.4, y: height * 0.3 },
    { text: 'SYN-ACK', x: width * 0.6, y: height * 0.7 },
    { text: 'ACK', x: width * 0.4, y: height * 0.5 }
  ]

  svg.selectAll('.label')
    .data(labels)
    .enter()
    .append('text')
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .text(d => d.text)
    .style('font-size', '14px')
    .style('font-weight', 'bold')
    .style('fill', '#4B5563')

  animateHandshake()
}

function createArrowPath(source: any, target: any) {
  const dx = target.x - source.x
  const dy = target.y - source.y
  const dr = Math.sqrt(dx * dx + dy * dy)
  return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`
}