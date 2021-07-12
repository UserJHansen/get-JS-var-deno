# Get JS variable Deno 🦕

Fetch a Javascript variable from html or js string **without** evaling the page

# Setup

```ts
import { FindVariable } from "https://deno.land/x/get_js_var/mod.ts";

//
// Code for Example.org withadded script tag that set the TargetVar variable
//
const target = "TargetVar";

const html =
  "<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset='utf-8' />\n    <meta http-equiv='Content-type' content='text/html; charset=utf-8' />\n    <meta name='viewport' content='width=device-width, initial-scale=1' />\n    <style type='text/css'>\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>\n	 <script>\n	 	var TargetVar = 1\n	 </script>\n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href='https://www.iana.org/domains/example'>More information...</a></p>\n</div>\n</body>\n</html>\n";

const result = FindVariable(target, html);

console.log(result);
```
