module.exports = {
  render(data) {

    const copyYear = (from = 2024) => {
      const y = new Date().getFullYear()

      return y > from ? `${from} &ndash; ${y}` : from
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
    
        <link href="/src/style.css?v=2.1" type="text/css" rel="stylesheet">
    </head>
    <body class="p-0 bg-slate-900 text-slate-400">
      <div class="flex flex-col min-h-screen pt-12">
        <main class="flex-1 w-full max-w-5xl mx-auto px-4 md:px-8">
          <h1 class="text-2xl underline mb-4">
              <img src="/src/logo.svg" alt="mike healy" width="400">
          </h1>

          <div class="py-8">
            ${data.content}
          </div>

        </main>
        <footer class="p-8 bg-[#ed6437] text-slate-800">
          &copy; ${copyYear()}
        </footer>
      </div>
    </body>
    </html>`
  }
}
