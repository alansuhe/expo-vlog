# ReactNative Expo --- Vlog

## 常用命令

```
// start
npx expo start

// start with ... simulator
npx expo start --ios

// start clear cache
npx expo start --clear

// 在安装配置了react-native-google-mobile-ads后，启动命令：
npx expo run:ios

// prebuild后，清除缓存启动命令：
<!-- npx expo run --clean -->

```

## Debug
vscode插件: Expo Tools

## Notes

- Expo 不用再执行pod install

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
- Admob组件后续

再也不能用expo go运行了

```
# For iOS
npx expo prebuild
npx expo run:ios

# For Android
npx expo prebuild
npx expo run:android

```

- 对于定制化原生组件
```
// Re-run npx expo prebuild to sync the changes before rebuilding the native app. This process often involves tasks like adding required permissions to the AndroidManifest.xml or Info.plist.

npx expo prebuild

// For complex plugins, consider running npx expo prebuild --clean. This command will delete and re-generate the native directories from scratch.
npx expo prebuild --clean

```

- 找不到默认页面///的问题
```
// 来自expo官网
// 不能随便改index的名字

When a file is created in the app directory, it automatically becomes a route in the app. For example, the following files will create the following routes:

app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon

```

- 启动时找不到ios模拟器问题
```
// 用xcode打开运行一次，就恢复了（已经prebuild的情况）


```
