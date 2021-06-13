# Welcome to my portfolio 👋
![Version](https://img.shields.io/badge/Version-1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](#)
[![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

> This is my portfolio, here I will show to you my skills, projects, a piece of my history as web developer, among other things.

### 🏠 [Homepage](https://icarodev.ga)

## :bookmark_tabs: Content

- [:zap: Features](#features-zap)
- [:hammer_and_pick: Usage](#usage-hammer_and_pick) <br>
&nbsp;&nbsp; - [:gear: Firebase Configuration](#firebase-configuration-gear)<br>
- [:sparkles: Observations](#observations-sparkles)
- [:handshake: Show your support](#show-your-support-handshake)
- [:technologist: Author](#author-technologist)

---

## Features :zap:
[![Deployed in Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://icarodev.ga)
[![Vuejs](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=Vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Vitejs](https://img.shields.io/badge/Vite.js-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![EmailJs](https://github.com/PatoGordo/PatoGordo/blob/main/Images/EmailJsBadge.svg)](https://www.emailjs.com/)

## Usage :hammer_and_pick:

### Firebase configuration :gear:
- Open the 'src/firebase.ts' and put there your firebase app credentitals.
```js
  const firebaseApp = firebase.initializeApp({
    apiKey: "<Your-Firebase-ApiKey>",
    authDomain: "<Your-Firebase-AuthDomain>",
    databaseURL: "<Your-Firebase-DatabaseURL>",
    projectId: "<Your-Firebase-ProjectId>",
    storageBucket: "<Your-Firebase-StorageBucket>",
    messagingSenderId: "<Your-Firebase-MessagingSenderId>",
    appId: "<Your-Firebase-AppId>"
  })
```
- Change your firebase firestore rules
```js
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow create: if request.auth == null;
        allow read, write: if request.auth.uid == '<Your-Admin-UID>';
        allow read: if request.auth.uid == '<Your-Observer-UID>'; // Optional
      }
    }
  }
```
***

## Show your support :handshake:

Give a ⭐️ if this project helped you!<br>
Makes a [pull request](https://github.com/PatoGordo/icarodevts.ga/pulls) adding new features or solving bugs. <br>
Create a [Issue](https://github.com/PatoGordo/icarodevts.ga/issues) if you don't want to implement the feature or fix the bug. <br>

## Author :technologist:

**PatoGordo**

* Website: [https://patogordo.ga](https://icarodev.ga) <br>
* Github: [@PatoGordo](https://github.com/PatoGordo) <br>

***
