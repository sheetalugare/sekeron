import {
  styled,
  toolbarClasses,
  avatarClasses,
  typographyClasses,
  buttonClasses,
  css,
  cardClasses,
  cardMediaClasses,
  cardContentClasses,
  cardHeaderClasses,
} from "@mui/material";

type LandingPageStyleProps = {
  isSmallScreen?: boolean;
  heroSectionBg?: string;
};

const LandingPageStyleWrapper = styled("div") <LandingPageStyleProps>`
  & {
    overflow-x: hidden;
    width: 100%;
  }
  & .${toolbarClasses.root} {
    justify-content: space-between;
    &
      .${avatarClasses.root}${({ isSmallScreen }) =>
    isSmallScreen ? "" : ":not(:last-child)"} {
      width: 130px;
      height: 80px;
      & .${avatarClasses.img} {
        object-fit: contain;
      }
    }
  }
  .section-title {
    font-family: "Nunito";
    font-weight: 300;
    color: ${({ theme }) => theme.palette.grey[700]};
    & strong {
      color: ${({ theme }) => theme.palette.common.white};
      font-family: "Golos Text";
      font-weight: 600;
    }
  }
  .main {
    text-align: center;
    margin: 6rem 0;
  }
  & .hero-section-grid-container {
    position: relative;
    height: 80vh;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    background: url(${({ heroSectionBg }) => heroSectionBg}) no-repeat center /
      cover;
    &:after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      height: 20vh;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.64),
        rgba(0, 0, 0, 0) 97%
      );
    }
    & .${avatarClasses.root} {
      width: 100%;
      height: 100%;
    }
    & .${typographyClasses.root} {
      line-height: 1.5;
      font-weight: 300;
      font-family: "Nunito";
      color: ${({ theme }) => theme.palette.grey[700]};
      & strong {
        color: ${({ theme }) => theme.palette.common.white};
        font-family: "Golos Text";
        font-weight: 700;
      }
    }
    & .${buttonClasses.containedPrimary} {
      margin: 3rem 0;
    }
  }
  & .artist-section {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    /* height: 90vh; */
    justify-content: space-around;
    &
      .${cardClasses.root},
      &
      .${cardMediaClasses.root},
      &
      .${cardContentClasses.root} {
      background-color: ${({ theme }) => theme.palette.common.black};
    }
    & .category-card {
      /* flex: 0 0 25%; */
      /* border-radius: 48%; */
      /* background-image: linear-gradient(to top, #000, #000),
        radial-gradient(circle at 50% 50%, #f1f1f1, #171616 80%);
      border-width: 2px;
      border-image-source: radial-gradient(
        circle at 50% 50%,
        #f7f7f7,
        #171616 73%
      );
      border-style: solid;
      background-clip: content-box, border-box;
      border-image-slice: 0;
      background-origin: border-box;
      & .${cardMediaClasses.root} {
        width: 65%;
        margin: auto;
      } */
    }
  }
  & .blog-section {
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    justify-content: space-around;
    &
      .${cardClasses.root},
      &
      .${cardHeaderClasses.root},
      &
      .${cardContentClasses.root} {
      background-color: ${({ theme }) => theme.palette.common.black};
    }
    & .${cardClasses.root} {
      border-width: 2px;
      border-style: solid;
      background-image: linear-gradient(to bottom, #000, #000),
        radial-gradient(circle at 50% 50%, #f7f7f7, #171616 73%);
      border-image-source: radial-gradient(
        circle at 50% 50%,
        #f7f7f7,
        #171616 53%
      );
      border-image-slice: 0;
      background-origin: border-box;
      background-clip: content-box, border-box;
      /* &:hover {
        background-image: linear-gradient(
          237deg,
          #fff 91%,
          rgba(238, 238, 238, 0.44) 4%
        );
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
      } */
    }
  }
  & .device-feature-section {
    margin: 6rem 0;
    & .store-button {
      height: 6vh;
      width: 12vw;
      margin-top: 2rem;
      /* border: "1px solid #f7f7f7"; */
      cursor: pointer;
      & .${avatarClasses.img} {
        object-fit: fill;
      }
    }
  }

  ${({ isSmallScreen }) =>
    isSmallScreen &&
    css`
      /* styles responsiveness */
      & {
        overflow-x: hidden;
        width: 100%;
        & .main {
          margin: 5rem 0 2rem;
        }
        & .section-title {
          text-align: center;
        }
        & .${typographyClasses.h6} {
          margin: 0 3rem;
        }
      }
      & .${toolbarClasses.root} {
        justify-content: center;
      }
      & .hero-section-grid-container {
        height: auto;
        margin-top: 2rem;
        background: url(../../assets/landing-page-images/grid.svg) no-repeat
          center / contain;
        &:after {
          background-image: none;
        }
        /* & > :last-of-type{
            display: flex;
          } */
      }
      & .artist-section,
      .blog-section {
        height: auto;
      }
      & .artist-section {
        margin-left: calc(2rem * 1);
        margin-right: calc(2rem * 1);
        & .${cardClasses.root} {
          flex: 0 0 60%;
        }
      }
      & .blog-section {
        justify-content: center;
        gap: 2rem;
        margin-left: calc(2rem * 1);
        & .blog-item {
          flex: 0 0 95%;
        }
        & .embla-thumbs {
          min-width: 0;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          padding:0;
          border: solid 1px #cacaca;
          transition: background-image 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        & .selected {
          min-width: 0;
          width: 10px;
          height: 10px;
          padding: 0px;
          margin: 0 4px 0 0;
          background-image: radial-gradient(
            circle at 50% 50%,
            #eee,
            #797878 71%
          );
        }
      }
      & .device-feature-section {
        justify-content: center;
        /* row-gap: 5rem; */
        .sec-text {
          font-family: "Golos Text";
          font-weight: 600;
          color: #fff;
        }
      }
    `};
  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    /* & .${toolbarClasses.root} {
      padding: 0 3rem;
    } */
    &&& .sekeron-logo {
      width: 200px;
      height: 120px;
    }
    & .artist-section {
      & .${cardClasses.root} {
        flex: 0 0 25%;
      }
    }
    & .main {
      font-size: 5rem;
    }
    & .hero-section-grid-container,
    & .device-feature-section {
      & .${typographyClasses.h1} {
        font-size: 5rem;
      }
    }
    & .blog-section {
      & .${typographyClasses.h2} {
        font-size: 2.5rem;
      }
      & .${typographyClasses.body2} {
        font-size: 1.4rem;
      }
    }
  };

${({ theme }) => theme.breakpoints.up("xl")}{
    & .blog-section {
      & .${typographyClasses.h2} {
        font-size: 3.6rem;
      }
      & .${typographyClasses.body2} {
        font-size: 1.7rem;
      }
    }
  }


`;
export { LandingPageStyleWrapper };
