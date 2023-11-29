import sekeronTheme from "./SekeronTheme";
import { Theme } from "@mui/material";

const { palette, shape, breakpoints } = sekeronTheme;

const OverridedThemes: Theme = {
  ...sekeronTheme,
  components: {
    ...sekeronTheme.components,
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        h1: {
          [breakpoints.up("sm")]: {
            fontSize: "3rem",
            fontFamily: "Comfortaa-Bold",
          },

          [breakpoints.down("sm")]: {
            fontSize: "2.5rem",
            fontFamily: "Comfortaa-Bold",
          },
        },
        h2: {
          [breakpoints.up("sm")]: {
            fontSize: "1.7rem",
            fontFamily: "Comfortaa-Regular",
          },

          [breakpoints.down("sm")]: {
            fontSize: "1.7rem",
            fontFamily: "Comfortaa-Regular",
          },
        },
        h4: {
          [breakpoints.down("sm")]: {
            fontSize: "1.1rem",
            fontFamily: "Comfortaa-Regular",
          },
        },
        h6: {
          [breakpoints.down("sm")]: {
            fontSize: "1.4rem",
            fontFamily: "Comfortaa-Regular",
          },
        },
        body1: {
          [breakpoints.up("sm")]: {
            fontSize: "1.4rem",
            fontFamily: "Comfortaa-Regular",
          },

          [breakpoints.down("sm")]: {
            fontSize: "1.3rem",
            fontFamily: "Comfortaa-Regular",
          },
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: palette.background.default,
    //     },
    //   },
    // },
    MuiButton: {
      ...sekeronTheme.components?.MuiButton,
      styleOverrides: {
        root: {
          // fontFamily: "Comfortaa-Regular",
          textTransform: "capitalize",
          borderRadius: shape.borderRadius,
          fontSize: "1.7rem",
          color: "#fff",
          [breakpoints.down("sm")]: {
            fontSize: "1.4rem",
          },
          [breakpoints.between("lg", "xl")]: {
            fontSize: "1.6rem",
            paddingLeft: 20,
            paddingRight: 20,
            height: "5rem"
          },
        },
        containedPrimary: {
          backgroundImage: "linear-gradient(288deg, #4fd8cc, #5c88ff);",
          padding: "1rem 2rem"
        },
        outlinedPrimary: {
          border: "1px solid #979797",
          padding: "1rem 2rem",
          "&:hover": {
            border: "1px solid #979797",
          },
        },
      },
    },
    MuiAvatar: {
      ...sekeronTheme.components?.MuiAvatar,
      styleOverrides: {
        img: {
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.common.black,
          maxWidth: 500,
        },
        arrow: {
          "&::before": {
            backgroundColor: palette.common.black,
          },
        },
      },
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          "&&&": {
            zIndex: 3000,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
  },
};

export default OverridedThemes;
