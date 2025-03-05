

const MARGIN = {
    LEFT: 100,
    RIGHT: 10,
    TOP: 10,
    BOTTOM: 10
}

const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 400 - MARGIN.BOTTOM - MARGIN.TOP;

d3.csv('./data/revenues.csv').then((data) => {
   
    const svg = d3.select('#chart-area').append('svg')
            .attr('width', WIDTH +  MARGIN.LEFT + MARGIN.RIGHT)
            .attr('height', HEIGHT + 300 + MARGIN.TOP + MARGIN.BOTTOM)

    const g =  svg.append('g')
               .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    const rects = g.selectAll('rect')
    .data(data)
    
    
    const x = d3.scaleBand()
              .domain(['Asia', 'Africa', 'North America', 'South America',
        'Antarctica', 'Europe', 'Australia'])
              .range([0, WIDTH])
              .paddingInner(0.2)
              .paddingOuter(0.3)

    const y = d3.scaleLinear()
              .domain([0, 600])
              .range([HEIGHT, 0])
    
    const xAxisCall = d3.axisBottom(x)

    g.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${HEIGHT})`)
    .call(xAxisCall)
     .selectAll('text')
     .attr('x', '-5')
     .attr('y', '20')
     .attr('text-anchor', 'end')
     .attr('transform', 'rotate(-40)')

    const yAxisCall = d3.axisLeft(y)

    g.append('g')
    .attr('class', 'x axis')
    .call(yAxisCall)

    rects.enter().append('rect')
    .attr('width', x.bandwidth)
    .attr('height', (d, i) => (HEIGHT - y((i + 1) * 60)))
    .attr('y', (d, i) => y((i + 1) * 60))
    .attr('x', (d, i) => i * 70)
    .attr('fill','gray')

    
    


})

