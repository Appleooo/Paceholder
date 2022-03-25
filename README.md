# Paceholder

## Installation
Packages need to be installed on your local environment: use Homebrew to intall Node, Watchman, React Native CLI, cocoapos

```bash
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
$ sudo gem install cocoapods
```

## Run IOS App 

Step 1: Go to Paceholder_code folder:
```bash
$ cd Paceholder_code
```

Step 2: Start your application(2 options). 
```bash
$ react-native run-ios
```

## After Install a framework
Make sure you tun pod install after npm install a framwork
```bash
$ npx pod-install ios
```

## After add Font
```bash
$ react-native link
```