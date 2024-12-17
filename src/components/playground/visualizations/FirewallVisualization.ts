import * as d3 from 'd3'

export function createFirewallVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  // Create network zones
  const zones = [
    { id: 'internet', x: width * 0.1, y: height * 0.5, label: 'Internet' },
    { id: 'firewall', x: width * 0.5, y: height * 0.5, label: 'Firewall' },
    { id: 'internal', x: width * 0.9, y: height * 0.5, label: 'Internal Network' }
  ]

  // Draw zones
  const zoneGroups = svg.selectAll('.zone')
    .data(zones)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  // Draw firewall
  const firewallGroup = zoneGroups.filter(d => d.id === 'firewall')
  
  firewallGroup.append('rect')
    .attr('x', -40)
    .attr('y', -100)
    .attr('width', 80)
    .attr('height', 200)
    .attr('rx', 8)
    .style('fill', '#EF4444')
    .style('stroke', '#991B1B')
    .style('stroke-width', 2)

  // Draw other zones
  const otherZones = zoneGroups.filter(d => d.id !== 'firewall')
  
  otherZones.append('circle')
    .attr('r', 40)
    .style('fill', '#4F46E5')
    .style('stroke', '#312E81')
    .style('stroke-width', 2)

  zoneGroups.append('text')
    .attr('y', 60)
    .attr('text-anchor', 'middle')
    .text(d => d.label)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  function animateTraffic() {
    const packets = [
      { type: 'allowed', color: '#10B981' },
      { type: 'blocked', color: '#EF4444' }
    ]

    packets.forEach((packet, index) => {
      const circle = svg.append('circle')
        .attr('r', 8)
        .style('fill', packet.color)
        .style('stroke', '#000')
        .style('stroke-width', 2)
        .attr('cx', width * 0.1)
        .attr('cy', height * (0.4 + index * 0.2))

      const targetX = packet.type === 'allowed' ? width * 0.9 : width * 0.5
      
      circle.transition()
        .duration(2000)
        .attr('cx', targetX)
        .on('end', () => {
          if (packet.type === 'blocked') {
            circle.transition()
              .duration(500)
              .style('opacity', 0)
              .remove()
          }
        })
    })
  }

  // Add rule labels
  const rules = [
    'Allow HTTP/HTTPS',
    'Block Telnet',
    'Allow DNS',
    'Block Unknown'
  ]

  svg.selectAll('.rule')
    .data(rules)
    .enter()
    .append('text')
    .attr('x', width * 0.5)
    .attr('y', (d, i) => height * 0.2 + i * 20)
    .attr('text-anchor', 'middle')
    .text(d => d)
    .style('font-size', '12px')
    .style('fill', '#4B5563')

  setInterval(animateTraffic, 3000)
  animateTraffic()
}