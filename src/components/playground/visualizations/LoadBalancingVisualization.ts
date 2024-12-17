import * as d3 from 'd3'

export function createLoadBalancingVisualization(container: HTMLElement) {
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

  const width = container.clientWidth
  const height = container.clientHeight

  // Create components
  const loadBalancer = { x: width * 0.3, y: height * 0.5, label: 'Load Balancer' }
  const servers = [
    { id: 'server1', x: width * 0.7, y: height * 0.3, label: 'Server 1', load: 30 },
    { id: 'server2', x: width * 0.7, y: height * 0.5, label: 'Server 2', load: 60 },
    { id: 'server3', x: width * 0.7, y: height * 0.7, label: 'Server 3', load: 45 }
  ]

  // Draw load balancer
  const balancerGroup = svg.append('g')
    .attr('transform', `translate(${loadBalancer.x},${loadBalancer.y})`)

  balancerGroup.append('rect')
    .attr('x', -40)
    .attr('y', -60)
    .attr('width', 80)
    .attr('height', 120)
    .attr('rx', 8)
    .style('fill', '#4F46E5')
    .style('stroke', '#312E81')
    .style('stroke-width', 2)

  balancerGroup.append('text')
    .attr('y', 80)
    .attr('text-anchor', 'middle')
    .text(loadBalancer.label)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  // Draw servers
  const serverGroups = svg.selectAll('.server')
    .data(servers)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x},${d.y})`)

  serverGroups.append('rect')
    .attr('x', -40)
    .attr('y', -30)
    .attr('width', 80)
    .attr('height', 60)
    .attr('rx', 8)
    .style('fill', '#10B981')
    .style('stroke', '#065F46')
    .style('stroke-width', 2)

  // Add load indicators
  serverGroups.append('rect')
    .attr('x', -30)
    .attr('y', -20)
    .attr('width', d => (60 * d.load) / 100)
    .attr('height', 10)
    .style('fill', d => d.load > 80 ? '#EF4444' : '#3B82F6')

  serverGroups.append('text')
    .attr('y', 50)
    .attr('text-anchor', 'middle')
    .text(d => `${d.label} (${d.load}%)`)
    .style('fill', '#1F2937')
    .style('font-weight', 'bold')

  function animateRequest() {
    const request = svg.append('circle')
      .attr('r', 6)
      .style('fill', '#EC4899')
      .attr('cx', width * 0.1)
      .attr('cy', height * 0.5)

    const targetServer = servers[Math.floor(Math.random() * servers.length)]

    request.transition()
      .duration(1000)
      .attr('cx', loadBalancer.x)
      .transition()
      .duration(1000)
      .attr('cx', targetServer.x)
      .attr('cy', targetServer.y)
      .on('end', () => {
        request.transition()
          .duration(500)
          .style('opacity', 0)
          .remove()
      })
  }

  setInterval(animateRequest, 2000)
  animateRequest()
}