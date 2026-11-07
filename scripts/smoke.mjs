const baseUrl = process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:4321';

const routes = [
  '/', '/en/', '/ar/',
  '/en/about/', '/ar/about/', '/en/services/', '/ar/services/',
  '/en/services/drilling-support/', '/ar/services/drilling-support/',
  '/en/services/well-services-workover/', '/ar/services/well-services-workover/',
  '/en/services/equipment-rental/', '/ar/services/equipment-rental/',
  '/en/services/inspection-ndt/', '/ar/services/inspection-ndt/',
  '/en/services/maintenance-turnaround/', '/ar/services/maintenance-turnaround/',
  '/en/services/logistics-fuel-supply/', '/ar/services/logistics-fuel-supply/',
  '/en/projects/', '/ar/projects/', '/en/hseq/', '/ar/hseq/',
  '/en/careers/', '/ar/careers/', '/en/contact/', '/ar/contact/',
  '/en/privacy/', '/ar/privacy/', '/en/terms/', '/ar/terms/',
  '/sitemap.xml', '/robots.txt'
];

const failures = [];
for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl));
  if (response.status !== 200) failures.push(`${route} returned ${response.status}`);
}

for (const { route, body } of [
  { route: '/api/rfq', body: {} },
  { route: '/api/recruitment', body: {} }
]) {
  const response = await fetch(new URL(route, baseUrl), {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (![400, 503].includes(response.status)) failures.push(`${route} returned ${response.status}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Smoke test passed: ${routes.length} public routes and 2 API checks.`);
