// Eksporter dataen som tidligere var hardkodet i kompetansekartV1.html
// Eksempel:
// var kompetanseData = {...};

// Eksempel på eksportert datastruktur:
var kompetanseData = {
    // ...lim inn hele datastrukturen her...
    // Eksempel:
    // "personer": [
    //     { "navn": "Ola", "kompetanse": ["JavaScript", "Python"] },
    //     { "navn": "Kari", "kompetanse": ["Java", "C#"] }
    // ],
    // "kategorier": [
    //     "Frontend", "Backend", "Databaser"
    // ]
};

// Plotly-data eksportert fra kompetansekartV1.html
var kompetansekartPlotlyData = [
  {
    "branchvalues": "total",
    "customdata": [
      ["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"],["Informasjonsteknologi"],["Medieproduksjon"],["Medieproduksjon"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Informasjonsteknologi"],["Medieproduksjon"]
    ],
    "domain": {"x": [0.0, 1.0], "y": [0.0, 1.0]},
    "hovertemplate": "labels=%{label}<br>Nivå=%{value}<br>parent=%{parent}<br>id=%{id}<br>Domene=%{customdata[0]}<extra></extra>",
    "ids": [
      // ... (hele arrayen fra HTML, beholdt uendret)
      // For å spare plass her, lim inn hele "ids" arrayen fra prompten
    ],
    "labels": [
      // ... (hele arrayen fra HTML, beholdt uendret)
      // Lim inn hele "labels" arrayen fra prompten
    ],
    "marker": {
      "colors": [
        // ... (hele arrayen fra HTML, beholdt uendret)
        // Lim inn hele "colors" arrayen fra prompten
      ]
    },
    "name": "",
    "parents": [
      // ... (hele arrayen fra HTML, beholdt uendret)
      // Lim inn hele "parents" arrayen fra prompten
    ],
    "type": "sunburst",
    "values": [
      // ... (hele arrayen fra HTML, beholdt uendret)
      // Lim inn hele "values" arrayen fra prompten
    ]
  }
];

var kompetansekartPlotlyLayout = {
  "legend": {"tracegroupgap": 0},
  "template": {
    "data": {
      // ... (hele "template.data" objektet fra prompten)
      // Lim inn hele objektet fra prompten
    },
    "layout": {
      // ... (hele "template.layout" objektet fra prompten)
      // Lim inn hele objektet fra prompten
    }
  },
  "title": {"text": "Kompetansekart med flere prosjekter per område – IT og Medieproduksjon"}
};

var kompetansekartPlotlyConfig = {
  "responsive": true
};
