---
marp: true
---

# meijo-cup-result　説明資料

---
# 目次
- 使用している技術について
- システム構成について
−	コードを理解するための事前知識
- 各ソースコードの説明
-	システムの仕様について
- 
-
---
# 使用している技術
### フロントエンド
- Next.js　←　これについてはこの資料で説明します
### バックエンド
- Google Apps Scripts　←　これについては説明しません
### ホスティング
- Vercel　←　口頭で説明予定
---
#  システム構成について
---
# 概略図
![meijo-cup-result](https://github.com/user-attachments/assets/bbde8875-e57d-4469-b131-9e525f5f67a4)

---
---
# フォルダー構成
```sh
app
│  favicon.ico
│  globals.css
│  layout.js
│  mushin.otf
│  opengraph-image.jpg
│  page.js
│  twitter-image.jpg
│
├─api
│  └─hello
│          route.js
│
└─components
        Footer.jsx
        Header.jsx
        Result.jsx
        result.module.css
        SlideShow.jsx
```
---
# layout.jsについて
> 全体のソースコード
```js
import "@/app/globals.css"

export const metadata = {
  title: "第2回名城CUPレース結果",
  description: "第2回名城CUPのレース結果を確認することができます",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
```
> Next.jsの重要なファイルでエントリーポイントになる！！！という認識でOK
※ちなみに消しても復活します。あと気にしなくてよいです
---
# layout.jsについて
```js
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}

```
> この{children}の部分にpage.jsの内容がはいる。
ちなみにurlをクリックして初めに出るページがlayout.jsというイメージでとりまOK(雑すぎるが...)
---
# layout.jsについて
```js
import "@/app/globals.css"

export const metadata = {
  title: "第2回名城CUPレース結果",
  description: "第2回名城CUPのレース結果を確認することができます",
};
```
> import の部分はCSSをimportしています。これによりすべてのページでglobal.cssに書かれたレイアウトが反映されます.　　
export const meta の部分は,htmlでいうheadタグに書かれるtitleとdescriptionを設定しています.
---
# page.jsについて
> 全体のソースコード
```js  
import Result from "@/app/components/Result"

export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await rep.json();

  console.log(data)
     
  return (
         <main>
              <Result data={data} />
         </main> 
  );
}
```
---
# page.jsについて
```js
import Result from "@/app/components/Result"
```
> componentsフォルダー内にあるResult.jsxをimportしている
importすることでResultコンポーネントとして利用することができる.

---
# page.jsについて
```js
export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await rep.json();
　便宜上省略...
}
```
> fetch関数について
Next.jsの関数は,通常のjsのfetch関数が拡張されていて,
特に指定しない場合,getリクエストを送信される。
今回は.スプレッドシートのデータを取得するために使用
---
# page.jsについて
```js
export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await rep.json();
　便宜上省略...
}
```
> 定数 repにはHTTPレスポンスの結果が入る！
ちなみにHTTPのbodyの中にスプレッドシートのデータが入っている！！
なのでjson()という関数を使うとbodyを読み取ることで
スプレッドシートのデータを取得することができる！！


---
# page.jsについて(補足)
> **HTTPレスポンス**
```js
Response {
  status: 200,
  statusText: '',
  .........省略............
```
> **スプレッドシートのデータ(HTTPレスポンスのbody部分)**
```js
[
   {
    'ゼッケン番号': ,
    '選手名': 'オオガネカイト',
    '出場レース': '予備予選',
    '所属チーム': 'ボラ協botチーム',
    '順位入力': 3
   } ,
   ......スプレッドシートのDBシート行数分だけデータが増えます！
]
```
---
# page.jsについて
```js
 export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await rep.json();
  console.log(data)    
  return (
         <main>
              <Result data={data} />
         </main> 
  );
}
```
> <Result data={data}>でコンポーネント間のデータのやり取りをしている(fetchで取得したスプレッドシートのdataを受け渡していると

---
# Result.jsxについて
```js

```

