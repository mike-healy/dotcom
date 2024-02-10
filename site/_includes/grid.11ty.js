module.exports = {
  render(data) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <meta name="robots" content="noindex">

      <title>${data.title}</title>

      <link href="/src/style.css?v=2.1" type="text/css" rel="stylesheet">
    </head>
    <body class="p-0 bg-slate-900 text-slate-400">
      <div class="flex flex-col min-h-screen pt-8 md:pt-12">
        <main class="flex-1 px-4 md:px-0 md:grid grid-cols-[1fr,46rem,1fr]">
          ${data.content}
        </main> <!-- /grid container -->

        <footer class="p-8 bg-[#ed6437] text-slate-800">
          &copy; 1972 - GRID SYSTEM
        </footer>
      </div>
    </body>
    </html>`
  }
}
