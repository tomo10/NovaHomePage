/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  primary: {
    main: "#ff7f50",
    focus: "#ff7f50",
  },
  secondary: {
    main: "#7b809a",
    focus: "#8f93a9",
  }, 
 */

const palette = {
  brightTurquoise: "#00ECC2",
  coral: "#FF7C52",
  redOrange: "#ff7f50",
};

const onBackground = "#ffffff";

export default {
  background: {
    default: "#f0f2f5",
  },

  text: {
    // main: "#7b809a",
    main: onBackground,
    focus: "#7b809a",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
    light: "#000000",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: palette.redOrange,
    focus: palette.redOrange,
  },

  secondary: {
    main: palette.brightTurquoise,
    focus: palette.brightTurquoise,
  },

  // info: {
  //   main: "#758BFD",
  //   focus: "#5e79fd",
  // },

  // info: {
  //   main: "#27187E",
  //   focus: "#3521AB",
  // },

  info: {
    main: "#8BE8CB",
    focus: "#AAEED9",
  },

  success: {
    main: "#4CAF50",
    focus: "#67bb6a",
  },

  warning: {
    main: "#fb8c00",
    focus: "#fc9d26",
  },

  error: {
    main: "#F44335",
    focus: "#f65f53",
  },

  light: {
    main: "#f0f2f5",
    focus: "#f0f2f5",
  },

  dark: {
    main: "#344767",
    focus: "#2c3c58",
  },

  grey: {
    100: "#f8f9fa",
    200: "#f0f2f5",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  gradients: {
    primary: {
      main: "#ff7f50",
      state: "#fb8c00",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    // info: {
    //   main: "#758BFD",
    //   focus: "#5e79fd",
    // },

    // info: {
    //   main: "#27187E",
    //   focus: "#3521AB",
    // },

    info: {
      main: "#8BE8CB",
      focus: "#AAEED9",
    },
    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  badgeColors: {
    primary: {
      background: "#ff7f50",
      text: "#cc084b",
    },

    secondary: {
      background: "#d7d9e1",
      text: "#6c757d",
    },

    // info: {
    //   background: "#49a3f1",
    //   text: "#1A73E8",
    // },

    // info: {
    //   main: "#27187E",
    //   focus: "#3521AB",
    // },

    info: {
      main: "#8BE8CB",
      focus: "#AAEED9",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  coloredShadows: {
    primary: "#ff7f50",
    secondary: "#110e0e",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  inputBorderColor: "#d2d6da",

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};
