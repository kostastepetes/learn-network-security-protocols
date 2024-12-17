import * as d3 from 'd3'

export function createHttpRestVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  const methods = [
    { name: 'GET', color: '#10B981', description: 'Retrieve resource' },
    { name: 'POST', color: '#3B82F6', description: 'Create resource' },
    { name: 'PUT', color: '#F59E0B', description: 'Update resource' },
    { name: 'DELETE', color: '#EF4444', description: 'Remove resource' }
  ]

  const client = { x: width * 0.2, y: height * 0.5 }
  const server = { x: width * 0.8, y: height * 0.5 }

  // Draw client and server
  const nodes = [client, server]
  const labels = ['Client', 'Server']

  svg.selectAll('.node')
    .data(nodes)
    .enter()
    .append('rect')
    .attr('x', d => d.x - 40)
    .attr('y', d => d.y - 40)
    .attr('width', 80)
    .attr('height', 80)
    .attr('rx', 8)
    .style('fill', '#4F46E5')

  svg.selectAll('.label')
    .data(nodes)
    .enter()
    .append('text')
    .attr('x', d => d.x)
    .attr('y', d => d.y + 60)
    .attr('text-anchor', 'middle')
    .style('fill', '#1F2937')
    .text((_, i) => labels[i])

  function animateRequest(method: typeof methods[0]) {
    // Request
    const request = svg.append('circle')
      .attr('r', 8)
      .style('fill', method.color)
      .attr('cx', client.x)
      .attr('cy', client.y)

    const requestLabel = svg.append('text')
      .attr('x', width * 0.5)
      .attr('y', height * 0.3)
      .attr('text-anchor', 'middle')
      .style('fill', method.color)
      .style('font-weight', 'bold')
      .text(`${method.name} Request`)
      .style('opacity', 0)

    request.transition()
      .duration(1000)
      .attr('cx', server.x)
      .attr('cy', server.y)

    requestLabel.transition()
      .duration(500)
      .style('opacity', 1)
      .transition()
      .delay(1500)
      .duration(500)
      .style('opacity', 0)

    // Response
    setTimeout(() => {
      const response = svg.append('circle')
        .attr('r', 8)
        .style('fill', '#10B981')
        .attr('cx', server.x)
        .attr('cy', server.y)

      const responseLabel = svg.append('text')
        .attr('x', width * 0.5)
        .attr('y', height * 0.7)
        .attr('text-anchor', 'middle')
        .style('fill', '#10B981')
        .style('font-weight', 'bold')
        .text('Response')
        .style('opacity', 0)

      response.transition()
        .duration(1000)
        .attr('cx', client.x)
        .attr('cy', client.y)
        .on('end', () => {
          response.remove()
          responseLabel.remove()
        })

      responseLabel.transition()
        .duration(500)
        .style('opacity', 1)
        .transition()
        .delay(500)
        .duration(500)
        .style('opacity', 0)
    }, 1500)
  }

  let currentMethod = 0
  setInterval(() => {
    animateRequest(methods[currentMethod])
    currentMethod = (currentMethod + 1) % methods.length
  }, 4000)
}