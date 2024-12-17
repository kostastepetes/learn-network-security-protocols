import * as d3 from 'd3'

export function createOsiModelVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  const layers = [
    { name: 'Application', color: '#4F46E5', examples: ['HTTP', 'FTP', 'SMTP'] },
    { name: 'Presentation', color: '#7C3AED', examples: ['SSL/TLS', 'JPEG', 'ASCII'] },
    { name: 'Session', color: '#9333EA', examples: ['NetBIOS', 'RPC'] },
    { name: 'Transport', color: '#C026D3', examples: ['TCP', 'UDP'] },
    { name: 'Network', color: '#DB2777', examples: ['IP', 'ICMP'] },
    { name: 'Data Link', color: '#E11D48', examples: ['Ethernet', 'Wi-Fi'] },
    { name: 'Physical', color: '#EF4444', examples: ['Cables', 'Fiber'] }
  ]

  const layerHeight = height / layers.length
  const layerPadding = 10

  // Draw layers
  const layerGroups = svg.selectAll('.layer')
    .data(layers)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0,${i * layerHeight})`)

  // Layer rectangles
  layerGroups.append('rect')
    .attr('x', width * 0.1)
    .attr('y', layerPadding)
    .attr('width', width * 0.8)
    .attr('height', layerHeight - layerPadding * 2)
    .attr('rx', 8)
    .style('fill', d => d.color)
    .style('opacity', 0.8)

  // Layer names
  layerGroups.append('text')
    .attr('x', width * 0.2)
    .attr('y', layerHeight / 2)
    .attr('dy', '0.35em')
    .style('fill', 'white')
    .style('font-weight', 'bold')
    .text(d => d.name)

  // Protocol examples
  layerGroups.append('text')
    .attr('x', width * 0.6)
    .attr('y', layerHeight / 2)
    .attr('dy', '0.35em')
    .style('fill', 'white')
    .style('opacity', 0.9)
    .text(d => d.examples.join(', '))

  // Animate data packet
  function animatePacket() {
    const packet = svg.append('circle')
      .attr('r', 8)
      .style('fill', '#10B981')
      .attr('cx', width * 0.5)
      .attr('cy', 0)

    function moveDown() {
      packet.transition()
        .duration(3000)
        .attr('cy', height)
        .on('end', moveUp)
    }

    function moveUp() {
      packet.transition()
        .duration(3000)
        .attr('cy', 0)
        .on('end', moveDown)
    }

    moveDown()
  }

  animatePacket()
}