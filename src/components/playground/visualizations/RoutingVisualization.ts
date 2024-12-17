import * as d3 from 'd3'

export function createRoutingVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  // Create network topology
  const nodes = [
    { id: 'router1', x: width * 0.2, y: height * 0.5, label: 'Router 1' },
    { id: 'router2', x: width * 0.5, y: height * 0.3, label: 'Router 2' },
    { id: 'router3', x: width * 0.5, y: height * 0.7, label: 'Router 3' },
    { id: 'router4', x: width * 0.8, y: height * 0.5, label: 'Router 4' }
  ]

  const links = [
    { source: nodes[0], target: nodes[1], cost: 10 },
    { source: nodes[0], target: nodes[2], cost: 15 },
    { source: nodes[1], target: nodes[3], cost: 20 },
    { source: nodes[2], target: nodes[3], cost: 25 },
    { source: nodes[1], target: nodes[2], cost: 30 }
  ]

  // Draw links
  const linkElements = svg.selectAll('line')
    .data(links)
    .enter()
    .append('g')

  linkElements.append('line')
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
    .style('stroke', '#9CA3AF')
    .style('stroke-width', 2)

  // Add cost labels
  linkElements.append('text')
    .attr('x', d => (d.source.x + d.target.x) / 2)
    .attr('y', d => (d.source.y + d.target.y) / 2)
    .attr('dy', -5)
    .text(d => d.cost)
    .style('fill', '#4B5563')
    .style('font-size', '12px')
    .style('text-anchor', 'middle')

  // Draw routers
  const nodeGroups = svg.selectAll('.node')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  nodeGroups.append('rect')
    .attr('x', -25)
    .attr('y', -25)
    .attr('width', 50)
    .attr('height', 50)
    .attr('rx', 8)
    .style('fill', '#4F46E5')
    .style('stroke', '#312E81')
    .style('stroke-width', 2)

  nodeGroups.append('text')
    .attr('y', 35)
    .attr('text-anchor', 'middle')
    .text(d => d.label)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  // Animate packet routing
  function animatePacket() {
    const packet = svg.append('circle')
      .attr('r', 8)
      .style('fill', '#10B981')
      .style('stroke', '#065F46')
      .style('stroke-width', 2)

    const path = [nodes[0], nodes[1], nodes[3]] // Example path

    function transition(d: any, i: number) {
      if (i >= path.length - 1) return

      packet.transition()
        .duration(1000)
        .attr('cx', path[i + 1].x)
        .attr('cy', path[i + 1].y)
        .on('end', () => transition(d, i + 1))
    }

    packet
      .attr('cx', path[0].x)
      .attr('cy', path[0].y)
      .transition()
      .delay(500)
      .on('start', function() { transition(this, 0) })
  }

  animatePacket()
}