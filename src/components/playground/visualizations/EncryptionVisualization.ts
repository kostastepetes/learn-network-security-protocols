import * as d3 from 'd3'

export function createEncryptionVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  const plaintext = "Hello, World!"
  const key = "SECRET_KEY"
  const ciphertext = "X@#$%^&*()"

  // Create visualization elements
  const elements = [
    { id: 'plaintext', x: width * 0.2, y: height * 0.3, text: plaintext, label: 'Plaintext' },
    { id: 'key', x: width * 0.5, y: height * 0.2, text: key, label: 'Encryption Key' },
    { id: 'ciphertext', x: width * 0.8, y: height * 0.3, text: ciphertext, label: 'Ciphertext' }
  ]

  // Draw elements
  const groups = svg.selectAll('g')
    .data(elements)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  // Add rectangles
  groups.append('rect')
    .attr('x', -60)
    .attr('y', -30)
    .attr('width', 120)
    .attr('height', 60)
    .attr('rx', 8)
    .style('fill', '#F3F4F6')
    .style('stroke', '#4F46E5')
    .style('stroke-width', 2)

  // Add labels
  groups.append('text')
    .attr('y', -40)
    .attr('text-anchor', 'middle')
    .text(d => d.label)
    .style('font-weight', 'bold')
    .style('fill', '#1F2937')

  // Add text content
  groups.append('text')
    .attr('text-anchor', 'middle')
    .text(d => d.text)
    .style('font-family', 'monospace')
    .style('fill', '#4B5563')

  // Add encryption process arrow
  const arrow = svg.append('path')
    .attr('d', `M${width * 0.3},${height * 0.3} L${width * 0.7},${height * 0.3}`)
    .style('stroke', '#10B981')
    .style('stroke-width', 2)
    .style('fill', 'none')
    .style('marker-end', 'url(#arrow)')

  // Add key arrow
  svg.append('path')
    .attr('d', `M${width * 0.5},${height * 0.25} L${width * 0.5},${height * 0.3}`)
    .style('stroke', '#3B82F6')
    .style('stroke-width', 2)
    .style('fill', 'none')
    .style('marker-end', 'url(#arrow)')

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

  // Animate encryption process
  const encryptionSteps = svg.append('text')
    .attr('x', width * 0.5)
    .attr('y', height * 0.4)
    .attr('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('fill', '#4B5563')

  const steps = [
    'Applying encryption algorithm...',
    'Converting to bytes...',
    'Applying key...',
    'Generating ciphertext...'
  ]

  function animateSteps(index = 0) {
    if (index >= steps.length) return

    encryptionSteps
      .text(steps[index])
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .style('opacity', 1)
      .transition()
      .duration(1000)
      .style('opacity', 0)
      .on('end', () => animateSteps(index + 1))
  }

  animateSteps()
}