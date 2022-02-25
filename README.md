![alt text](https://raw.githubusercontent.com/ChillUpX/tectools/master/src/assets/header.png)

TEC.TOOLS is a collection of tools that everyone working in IT could make use of.

## Development
TEC.TOOLS is an angular application. For local testing just clone the repo, setup the dependencies and start the dev server.
```bash
  npm install
  ng serve
```

## Contribute
Please feel free to send pull requests or let me know about your ideas. For everyone who wants to add a new tool I will describe the needed implementation steps down below.
### 1. Create component
Create a new angular component for your tool inside the `src/app/tools` folder.
```bash
ng generate component my-component-name
```
### 2. Add @Tool to the component
The needed information about your tool is defined using a @Tool directive. This directive gets parsed by
[ToolDataService](https://github.com/ChillUpX/tectools/blob/master/src/app/services/tool-data.service.ts),
which registers a route to your tool containing your specified data.

#### Categories
You can find the available categories inside [this enum](https://github.com/ChillUpX/tectools/blob/master/src/app/model/tool-category.ts). If you dont find a matching category, feel free to add a new one.
#### Icons
TEC.TOOLS uses [feathericons](https://feathericons.com/) or rather [angular-feather](https://www.npmjs.com/package/angular-feather) for displaying icons. Icons get loaded inside the `src/app/icons/icons.module.ts` module and can be used as described in the angular-feather documentation.
#### External data processors
If a tool sends data to any external service, this should be marked and gets displayed in the headline of the given tool.
#### Example directive
```typescript
@Tool(
  "UUIDv4", // titel
  ToolCategory.GENERATOR, // category (used for filter on dashboard)
  ["URL"], // array of tags (used for search)
  "settings", // icon
  "Encode or decode uri strings", //description
  [ // List of external data processors
    new ExternalDataProcessor(
        "dns.google", // Name
        "https://dns.google/" // URL
    )
  ]
)
```
### 3. Reusable components
I tried to define several reusable components inside `src/app/components` which should help creating new tools.
One mandatory component is `<tec-tool-head>`, which is responsible for showing all tool details on the head of the page. For usage examples you can skim through the existing tools. :-)

## License
GPL-3.0
