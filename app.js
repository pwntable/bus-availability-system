// --- Schedules Data ---
const allSchedules = {
  induk: {
    mondayThursday: {
      "Bas 1": ["07:15", "07:45", "08:15", "09:40", "11:10", "12:10", "13:10", "13:50", "15:10", "16:10", "17:00", "17:30"],
      "Bas 2": ["07:15", "07:45", "08:30", "10:10", "11:20", "12:20", "13:20", "14:10", "15:20", "16:20", "17:15", "17:45"],
      "Bas 3": ["07:15", "07:45", "08:40", "10:20", "11:30", "12:30", "13:30", "14:20", "15:20", "16:30", "17:15", "18:00"],
      "Bas 4": ["07:15", "07:45", "08:50", "10:30", "11:40", "12:40", "13:30", "14:40", "15:40", "16:40", "17:30", "18:30"],
      "Bas 5": ["07:15", "07:45", "09:10", "10:40", "11:50", "12:50", "13:40", "14:50", "15:50", "17:00", "18:00", "19:00"],
      "Bas 6": ["07:15", "07:45", "09:30", "11:00", "12:00", "13:00", "13:40", "19:00", "20:30", "21:30", "22:00", "23:00"]
    },
    friday: {
      "Bas 1": ["07:15", "07:45", "08:30", "10:00", "11:00", "12:00", "14:15", "15:00", "15:45", "16:30", "17:15", "18:00"],
      "Bas 2": ["07:15", "07:45", "08:30", "10:15", "11:00", "12:00", "14:15", "15:00", "15:45", "16:30", "17:15", "18:00"],
      "Bas 3": ["07:15", "07:45", "08:45", "10:30", "11:15", "12:00", "14:15", "15:15", "16:00", "16:45", "17:30", "18:15"],
      "Bas 4": ["07:15", "07:45", "09:15", "10:45", "11:15", "12:15", "14:30", "15:15", "16:15", "17:00", "17:45", "18:30"],
      "Bas 5": ["07:15", "07:45", "09:30", "11:00", "11:30", "12:15", "14:30", "15:30", "16:30", "17:15", "18:00", "19:00"],
      "Bas 6": ["07:15", "07:45", "09:45", "10:30", "11:30", "12:15", "18:30", "19:00", "20:30", "21:30", "22:00", "23:00"]
    },
    weekend: {
      "Bas 1": ["07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"]
    }
  },
  pagoh: {
    mondayThursday: {
      "Bas 1": ["07:30", "07:45", "08:15", "08:45", "10:00", "11:00", "12:15", "13:15", "14:15", "15:15", "16:15", "17:00"],
      "Bas 2": ["07:30", "07:45", "08:15", "09:15", "10:15", "11:15", "12:30", "13:30", "14:15", "15:15", "16:30", "17:30"],
      "Bas 3": ["07:30", "07:45", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "17:00", "18:00"],
      "Bas 4": ["07:30", "07:45", "08:30", "09:45", "10:30", "11:45", "12:45", "13:45", "14:30", "15:45", "17:30", "18:30"],
      "Bas 5": ["07:30", "07:45", "08:45", "10:00", "10:45", "12:00", "13:15", "13:45", "14:45", "16:15", "18:00", "19:00"],
      "Bas 6": ["15:00", "16:00", "17:00", "18:00", "18:30", "19:00", "20:00", "21:00", "21:30", "22:00", "22:30", "23:00"]
    },
    friday: {
      "Bas 1": ["07:30", "07:45", "08:15", "09:15", "10:15", "11:15", "12:00", "14:15", "15:15", "16:45", "18:00"],
      "Bas 2": ["07:30", "07:45", "08:15", "09:15", "10:15", "11:15", "12:00", "14:15", "15:30", "17:00", "18:15"],
      "Bas 3": ["07:30", "07:45", "08:30", "09:30", "10:30", "11:30", "12:00", "14:30", "15:45", "17:15", "18:30"],
      "Bas 4": ["07:30", "07:45", "08:30", "09:30", "10:30", "11:30", "12:15", "14:30", "16:00", "17:30", "19:00"],
      "Bas 5": ["07:30", "07:45", "08:45", "09:45", "10:45", "11:45", "12:15", "14:45", "16:15", "17:30", "19:00"],
      "Bas 6": ["07:30", "07:45", "08:45", "09:45", "10:45", "11:45", "12:15", "14:45", "16:30", "17:45", "19:00"],
      "Masjid Yassin": ["12:30", "14:00"]
    },
    weekend: {}
  },
  bandar: {
    mondayThursday: {
      "Bas 1": ["07:15", "08:30", "09:15", "10:15", "11:15", "12:30", "13:30", "14:30", "15:30", "17:00", "17:45", "18:45"],
      "Bas 2": ["07:15", "08:30", "09:15", "10:45", "11:45", "12:30", "13:30", "15:00", "16:00", "17:00", "17:45", "18:45"],
      "Bas 3": ["07:15", "09:00", "10:00", "10:45", "12:00", "13:00", "14:00", "15:00", "16:30", "17:30", "18:30", "18:45"]
    },
    friday: {
      "Bas 1": ["07:15", "08:15", "09:15", "10:15", "11:15", "12:15", "14:00", "15:00", "15:45", "17:15", "17:45", "18:30"],
      "Bas 2": ["07:15", "08:15", "09:15", "10:30", "11:30", "12:15", "14:00", "15:15", "16:15", "17:15", "17:45", "18:45"],
      "Bas 3": ["07:15", "08:30", "09:45", "10:30", "11:30", "12:15", "14:15", "15:15", "16:30", "17:30", "18:15", "18:45"]
    },
    weekend: {}
  }
};

