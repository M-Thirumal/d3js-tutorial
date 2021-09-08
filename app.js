const DUMMY_DATA = [
    {id: "1", value: 10, region: "India"},
    {id: "2", value: 20, region: "USA"},
    {id: "3", value: 30, region: "China"},
    {id: "4", value: 40, region: "Russia"},
];

d3.select('div')
    .selectAll('p')
    .data(DUMMY_DATA)
    .enter()
    .append('p')
    .text(dt => dt.region)
    