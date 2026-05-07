const eventSeedData = {
  updated: "2026-03-18 11:27:38",
  trusted_bindings: [
    { ip: "192.168.1.254", mac: "50:95:51:93:A2:C0" },
    { ip: "192.168.1.119", mac: "A8:A1:59:60:49:23" }
  ],
  devices: [
    { mac: "70:03:9F:4A:40:49", ip: "192.168.1.217", first_seen: "2026-03-18 11:19:57", last_seen: "2026-03-18 11:27:37" },
    { mac: "E8:68:E7:48:E9:74", ip: "192.168.1.172", first_seen: "2026-03-18 11:19:58", last_seen: "2026-03-18 11:27:38" },
    { mac: "E0:62:34:F9:CB:BD", ip: "192.168.1.192", first_seen: "2026-03-18 11:20:05", last_seen: "2026-03-18 11:27:36" },
    { mac: "A8:A1:59:60:49:23", ip: "192.168.1.119", first_seen: "2026-03-18 11:20:11", last_seen: "2026-03-18 11:27:31" },
    { mac: "D8:CB:8A:60:97:88", ip: "192.168.1.117", first_seen: "2026-03-18 11:20:11", last_seen: "2026-03-18 11:24:02" },
    { mac: "50:95:51:93:A2:C0", ip: "192.168.1.254", first_seen: "2026-03-18 11:20:27", last_seen: "2026-03-18 11:27:31" },
    { mac: "F4:8E:38:01:0C:87", ip: "192.168.1.118", first_seen: "2026-03-18 11:21:05", last_seen: "2026-03-18 11:21:05" },
    { mac: "08:84:9D:F5:05:78", ip: "192.168.1.163", first_seen: "2026-03-18 11:24:22", last_seen: "2026-03-18 11:25:07" },
    { mac: "08:B4:B1:FE:72:7A", ip: "192.168.1.100", first_seen: "2026-03-18 11:26:19", last_seen: "2026-03-18 11:26:24" }
  ],
  alerts: [
    { time: "11:19:57", type: "new_device", ip: "192.168.1.217", mac: "70:03:9F:4A:40:49", message: "New device connected" },
    { time: "11:19:58", type: "new_device", ip: "192.168.1.172", mac: "E8:68:E7:48:E9:74", message: "New device connected" },
    { time: "11:20:05", type: "new_device", ip: "192.168.1.192", mac: "E0:62:34:F9:CB:BD", message: "New device connected" },
    { time: "11:20:11", type: "new_device", ip: "192.168.1.119", mac: "A8:A1:59:60:49:23", message: "New device connected" },
    { time: "11:20:11", type: "new_device", ip: "192.168.1.117", mac: "D8:CB:8A:60:97:88", message: "New device connected" },
    { time: "11:20:27", type: "new_device", ip: "192.168.1.254", mac: "50:95:51:93:A2:C0", message: "New device connected" },
    { time: "11:21:05", type: "new_device", ip: "192.168.1.118", mac: "F4:8E:38:01:0C:87", message: "New device connected" },
    { time: "11:24:22", type: "new_device", ip: "192.168.1.163", mac: "08:84:9D:F5:05:78", message: "New device connected" },
    { time: "11:26:19", type: "new_device", ip: "192.168.1.100", mac: "08:B4:B1:FE:72:7A", message: "New device connected" }
  ],
  events: [
    { time: "11:21:06", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" },
    { time: "11:21:08", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" },
    { time: "11:21:10", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" },
    { time: "11:21:12", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" },
    { time: "11:21:14", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" },
    { time: "11:24:01", port: "Gi1/0/5", senderIp: "192.168.1.254", senderMac: "D8:CB:8A:60:97:88", reason: "BLOCKED - IP spoof of trusted 192.168.1.254 (expected 50:95:51:93:A2:C0)" }
  ]
};

const nicOptions = [
  "Ethernet (192.168.1.119)",
  "Network Bridge (192.168.86.20)",
  "Wi-Fi (192.168.0.44)"
];

const deviceCatalog = {
  Phone: [
    "Samsung Galaxy S22",
    "Samsung Galaxy S24 Ultra",
    "iPhone 15 Pro",
    "iPhone 14",
    "Google Pixel 8",
    "Google Pixel 7a",
    "OnePlus 12",
    "Motorola Edge 50",
    "Samsung Galaxy A54",
    "iPhone SE (3rd gen)"
  ],
  AP: [
    "Ubiquiti UniFi U6-Pro",
    "Ubiquiti UniFi U7-Pro",
    "Cisco Meraki MR46",
    "Aruba AP-505",
    "TP-Link EAP670",
    "Netgear WAX620",
    "Ruckus R650",
    "Engenius ECW230",
    "Mist AP43",
    "Fortinet FortiAP 431F"
  ],
  Server: [
    "Dell PowerEdge T350",
    "Dell PowerEdge R750",
    "HPE ProLiant DL380 Gen11",
    "HPE ProLiant ML110 Gen11",
    "Lenovo ThinkSystem SR650",
    "Supermicro SuperServer 6029U",
    "Cisco UCS C240 M6",
    "Dell PowerEdge R650",
    "HPE Apollo 4200",
    "Lenovo ThinkSystem ST250"
  ],
  Printer: [
    "HP LaserJet Pro M404dn",
    "HP Color LaserJet Pro M479fdw",
    "Brother HL-L2350DW",
    "Brother MFC-L8900CDW",
    "Canon imageCLASS MF743Cdw",
    "Epson WorkForce Pro WF-3820",
    "Xerox VersaLink C405",
    "Lexmark MS431dn",
    "Ricoh SP 3710DN",
    "Konica Minolta bizhub C3350i"
  ],
  Laptop: [
    "Dell Latitude 5540",
    "Dell XPS 15",
    "Lenovo ThinkPad X1 Carbon Gen 11",
    "Lenovo ThinkPad T14",
    "HP EliteBook 840 G10",
    "HP ProBook 450 G10",
    "Apple MacBook Pro 14\" (M3)",
    "Apple MacBook Air 13\" (M2)",
    "ASUS ZenBook 14",
    "Microsoft Surface Laptop 5"
  ],
  "Desktop PC": [
    "Dell OptiPlex 7010",
    "Dell Precision 3660 Tower",
    "HP EliteDesk 800 G9",
    "HP Z2 Tower G9",
    "Lenovo ThinkCentre M90t",
    "Lenovo ThinkStation P360",
    "Apple iMac 24\" (M3)",
    "Apple Mac mini (M2)",
    "Custom Windows 11 Build (Intel i7 / RTX 4070)",
    "Intel NUC 13 Pro"
  ],
  "IoT Device": [
    "Wyze Cam v3",
    "Amazon Echo Dot (5th gen)",
    "Google Nest Thermostat",
    "Google Nest Hub",
    "Ring Video Doorbell Pro",
    "Philips Hue Bridge",
    "TP-Link Kasa Smart Plug",
    "Ecobee Smart Thermostat Premium",
    "Arlo Pro 4 Camera",
    "Samsung SmartThings Hub"
  ]
};

const deviceTypes = Object.keys(deviceCatalog);

const statusOptions = ["trusted", "known", "new", "alert"];

function formatTimeStamp(date = new Date()) {
  const pad = value => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function dateToShortTime(value) {
  const pieces = String(value).split(" ");
  return pieces[1] || pieces[0] || "";
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildScanOutput(devices) {
  return devices.slice(0, 4).map(device => {
    const friendlyName = device.name || device.type || "Unknown device";
    return `Nmap scan report for ${device.ip}
Host is up (0.00080s latency).
MAC Address: ${device.mac} (${friendlyName})
Device type: ${device.type || "host"}`;
  }).join("\n\n");
}

function generateRandomizedDemoData() {
  const trustedMacs = new Set(eventSeedData.trusted_bindings.map(binding => binding.mac));
  const trustedIps = new Set(eventSeedData.trusted_bindings.map(binding => binding.ip));
  const newAlertIps = new Set(
    eventSeedData.alerts
      .filter(alert => alert.type === "new_device")
      .map(alert => alert.ip)
  );
  const newAlertMacs = new Set(
    eventSeedData.alerts
      .filter(alert => alert.type === "new_device")
      .map(alert => alert.mac)
  );
  const eventAlertIps = new Set(eventSeedData.events.map(event => event.senderIp));
  const eventAlertMacs = new Set(eventSeedData.events.map(event => event.senderMac));

  const selectedDevices = shuffle(eventSeedData.devices).slice(0, 8).map(device => {
    const type = randomItem(deviceTypes);
    let status = "known";

    if (trustedMacs.has(device.mac) || trustedIps.has(device.ip)) {
      status = "trusted";
    } else if (newAlertIps.has(device.ip) || newAlertMacs.has(device.mac)) {
      status = "new";
    } else if (eventAlertIps.has(device.ip) || eventAlertMacs.has(device.mac)) {
      status = "alert";
    }

    return {
      id: `${device.ip}-${device.mac}`.replace(/[^a-zA-Z0-9]/g, ""),
      name: randomItem(deviceCatalog[type]),
      ip: device.ip,
      mac: device.mac,
      type,
      status,
      firstSeen: dateToShortTime(device.first_seen),
      lastSeen: dateToShortTime(device.last_seen)
    };
  });

  selectedDevices.forEach(device => {
    if (device.ip === "192.168.1.254" && device.mac === "50:95:51:93:A2:C0") {
      device.type = "Modem";
      device.name = "Arris SURFboard SB8200";
      device.status = "trusted";
    }
    if (device.ip === "192.168.1.119" && device.mac === "A8:A1:59:60:49:23") {
      device.type = "Desktop PC";
      device.name = "admin";
      device.status = "trusted";
    }
  });

  const trustedBindings = eventSeedData.trusted_bindings.map(binding => ({ ...binding }));
  const updated = formatTimeStamp();
  const alerts = shuffle(eventSeedData.alerts).slice(0, 6).map(alert => ({ ...alert }));
  const events = shuffle(eventSeedData.events).slice(0, 6).map(event => ({ ...event }));
  const syslog = events.map((event, index) => ({
    time: event.time,
    source: index % 2 === 0 ? "sw-core" : "sw-edge",
    message: `${event.port} ${event.reason}`
  }));

  const scanOutput = `${buildScanOutput(selectedDevices)}\n\nScan completed at ${new Date().toLocaleTimeString()}`;

  return {
    updated,
    trustedBindings,
    devices: selectedDevices,
    alerts,
    events,
    syslog,
    settings: {
      activeInterface: randomItem(nicOptions),
      autoRefresh: `${[5, 10, 15, 30][Math.floor(Math.random() * 4)]} second dashboard refresh`,
      dashboardPort: String([3000, 4000, 5000, 8080][Math.floor(Math.random() * 4)]),
      syslogPort: "514"
    },
    scanResults: [
      {
        label: "Network Scan",
        status: "done",
        started: updated,
        cmd: "nmap -O --osscan-limit -PR 192.168.1.0/24",
        output: scanOutput
      }
    ]
  };
}

const initialDemoData = generateRandomizedDemoData();
let demoData = structuredClone(initialDemoData);

const state = {
  view: "overview",
  filter: "all",
  deviceSearch: ""
};

const el = id => document.getElementById(id);
const esc = value => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

function rowHtml(cells) {
  return `<tr>${cells.map(cell => `<td>${cell}</td>`).join("")}</tr>`;
}

function emptyRow(message, cols) {
  return `<tr><td colspan="${cols}" class="wrap">${esc(message)}</td></tr>`;
}

function wrapTable(headers, rows, scroll = false) {
  return `<div class="table-panel"><div class="table-wrap${scroll ? " scroll" : ""}"><table><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.length ? rows.join("") : emptyRow("No data available", headers.length)}</tbody></table></div></div>`;
}

function settingsControl(label, control) {
  return `<div class="setting-card"><div class="setting-label">${esc(label)}</div><div class="setting-control">${control}</div></div>`;
}

function restoreDemoData() {
  demoData = generateRandomizedDemoData();
}

function clearDeviceData() {
  demoData.devices = demoData.devices.map(device => ({
    ...device,
    name: "",
    ip: "",
    mac: "",
    type: "",
    status: "known",
    firstSeen: "",
    lastSeen: ""
  }));
}

function clearMonitoringData() {
  clearDeviceData();
  demoData.alerts = [];
  demoData.events = [];
  demoData.syslog = [];
}

function setView(view) {
  state.view = view;
  document.querySelectorAll("[data-demo-view]").forEach(button => {
    button.classList.toggle("active", button.dataset.demoView === view);
  });
  document.querySelectorAll(".demo-view").forEach(section => {
    section.classList.toggle("active", section.id === `demo-${view}`);
  });
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderDevices();
}

function setDeviceSearch(value) {
  state.deviceSearch = value;
  renderDevices();
}

function syncHeaderNic() {
  const nicSelect = el("demoNic");
  if (nicSelect) {
    nicSelect.value = demoData.settings.activeInterface;
  }
}

function updateDeviceField(index, field, value) {
  if (!demoData.devices[index]) return;
  demoData.devices[index][field] = value;
  renderDevices();
  renderOverview();
}

function updateSetting(field, value) {
  demoData.settings[field] = value;
  if (field === "activeInterface") {
    syncHeaderNic();
    renderSettings();
  }
}

function renderOverview() {
  const overview = el("demo-overview");
  const latestAlerts = demoData.alerts.map(a => rowHtml([esc(a.time), esc(a.type), esc(a.ip), `<span class="wrap">${esc(a.message)}</span>`]));
  const latestEvents = demoData.events.map(e => rowHtml([esc(e.time), esc(e.port), esc(e.senderIp), `<span class="wrap">${esc(e.reason)}</span>`]));
  const latestDevices = demoData.devices.slice(0, 6).map(d => rowHtml([
    d.name ? esc(d.name) : '<span class="wrap">unnamed</span>',
    esc(d.ip),
    `<span class="status-${esc(d.status)}">${esc(d.status)}</span>`,
    esc(d.lastSeen)
  ]));

  overview.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Overview</h2>
        <div class="section-subtitle">Live summary of trusted bindings, devices, alerts, and suspicious activity.</div>
      </div>
      <div class="section-tools">
        <button id="clearOverviewBtn" class="btn btn-ghost">Clear</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Trusted Bindings</div><div class="stat-value">${demoData.trustedBindings.length}</div></div>
      <div class="stat-card"><div class="stat-label">Known Devices</div><div class="stat-value">${demoData.devices.filter(device => device.ip || device.mac || device.name || device.type).length}</div></div>
      <div class="stat-card"><div class="stat-label">Alerts</div><div class="stat-value">${demoData.alerts.length}</div></div>
      <div class="stat-card"><div class="stat-label">Events</div><div class="stat-value">${demoData.events.length}</div></div>
    </div>

    <div class="overview-grid">
      <div class="stack">
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">Trusted Bindings</div>
            <div class="panel-note">Updated: ${esc(demoData.updated)}</div>
          </div>
          ${wrapTable(["IP", "MAC"], demoData.trustedBindings.map(binding => rowHtml([esc(binding.ip), esc(binding.mac)])))}
        </div>
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">Latest Alerts</div>
          </div>
          ${wrapTable(["Time", "Type", "IP", "Message"], latestAlerts)}
        </div>
      </div>

      <div class="stack">
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">Recent Events</div>
          </div>
          ${wrapTable(["Time", "Port", "Sender IP", "Reason"], latestEvents, true)}
        </div>
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">Known Devices Snapshot</div>
          </div>
          ${wrapTable(["Name", "IP", "Status", "Last Seen"], latestDevices)}
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const clearBtn = el("clearOverviewBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        clearMonitoringData();
        renderAll();
      });
    }
  }, 0);
}

function renderDevices() {
  const section = el("demo-devices");
  const search = state.deviceSearch.trim().toLowerCase();
  const filtered = demoData.devices.filter(device => {
    if (state.filter !== "all" && device.status !== state.filter) return false;
    if (!search) return true;
    return [device.name, device.ip, device.mac, device.type, device.status].join(" ").toLowerCase().includes(search);
  });

  const counts = {
    trusted: demoData.devices.filter(device => device.status === "trusted").length,
    known: demoData.devices.filter(device => device.status === "known").length,
    new: demoData.devices.filter(device => device.status === "new").length,
    alert: demoData.devices.filter(device => device.status === "alert").length
  };

  section.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Devices on Network</h2>
        <div class="summary-line">
          <span><strong>${demoData.devices.length}</strong> total</span>
          <span><strong>${counts.trusted}</strong> trusted</span>
          <span><strong>${counts.known}</strong> known</span>
          <span><strong>${counts.new}</strong> new</span>
          <span><strong>${counts.alert}</strong> alert</span>
        </div>
      </div>
      <div class="section-tools">
        <button id="scanNowBtn" class="btn btn-ghost">Scan Now</button>
        <button id="clearDevicesBtn" class="btn btn-ghost">Clear</button>
      </div>
    </div>

    <div class="filters">
      <input id="deviceSearchInput" class="search-input" type="text" placeholder="Search IP, MAC, name, or type" value="${esc(state.deviceSearch)}">
      <div class="pill-row">
        <button class="pill ${state.filter === "all" ? "active" : ""}" data-filter="all">all</button>
        <button class="pill ${state.filter === "trusted" ? "active" : ""}" data-filter="trusted">trusted</button>
        <button class="pill ${state.filter === "known" ? "active" : ""}" data-filter="known">known</button>
        <button class="pill ${state.filter === "new" ? "active" : ""}" data-filter="new">new</button>
        <button class="pill ${state.filter === "alert" ? "active" : ""}" data-filter="alert">alert</button>
      </div>
    </div>

    ${wrapTable(
      ["Status", "Name", "IP", "MAC", "Type", "First Seen", "Last Seen"],
      filtered.map(device => {
        const index = demoData.devices.findIndex(candidate => candidate.id === device.id);
        return rowHtml([
          `<select class="table-select" data-device-index="${index}" data-device-field="status">${statusOptions.map(option => `<option value="${option}" ${device.status === option ? "selected" : ""}>${option}</option>`).join("")}</select>`,
          `<input class="table-input" data-device-index="${index}" data-device-field="name" value="${esc(device.name)}" placeholder="Device name">`,
          `<input class="table-input mono-input readonly-input" value="${esc(device.ip)}" placeholder="IP address" readonly>`,
          `<input class="table-input mono-input readonly-input" value="${esc(device.mac)}" placeholder="MAC address" readonly>`,
          `<input class="table-input" data-device-index="${index}" data-device-field="type" value="${esc(device.type)}" placeholder="Type">`,
          `<input class="table-input mono-input readonly-input" value="${esc(device.firstSeen)}" placeholder="First seen" readonly>`,
          `<input class="table-input mono-input readonly-input" value="${esc(device.lastSeen)}" placeholder="Last seen" readonly>`
        ]);
      })
    )}
  `;

  setTimeout(() => {
    const deviceSearchInput = el("deviceSearchInput");
    deviceSearchInput.addEventListener("input", event => setDeviceSearch(event.target.value));
    document.querySelectorAll("[data-filter]").forEach(button => {
      button.addEventListener("click", () => setFilter(button.dataset.filter));
    });
    document.querySelectorAll("[data-device-index]").forEach(control => {
      control.addEventListener("change", event => {
        updateDeviceField(Number(event.target.dataset.deviceIndex), event.target.dataset.deviceField, event.target.value);
      });
    });

    const clearBtn = el("clearDevicesBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        clearDeviceData();
        renderDevices();
        renderOverview();
      });
    }

    const scanBtn = el("scanNowBtn");
    if (scanBtn) {
      scanBtn.addEventListener("click", () => {
        setView("scan");
      });
    }
  }, 0);
}

function renderAlerts() {
  el("demo-alerts").innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Alerts</h2>
        <div class="section-subtitle">Recent new-device alerts and network notices.</div>
      </div>
      <div class="section-tools">
        <button id="clearAlertsBtn" class="btn btn-ghost">Clear</button>
      </div>
    </div>
    ${wrapTable(
      ["Time", "Type", "IP", "MAC", "Message"],
      demoData.alerts.map(alert => rowHtml([esc(alert.time), esc(alert.type), esc(alert.ip), esc(alert.mac), `<span class="wrap">${esc(alert.message)}</span>`])),
      true
    )}
  `;

  setTimeout(() => {
    const clearBtn = el("clearAlertsBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        demoData.alerts = [];
        renderAlerts();
        renderOverview();
      });
    }
  }, 0);
}

function renderEvents() {
  el("demo-events").innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Events</h2>
        <div class="section-subtitle">Sample suspicious and DAI-related event data.</div>
      </div>
      <div class="section-tools">
        <button id="clearEventsBtn" class="btn btn-ghost">Clear</button>
      </div>
    </div>
    ${wrapTable(
      ["Time", "Port", "Sender IP", "Sender MAC", "Reason"],
      demoData.events.map(event => rowHtml([esc(event.time), esc(event.port), esc(event.senderIp), esc(event.senderMac), `<span class="wrap">${esc(event.reason)}</span>`])),
      true
    )}
  `;

  setTimeout(() => {
    const clearBtn = el("clearEventsBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        demoData.events = [];
        renderEvents();
        renderOverview();
      });
    }
  }, 0);
}

function renderSyslog() {
  el("demo-syslog").innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Syslog Feed</h2>
        <div class="section-subtitle">Example switch syslog entries captured by Net-PY.</div>
      </div>
      <div class="section-tools">
        <button id="clearSyslogBtn" class="btn btn-ghost">Clear</button>
      </div>
    </div>
    ${wrapTable(
      ["Time", "Source", "Message"],
      demoData.syslog.map(entry => rowHtml([esc(entry.time), esc(entry.source), `<span class="wrap">${esc(entry.message)}</span>`])),
      true
    )}
  `;

  setTimeout(() => {
    const clearBtn = el("clearSyslogBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        demoData.syslog = [];
        renderSyslog();
        renderOverview();
      });
    }
  }, 0);
}

