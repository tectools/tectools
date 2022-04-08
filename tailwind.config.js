module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1': 'auto 1fr',
        'auto-center': 'auto 1fr auto',
        'lr': '1fr auto 1fr'
      },
      gridTemplateRows: {
        'auto-mid': 'auto 1fr auto',
      },
      colors: {
        'primary':'#00254b',
        'mid':'#0564B5',
        'secondary':'#0A89E5',
      },
      fontSize: {
        'tiny': '0.625rem'
      }
    },
  },
  plugins: [],
}
0
