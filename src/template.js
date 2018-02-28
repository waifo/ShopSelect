export default ({ body,title }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="Description" content="Online site to buy anything">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="theme-color" content="#ffffff">
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" defer>
        <link rel="manifest" href="./manifest.json">
        <link rel="stylesheet" href="/assets/css/main.css"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <script src='./assets/bundle/bundle.js' defer></script>
        <title>${title}</title>
    </head>
    <body>
        <div id="app"> ${body}</div>
    </body>
    <noscript>Browser does not support Javascript</noscript>
    </html>
    `
  }


  