function renderScan() {
  const scan = demoData.scanResults[0];
  el("demo-scan").innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Network Scan</h2>
        <div class="section-subtitle">Combined host discovery, MAC/vendor lookup, and OS detection preview.</div>
      </div>
    </div>

    <div class="panel">
      <div class="scan-grid">
        <div class="scan-card selected">
          <div class="scan-label">Network Scan</div>
          <div class="scan-desc">Combined host discovery, MAC/vendor lookup, and OS detection across the subnet.</div>
          <div class="scan-cmd">nmap -O --osscan-limit -PR 192.168.1.0/24</div>
        </div>
      </div>

      <div class="scan-controls">
        <input id="scanInput" class="search-input" type="text" value="192.168.1.0/24" readonly>
        <button id="runScanBtn" class="btn btn-accent">Run Network Scan</button>
        <button id="clearScanBtn" class="btn btn-ghost">Clear Results</button>
        <button id="repopulateDataBtn" class="btn btn-ghost">Repopulate Data</button>
      </div>

      <div id="scanResults" class="scan-results">
        <div class="scan-result">
          <div class="scan-head">
            <div class="scan-meta">
              <span class="scan-status done">${esc(scan.status)}</span>
              <span>${esc(scan.label)}</span>
              <span>${esc(scan.cmd)}</span>
            </div>
            <span class="top-timestamp">${esc(scan.started)}</span>
          </div>
          <div class="scan-output">
            <pre>${esc(scan.output)}</pre>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const runBtn = el("runScanBtn");
    if (runBtn) {
      runBtn.addEventListener("click", () => {
        restoreDemoData();
        renderAll();
        setView("scan");
      });
    }

    const clearBtn = el("clearScanBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        el("scanResults").innerHTML = "";
      });
    }

    const repopulateBtn = el("repopulateDataBtn");
    if (repopulateBtn) {
      repopulateBtn.addEventListener("click", () => {
        restoreDemoData();
        renderAll();
        setView("scan");
      });
    }
  }, 0);
}