// --- State ---
let currentMode = 'live'; // 'live' or 'full'
let currentRoute = 'induk'; // 'induk', 'pagoh', 'bandar'

// --- Utility Functions ---

function getNow() {
  return new Date();
}

/** Get schedule group based on current day */
function getScheduleGroupInfo(date) {
  const day = date.getDay(); // 0 is Sunday, 1 is Monday...
  if (day >= 1 && day <= 4) {
    return { key: 'mondayThursday', name: 'Monday - Thursday Schedule' };
  } else if (day === 5) {
    return { key: 'friday', name: 'Friday Schedule' };
  } else {
    return { key: 'weekend', name: 'Weekend Schedule' };
  }
}

/** Format time as HH:MM */
function formatTime(date) {
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');
  const s = date.getSeconds().toString().padStart(2, '0');
  return { timeString: `${h}:${m}`, completeString: `${h}:${m}:${s}` };
}

/** Convert "HH:MM" to Date object for today */
function timeStringToDate(timeStr, baseDate) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

/** Calculate distance between two dates in useful format */
function getTimeDiff(targetDate, now) {
  const diffMs = targetDate - now;
  if (diffMs < 0) return null;
  const totalMins = Math.floor(diffMs / 60000);
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  
  if (hrs > 0) {
    return `in ${hrs}h ${mins}m`;
  }
  if (mins === 0) {
    return 'due now';
  }
  return `in ${mins}m`;
}

/** Parse and filter bus data for a specific bus */
function getBusData(busName, timesArray, now) {
  const trips = [];
  let nextTrip = null;
  let activeTrip = null;
  let passedCount = 0;
  let futureCount = 0;
  let nextTripDate = null;

  for (let i = 0; i < timesArray.length; i++) {
    const tripTimeStr = timesArray[i];
    const tripDate = timeStringToDate(tripTimeStr, now);
    const diffMs = tripDate - now;
    
    let state = 'upcoming';
    // Active if departure was within the last 15 minutes
    if (diffMs <= 0 && diffMs > -15 * 60000) {
      state = 'active';
      activeTrip = { time: tripTimeStr, date: tripDate };
      passedCount++;
    } else if (diffMs <= 0) {
      state = 'passed';
      passedCount++;
    } else {
      futureCount++;
      if (!nextTrip) {
        state = 'next';
        nextTrip = { time: tripTimeStr, date: tripDate };
        nextTripDate = tripDate;
      }
    }
    trips.push({ time: tripTimeStr, date: tripDate, state });
  }

  // Determine overall badge status
  let overallStatus = 'Ended';
  let badgeClass = 'badge-ended';
  let cardClass = 'status-card-ended';

  if (activeTrip) {
    overallStatus = 'Active';
    badgeClass = 'badge-active';
    cardClass = 'status-card-active';
  } else if (nextTrip && passedCount === 0) {
    overallStatus = 'Upcoming';
    badgeClass = 'badge-upcoming';
    cardClass = 'status-card-upcoming';
  } else if (nextTrip) {
    overallStatus = 'Next Trip';
    badgeClass = 'badge-next';
    cardClass = 'status-card-next';
  }

  return {
    busName,
    trips,
    nextTrip,
    activeTrip,
    passedCount,
    futureCount,
    overallStatus,
    badgeClass,
    cardClass,
    totalTrips: timesArray.length,
    nextTripDate
  };
}

