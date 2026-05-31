# Minimal Animated Weather App — Feature TODO

## Core UI / Screens
- [ ] Create a single-page layout (Home) with header (location), main temp block, and **weather cards**.
- [ ] Update card layout to display:
  - [ ] **Today**: weather outcome for **morning / evening / night**
  - [ ] **Next 5 or 7 days**: daily weather summary

- [ ] Card content rules:
  - [ ] Each time-of-day/day shows **condition + temperature** (minimum)
  - [ ] Include **one extra metric** (choose either humidity OR wind) to avoid clutter
  - [ ] Optional: UV index / visibility if space allows

- [ ] Replace static placeholders in `Home.jsx` with real weather state.


- [ ] Replace static placeholders in `Home.jsx` with real weather state.
- [ ] Add skeleton/loading UI (use existing `PageLoader` or improve it with shimmer/animated background).
- [ ] Add error/empty state UI (e.g., no location, API failure).

## Weather Data (API Integration)
- [ ] Select a weather data source (e.g., Open-Meteo) that supports current + hourly.
- [ ] Add an API client module (e.g., `src/lib/weather.js`) to fetch:
  - [ ] Current weather
  - [ ] Hourly forecast (next 12–24 hours)
  - [ ] Optional: daily forecast (next 7 days)
- [ ] Add mapping logic: convert weather codes/conditions to:
  - [ ] readable condition text (e.g., Rainy, Clear)
  - [ ] icon/visual theme
- [ ] Store weather in React state and show it in cards.

## Location / Search
- [ ] Provide a minimal location input or selector.
  - [ ] Option A: Search by city name (debounced)
  - [ ] Option B: Use browser geolocation
- [ ] Implement geocoding if needed (city → lat/lon).
- [ ] Default to Bangalore (or detect user location) on first load.

## Animated Weather Visuals
- [ ] Add an animated background that responds to condition.
  - [ ] Clear: subtle gradient + drifting sun/particles
  - [ ] Clouds: slow-moving cloud layers
  - [ ] Rain: falling rain particles + ripple/blur accents
  - [ ] Thunder (optional): occasional flash
  - [ ] Windy: moving streak lines
- [ ] Add animated main icon for weather condition (CSS animation or lightweight SVG).
- [ ] Use reduced-motion support (`prefers-reduced-motion`) to disable heavy animations.

## Hourly Forecast UI
- [ ] Create an `HourlyForecast` component.
- [ ] Render a horizontal timeline of upcoming hours.
- [ ] Allow toggling between Celsius/Fahrenheit (optional but minimal).
- [ ] Highlight current hour.

## Polish / Aesthetic Details
- [ ] Tune typography and spacing for a minimal aesthetic.
- [ ] Add micro-interactions:
  - [ ] hover lift on cards
  - [ ] smooth transitions when weather changes
- [ ] Use consistent color tokens (dark theme) for legibility.

## Performance / Best Practices
- [ ] Debounce input (if adding city search).
- [ ] Cache requests (simple in-memory cache keyed by lat/lon).
- [ ] Avoid unnecessary re-renders (memoize components if needed).
- [ ] Handle request race conditions when location changes.

## Testing / Validation
- [ ] Verify API integration works in dev build.
- [ ] Validate loading/error states.
- [ ] Check responsiveness for mobile widths.

## Deliverable Checklist
- [ ] App loads → fetches weather → displays condition + temp + metrics.
- [ ] Weather visuals animate based on condition.
- [ ] No-motion mode behaves correctly.
- [ ] Hourly forecast shows consistently.
