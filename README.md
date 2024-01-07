# ReactNative Expo --- Vlog

## 常用命令

```
// start
npx expo start

// start with ... simulator
npx expo start --ios

// start clear cache
npx expo start --clear

```

## Debug
vscode插件: Expo Tools

## Tips

- Path alias

修改app.json(sdk > 49 后不需要)
```
"expo": {
    ...
    "experiments": {
        ...
      "tsconfigPaths": true
    }
  }
```

修改tsconfig.json
```
"compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "components/*"
      ],
      "@constants/*": [
        "constants/*"
      ],
      "@assets/*": [
        "assets/*"
      ],
    }
```