function renderSettings() {
  el("demo-settings").innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">Settings</h2>
        <div class="section-subtitle">Adjust the live dashboard configuration for the prototype.</div>
      </div>
    </div>
    <div class="settings-grid">
      ${settingsControl("Active Interface", `<select id="settingsNicSelect" class="setting-input">${nicOptions.map(option => `<option value="${esc(option)}" ${demoData.settings.activeInterface === option ? "selected" : ""}>${esc(option)}</option>`).join("")}</select>`)}
      ${settingsControl("Auto Refresh", `<input id="settingsRefreshInput" class="setting-input" value="${esc(demoData.settings.autoRefresh)}" placeholder="10 second dashboard refresh">`)}
      ${settingsControl("Dashboard Port", `<input id="settingsDashboardPortInput" class="setting-input mono-input" value="${esc(demoData.settings.dashboardPort)}" placeholder="5000">`)}
      ${settingsControl("Syslog Port", `<input id="settingsSyslogPortInput" class="setting-input mono-input" value="${esc(demoData.settings.syslogPort)}" placeholder="514">`)}
    </div>
  `;

  setTimeout(() => {
    el("settingsNicSelect").addEventListener("change", event => updateSetting("activeInterface", event.target.value));
    el("settingsRefreshInput").addEventListener("change", event => updateSetting("autoRefresh", event.target.value));
    el("settingsDashboardPortInput").addEventListener("change", event => updateSetting("dashboardPort", event.target.value));
    el("settingsSyslogPortInput").addEventListener("change", event => updateSetting("syslogPort", event.target.value));
  }, 0);
}

function renderAll() {
  el("demoUpdated").textContent = `Updated: ${demoData.updated}`;
  renderOverview();
  renderDevices();
  renderAlerts();
  renderEvents();
  renderSyslog();
  renderScan();
  renderSettings();
  syncHeaderNic();
}

document.querySelectorAll("[data-demo-view]").forEach(button => {
  button.addEventListener("click", () => setView(button.dataset.demoView));
});

el("demoNic").addEventListener("change", event => {
  demoData.settings.activeInterface = event.target.value;
  renderSettings();
});

renderAll();
setView("overview");
