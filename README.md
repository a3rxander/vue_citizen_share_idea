# vue_citizen_share_idea

## Firebase Rules
```
{
  "rules":
  {
    "propuestas":
    {
      "$propuestasId":
      {
        "$thumbs":
        {
          ".read":true,".write":true,
        },
         ".read": "auth != null",
         ".write":"auth != null && $propuestasId == auth.uid",
      },
      ".read": "auth != null",
    }
  }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# vue_citizen_share_idea" 
