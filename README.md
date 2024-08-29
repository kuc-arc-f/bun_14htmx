# bun_14htmx

 Version: 0.9.1

 Author  :

 date    : 2024/08/26

 update : 2024/08/28  

***

Bun + htmx + Express


***
### build

* build, dev-start, watch

```
bun run build
bun run dev

#watch-mode
bun run watch
```

***
* vercel.json

```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog

* https://knakatech-blog.pages.dev/posts/128

***
# License

* MIT

***

