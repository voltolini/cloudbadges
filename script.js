const vendors = {
  datacenter: ["Dell", "HPE", "Lenovo", "IBM", "Supermicro"],
  firewall: ["Fortinet", "Palo Alto", "Check Point", "Sophos", "Cisco"],
  network: ["Cisco", "MikroTik", "Juniper", "Extreme Networks", "Ubiquiti"]
};

const categorySelect = document.getElementById("category");
const vendorSelect = document.getElementById("vendor");
const generateBtn = document.getElementById("generate");
const previewDiv = document.getElementById("preview");
const colorInput = document.getElementById("color");

// Atualiza o select de fabricantes ao escolher categoria
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  vendorSelect.innerHTML = '<option value="">Selecione</option>';
  if (vendors[category]) {
    vendors[category].forEach(vendor => {
      const opt = document.createElement("option");
      opt.value = vendor;
      opt.textContent = vendor;
      vendorSelect.appendChild(opt);
    });
  }
});

// Gera a URL do badge e mostra
generateBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const vendor = vendorSelect.value;
  const color = colorInput.value.replace("#", "");

  if (!category || !vendor) {
    alert("Selecione categoria e fabricante!");
    return;
  }

  // URL do badge usando shields.io
  const badgeURL = `https://img.shields.io/badge/${encodeURIComponent(vendor)}-${encodeURIComponent(category)}-${color}?style=flat`;

  previewDiv.innerHTML = `
    <p>URL do badge: <a href="${badgeURL}" target="_blank">${badgeURL}</a></p>
    <img src="${badgeURL}" alt="Badge ${vendor}">
  `;
});
