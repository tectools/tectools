<div align="center">
  <img src="https://raw.githubusercontent.com/ChillUpX/tectools/master/src/assets/header.png" alt="TEC.TOOLS LOGO"/> 
  <p>
    TEC.TOOLS is a collection of tools that everyone working in IT could make use of. TEC.TOOLS aims to
    provide lots of different tools on one page, so that only one bookmark is needed and not one for every tool.
  </p>  
  <hr />
  <!-- Badges -->
  <p>
    <a href="https://github.com/tectools/tectools/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/tectools/tectools" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/tectools/tectools" alt="last update" />
    </a>
    <a href="https://github.com/tectools/tectools/issues/">
      <img src="https://img.shields.io/github/issues/tectools/tectools" alt="open issues" />
    </a>
    <a href="https://github.com/tectools/tectools/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/tectools/tectools.svg" alt="license" />
    </a>
    <a href="https://github.com/tectools/tectools/network/members">
      <img src="https://img.shields.io/github/forks/tectools/tectools?style=social" alt="forks" />
    </a>
    <a href="https://github.com/tectools/tectools/stargazers">
      <img src="https://img.shields.io/github/stars/tectools/tectools?style=social" alt="stars" />
    </a>
  </p>
  <h3>
    <a href="">Try TEC.TOOLS yourself</a><span> · </span>
    <a href="">Contribute</a><span> · </span>
    <a href="https://github.com/tectools/tectools/issues/new?assignees=&labels=idea&template=idea-template.md&title=%5BIDEA%5D">Submit Tool Ideas</a>
  </h3>
</div>

## Development
TEC.TOOLS is an angular application. For local testing just clone the repo, setupthe dependencies and start local development.
For running the Cloudflare Pages Functions in your local environment, you need to
[install and use wrangler](https://developers.cloudflare.com/pages/platform/functions/#develop-and-preview-locally).
```bash
  npm install
  
  # Angular application only (without functions)
  ng serve
  
  # Angular application + functions using wrangler
  npx wrangler pages dev --proxy 4200 -- ng serve --no-live-reload
```
## Contribute
Please feel free to send pull requests or let me know about your ideas. For everyone
who wants to add a new tool I will describe the needed implementation steps down below.
### 1. Create component
Create a new angular component for your tool inside the `src/app/tools` folder.
```bash
ng generate component my-component-name
```
### 2. Add @Tool to the component
All information about your tool is defined inside its component class using the @Tool class directive. This directive gets parsed by
[ToolDataService](https://github.com/ChillUpX/tectools/blob/master/src/app/services/tool-data.service.ts),
which then registers a route to your tool.
#### Categories
You can find the available categories inside [this enum](https://github.com/ChillUpX/tectools/blob/master/src/app/model/tool-category.ts). If you don't find a matching category, feel free to add a new one.
#### Icons
TEC.TOOLS uses [feathericons](https://feathericons.com/) or rather [angular-feather](https://www.npmjs.com/package/angular-feather) for displaying icons. Icons get loaded inside the `src/app/icons/icons.module.ts` module and can be used as described in the angular-feather documentation.
#### External data processors
If a tool sends data to any external service, this should be marked. Info about external or browser internal processing is displayed in the headline of the given tool.
#### Example directive
```typescript
@Tool(
  "DNS", // title
  ToolCategory.WEB, // category
  ["DNS"], // tags (used for search)
  "database", // icon name
  "Run dns queries (A, AAAA, MX, SRV, PTR, ...)", // description
  [ // list of external data processors
    new ExternalDataProcessor(
      "dns.google", // name
      "https://dns.google/" // url
    )
  ]
)
```

### 3. Reusable components
I tried to define several reusable components inside `src/app/components` which should help create new tools.
One mandatory component is `<tec-tool-head>`, which is responsible for showing the tool's details on the head of the page.
For usage examples you can skim through existing tools. :-)

## License
GPL-3.0