// --- Render Functions ---

function updateTopSummary(now, scheduleGroup, allBuses) {
  // Update Date & Time
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('currentDate').textContent = now.toLocaleDateString(undefined, optionsDate);
  document.getElementById('currentTime').textContent = formatTime(now).completeString;
  document.getElementById('currentGroup').textContent = scheduleGroup.name;

  // Determine Service Status & Next overall trip
  let earliestNextTrip = null;
  let anyActive = false;
  let allEnded = true;

  for (const bus of allBuses) {
    if (bus.activeTrip) anyActive = true;
    if (bus.futureCount > 0) allEnded = false;
    
    if (bus.nextTripDate) {
      if (!earliestNextTrip || bus.nextTripDate < earliestNextTrip.date) {
        earliestNextTrip = { date: bus.nextTripDate, busName: bus.busName, time: bus.nextTrip.time };
      }
    }
  }

  const statusEl = document.getElementById('overallStatus');
  const nextOverallEl = document.getElementById('nextOverall');

  if (allEnded && allBuses.length > 0 && allBuses[0].passedCount > 0) {
    statusEl.innerHTML = 'Service ended for today';
    statusEl.className = 'overall-status status-ended';
    nextOverallEl.textContent = 'No more trips today.';
  } else if (!anyActive && allBuses.every(b => b.passedCount === 0)) {
    statusEl.innerHTML = 'Service has not started yet';
    statusEl.className = 'overall-status status-not-started';
    nextOverallEl.textContent = earliestNextTrip ? `First trip: ${earliestNextTrip.busName} @ ${earliestNextTrip.time}` : '';
  } else {
    statusEl.innerHTML = 'Currently in operation';
    statusEl.className = 'overall-status status-running';
    if (earliestNextTrip) {
      nextOverallEl.textContent = `Next overall trip: ${earliestNextTrip.busName} @ ${earliestNextTrip.time}`;
    } else {
      nextOverallEl.textContent = '';
    }
  }
}


