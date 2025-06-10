let config = {
    data: [],
    layout: {
      title: "Dynamisk Kompetansekart",
      margin: { t: 40, l: 0, r: 0, b: 0 }
    }
  };
  
  // Initial visning
  renderChart();
  
  // Last opp konfigurasjon
  document.getElementById("loadConfig").addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.onload = function (e) {
      config = JSON.parse(e.target.result);
      renderChart();
    };
    reader.readAsText(e.target.files[0]);
  });
  
  // Lagre konfigurasjon
  function saveConfig() {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "kompetansekart-konfig.json";
    link.click();
  }
  
  // Eksporter som bilde
  function exportToPNG() {
    Plotly.toImage(document.getElementById("chart"), { format: 'png' }).then(dataUrl => {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "kompetansekart.png";
      a.click();
    });
  }
  
  // Dynamisk admin-panel (veldig enkel versjon)
  function updateAdminPanel() {
    const adminPanel = document.getElementById("adminPanel");
    adminPanel.innerHTML = '<button onclick="addNewField()">Legg til nytt felt</button>';
  }
  
  // Legg til nytt felt
  function addNewField() {
    const label = prompt("Skriv inn navnet på feltet:");
    if (label) {
      config.data.push({
        type: "bar",
        x: [label],
        y: [1],
        name: label
      });
      renderChart();
    }
  }
  
  // Tegn diagram
  function renderChart() {
    Plotly.newPlot('chart', config.data, config.layout);
    updateAdminPanel();
  }
  