// Preview build smoke test: the homepage plus every preview placeholder route.
const baseUrl = (process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:4321/bro-petroleum-preview').replace(/\/$/, '');
/** @param {string} route */
const url = (route) => `${baseUrl}${route}`;

const routes = [
  '/en/',
  '/ar/',
  '/en/about/', '/ar/about/',
  '/en/services/', '/ar/services/',
  '/en/services/drilling-support/', '/ar/services/drilling-support/',
  '/en/services/well-services-workover/', '/ar/services/well-services-workover/',
  '/en/services/equipment-rental/', '/ar/services/equipment-rental/',
  '/en/services/inspection-ndt/', '/ar/services/inspection-ndt/',
  '/en/services/maintenance-turnaround/', '/ar/services/maintenance-turnaround/',
  '/en/services/logistics-fuel-supply/', '/ar/services/logistics-fuel-supply/',
  '/en/projects/', '/ar/projects/',
  '/en/hseq/', '/ar/hseq/',
  '/en/careers/', '/ar/careers/',
  '/en/contact/', '/ar/contact/',
  '/en/privacy/', '/ar/privacy/',
  '/en/terms/', '/ar/terms/',
  '/robots.txt',
];

const failures = [];
for (const route of routes) {
  const response = await fetch(new URL(url(route)));
  if (response.status !== 200) failures.push(`${route} returned ${response.status}`);
}

const home = await fetch(new URL(url('/en/')));
const html = await home.text();
for (const marker of ['Field support for operations that cannot afford delay.', 'BRO Petroleum preview']) {
  if (!html.includes(marker)) failures.push(`homepage is missing: ${marker}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Smoke test passed: ${routes.length} routes and 2 homepage content checks.`);