function renderLiveView(allBuses, now) {
  const grid = document.getElementById('busGrid');
  grid.innerHTML = '';

  if (allBuses.length === 0) {
    document.getElementById('edgeStateMsg').textContent = 'No service available today.';
    document.getElementById('edgeStateMsg').style.display = 'block';
    return;
  }
  document.getElementById('edgeStateMsg').style.display = 'none';

  allBuses.forEach(bus => {
    // Determine main display info
    let displayTime = '--:--';
    let timeLabel = 'Next Trip';
    let countdownStr = '';

    if (bus.nextTrip) {
      displayTime = bus.nextTrip.time;
      countdownStr = getTimeDiff(bus.nextTrip.date, now);
      if (bus.activeTrip) {
        timeLabel = 'Next / Active Trip';
      }
    } else if (bus.activeTrip) {
      displayTime = bus.activeTrip.time;
      timeLabel = 'Currently Active';
      countdownStr = 'Departed recently';
    } else {
      displayTime = 'DONE';
      timeLabel = 'Trips Ended';
    }

    // Generate upcoming pills (max 4)
    let upcomingPills = '';
    const upcomingTrips = bus.trips.filter(t => t.state === 'next' || t.state === 'upcoming').slice(0, 4);
    if (upcomingTrips.length > 0 && displayTime !== 'DONE') {
      upcomingPills = `<div class="trips-list">
        ${upcomingTrips.map(t => `<span class="trip-pill">${t.time}</span>`).join('')}
      </div>`;
    }

    const html = `
      <div class="bus-card ${bus.cardClass}">
        <div class="bus-header">
          <h3 class="bus-name"><i class="fa-solid fa-bus-simple"></i> ${bus.busName}</h3>
          <span class="bus-badge ${bus.badgeClass}">${bus.overallStatus}</span>
        </div>
        <div class="bus-body">
          <div>
            <div class="trip-label">${timeLabel}</div>
            <div class="next-trip ${bus.nextTrip ? 'highlight' : ''}">${displayTime}</div>
            ${countdownStr ? `<div class="trip-countdown">${countdownStr}</div>` : ''}
          </div>
          <div class="trips-remaining">
            ${bus.futureCount} remaining trips today (out of ${bus.totalTrips})
          </div>
          ${upcomingPills}
        </div>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', html);
  });
}

function renderFullSchedule(scheduleData) {
  const tbody = document.getElementById('fullScheduleBody');
  tbody.innerHTML = '';
  
  if (!scheduleData || Object.keys(scheduleData).length === 0) {
    tbody.innerHTML = '<tr><td colspan="2">No data available.</td></tr>';
    return;
  }

  for (const [busName, times] of Object.entries(scheduleData)) {
    const now = getNow();
    
    let nextTripFound = false;
    const pillsHtml = times.map(timeStr => {
      const tripDate = timeStringToDate(timeStr, now);
      const diffMins = (tripDate - now) / 60000;
      
      let extraClass = '';
      if (diffMins < 0) {
        extraClass = 'passed';
      } else {
        if (!nextTripFound) {
          nextTripFound = true;
          // Nearest trip within 15 minutes is highlighted strongly
          if (diffMins <= 15) {
            extraClass = 'nearest';
          } else {
            // Next trip overall gets a softer highlight
            extraClass = 'next-trip-pill';
          }
        }
      }
      return `<span class="trip-pill ${extraClass}">${timeStr}</span>`;
    }).join('');

    const html = `
      <tr>
        <td class="bus-table-name">${busName}</td>
        <td>
          <div class="table-trips">${pillsHtml}</div>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', html);
  }
}

// --- Main Loop ---

function appTick() {
  const now = getNow();
  const scheduleGroup = getScheduleGroupInfo(now);
  const routeData = allSchedules[currentRoute];
  const currentSchedule = routeData ? routeData[scheduleGroup.key] : null;

  let allBuses = [];
  if (currentSchedule && Object.keys(currentSchedule).length > 0) {
    allBuses = Object.keys(currentSchedule).map(busName => 
      getBusData(busName, currentSchedule[busName], now)
    );

    // Sort active and upcoming buses first, based on distance in time.
    // If times are exactly the same, sort by the bus sequence (e.g. Bas 1 before Bas 2).
    allBuses.sort((a, b) => {
      const getSortTime = (bus) => {
        if (bus.activeTrip) return bus.activeTrip.date.getTime();
        if (bus.nextTripDate) return bus.nextTripDate.getTime();
        return Infinity;
      };
      
      const timeDiff = getSortTime(a) - getSortTime(b);
      if (timeDiff === 0) {
        // Fallback to sorting by bus name (Bas 1, Bas 2, etc.)
        return a.busName.localeCompare(b.busName, undefined, { numeric: true });
      }
      return timeDiff;
    });
  }

  updateTopSummary(now, scheduleGroup, allBuses);

  if (currentMode === 'live') {
    renderLiveView(allBuses, now);
  } else {
    // Re-render to update the 'passed' styling on pills as time goes by
    renderFullSchedule(currentSchedule);
  }
}

// --- Event Listeners ---

document.getElementById('btnLiveView').addEventListener('click', () => {
  currentMode = 'live';
  document.getElementById('btnLiveView').classList.add('active');
  document.getElementById('btnFullSchedule').classList.remove('active');
  
  document.getElementById('busGrid').style.display = 'grid';
  document.getElementById('scheduleTableSection').style.display = 'none';
  appTick();
});

document.getElementById('btnFullSchedule').addEventListener('click', () => {
  currentMode = 'full';
  document.getElementById('btnFullSchedule').classList.add('active');
  document.getElementById('btnLiveView').classList.remove('active');
  
  document.getElementById('busGrid').style.display = 'none';
  document.getElementById('scheduleTableSection').style.display = 'block';
  appTick();
});

// Route Tabs
document.querySelectorAll('.route-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.route-tab').forEach(t => t.classList.remove('active'));
    const currentTab = e.currentTarget;
    currentTab.classList.add('active');
    
    currentRoute = currentTab.getAttribute('data-route');
    appTick();
  });
});

// --- Modal Logic ---
const routeImages = {
  induk: 'kolej-kediaman-luar-kampus-to-kampus-induk.jpeg',
  pagoh: 'kolej-kediaman-pagoh-to-kampus-pagoh.jpeg',
  bandar: 'kolej-kediaman-to-kampus-bandar.jpeg'
};

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

document.getElementById('btnPreviewSchedule').addEventListener('click', () => {
  modalImage.src = routeImages[currentRoute];
  modal.style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// --- Initialization ---
appTick();
setInterval(appTick, 1000); // Update every second to keep clock smooth
