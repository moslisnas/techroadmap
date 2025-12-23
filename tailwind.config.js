module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        '0.25': '0.0625rem',
      },
      width: {
        '1': '0.25rem',
        '1.75': '0.4375rem',
        '5': '1.25rem',
        '8': '2.0rem',
        '10': '2.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '30': '7.5rem',
        '32': '8rem'
      },
      height: {
        '1': '0.25rem',
        '1.75': '0.4375rem',
        '5': '1.25rem',
        '8': '2.0rem',
        '10': '2.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '30': '7.5rem',
        '32': '8rem'
      },
      borderWidth: {
        '1': '1px',
        '4': '4px',
        '6': '6px',
      },
      zIndex: {
        '1': '1',
      },
      //Transformations
      scale: {
        '105': '1.05',
        '110': '1.10',
        '125': '1.25',
        '150': '1.5'
      },
      //Animations
      transitionDuration: {
        '900': '900ms',
      },
    }
  },
  plugins: []
};
