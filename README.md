# Práctica para curso avanzado de Angular

## Requerimientos funcionales

Explorar la información abierta y disponible en el [API del Banco Mundial](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures).


### Home page

- [ DONE ] Ver regiones geográficas continentales:

- [ DONE ] A partir de : http://api.worldbank.org/v2/region/?format=json

- [ DONE ] Filtrando para ver aquellas que tengan `id` numérico

- [ DONE ] Navegar hacia la página de una región: `region/:code`

### Página para una región continental [WIP]

- [ DONE ] Ver los datos básicos del continente y los países pertenecientes.

- [ DONE ] A partir de : http://api.worldbank.org/v2/es/region/ECS/country?per_page=1000&format=json

- [ DONE ] Navegar hacia la página de un país: `country/:id`

### Página para un país [WIP]

- [ DONE ]Ver los datos básicos de un país

- [ DONE ]A partir de : http://api.worldbank.org/V2/es/country/ESP?format=json

- [ DONE ] Navegar hacia su región continental : `region/:code`

---

## Requerimientos NO funcionales

## Mínimo

- [ DONE ] Mono repositorio generado con las herramientas de [Nx.dev](https://nx.dev/angular)

- [ DONE ] AL menos una aplicación y una librería

- [ DONE ] Testing unitario de al menos un componente y un servicio

- [ DONE ] Testing _e2e_ de una página

- [ DONE ] Uso de la estrategia de detección de cambios **_OnPush_**.

- [ DONE ] Uso del patrón _Container Presenter_.

## Plus

- [ DONE ] Almacén centralizado del estado mediante **_NgRx_**.

- [ DONE ] Características **_PWA_**

- [DONE] Traducible

## Extra

- [ DONE ] Una landing page _SEO friendly_ generada con **_SSR_** que muestre la lista de continentes.

- Un _**WebComponent**_ con datos de un según su código. `<wbde-country id="ESP"></wbde-country>`

- Una aplicación web estándar (sin Angular) que use el anterior componente.
