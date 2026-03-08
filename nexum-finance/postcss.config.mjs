const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            nexum: {
              green: '#00C853', // O verde vibrante do teu logo
              black: '#000000',
              dark: '#0A0A0A',  // Um cinza quase preto para cartões/cards
            },
          },
        },
},
    },
  },
};

export default config;
