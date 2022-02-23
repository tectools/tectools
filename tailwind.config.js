module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1': 'auto 1fr',
        'auto-center': 'auto 1fr auto',
      },
      gridTemplateRows: {
        'auto-mid': 'auto 1fr auto',
      },
      colors: {
        'primary':'#00254b',
        'secondary':'#0A89E5',
      }
    },
  },
  plugins: [],
}
0
