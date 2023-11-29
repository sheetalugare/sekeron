import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageAssets from "../../assets";
import { Theme, useMediaQuery } from "@mui/material";
import { LandingPageStyleWrapper } from "./LandingPage.style";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

type PlatformItemProps = {
  id: number;
  icon: string;
};
type CarouselItemProps = {
  id: number;
  src: string;
  content: string;
};

type BlogItemProps = {
  id: number;
  icon: string;
  name: string;
  description: string;
};

const carouselItems: CarouselItemProps[] = [
  {
    id: 1,
    src: ImageAssets.ic_music,
    content: "Visual Art",
  },
  {
    id: 2,
    src: ImageAssets.ic_dance,
    content: "Music",
  },
  {
    id: 3,
    src: ImageAssets.ic_designer,
    content: "Dance",
  },
  {
    id: 4,
    src: ImageAssets.ic_visual_art,
    content: "Designers",
  },
  {
    id: 5,
    src: ImageAssets.ic_fashion,
    content: "Fashion",
  },
];

const blogItems: BlogItemProps[] = [
  {
    id: 1,
    icon: ImageAssets.ic_create,
    name: "Create",
    description:
      "Upload your work and talent using photos, audio, video and an in-built text card tool to showcase your creativity to other artists worldwide on Sekeron",
  },
  {
    id: 2,
    icon: ImageAssets.ic_connect,
    name: "Connect",
    description:
      "Create projects, find the right artists, and collaborate smoothly using Collab Space with access to collaboration tools",
  },
  {
    id: 3,
    icon: ImageAssets.ic_collaborate,
    name: "Collaborate",
    description:
      "Upload your work and talent using photos, audio, video and an in-built text card tool to showcase your creativity to other artists worldwide on Sekeron",
  },
  {
    id: 4,
    icon: ImageAssets.ic_explore,
    name: "Explore",
    description:
      "Search or discover an extensive collection of artists, projects, and posts, thoughtfully tailored to suit your interests and creative preferences",
  },
  {
    id: 5,
    icon: ImageAssets.ic_manage,
    name: "Manage",
    description:
      "Streamline your project management with your own Dashboard that keeps your tasks, meetings, and deadlines organised at one place",
  },
  {
    id: 6,
    icon: ImageAssets.ic_inspire,
    name: "Inspire",
    description:
      "Inspire and be inspired within a global network of artists from all art forms, all ready to share, learn, and thrive together",
  },
];

const platformItems: PlatformItemProps[] = [
  { id: 1, icon: ImageAssets.ic_platform_1 },
  { id: 2, icon: ImageAssets.ic_platform_2 },
  { id: 3, icon: ImageAssets.ic_platform_3 },
  { id: 4, icon: ImageAssets.ic_platform_4 },
  { id: 5, icon: ImageAssets.ic_platform_5 },
  { id: 6, icon: ImageAssets.ic_platform_6 },
  { id: 7, icon: ImageAssets.ic_platform_7 },
];

const OPTIONS: EmblaOptionsType = {
  align: "start",
  // dragFree: true,
  loop: true,
  startIndex: 2,
  slidesToScroll: 1,
  breakpoints: { "(max-width: 768px)": { startIndex: 1 } },
};

const BLOG_OPTIONS: EmblaOptionsType = {
  breakpoints: {
    "(max-width: 768px)": {
      startIndex: 1,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
    },
  },
};

const QRCode = () => (
  <Avatar
    sx={{ width: 20, height: 20 }}
    src={ImageAssets.ic_qr_code}
    alt="qr-code"
  />
);

const Item = (props: Omit<CarouselItemProps, "id">) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { src, content } = props;
  return (
    // <Card>
    <Avatar
      className="category-card"
      // component="img"
      sx={{
        objectFit: "contain",
        height: hidden ? "35rem" : "49rem",
        width: hidden ? "25rem" : "35rem",
      }}
      src={src}
      alt={content}
    />

    // </Card>
  );
};

const BlogItem = (props: Omit<BlogItemProps, "id">) => {
  const { icon, name } = props;

  return (
    <Avatar
      style={{ width: "100%", height: "100%" }}
      src={icon}
      alt={name}
      imgProps={{
        sx: {
          objectFit: "contain",
        },
      }}
    />
  );
};

const Landing = () => {
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel(OPTIONS, [Autoplay()]);
  const [blogEmblaRef, emblaApi] = useEmblaCarousel(BLOG_OPTIONS);
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const s

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleNavigate = () => {
    navigate("/coming-soon");
  };

  return (
    <LandingPageStyleWrapper
      isSmallScreen={hidden}
      heroSectionBg={ImageAssets.ic_grid_bg}
    >
      <AppBar position="static">
        <Toolbar>
          <Avatar
            className="sekeron-logo"
            src={ImageAssets.ic_header_logo}
            alt="header-logo"
            variant="square"
          />
          <Stack
            bgcolor={"#000"}
            width={hidden ? "100%" : "auto"}
            justifyContent={"center"}
            padding={hidden ? "2rem 0.5rem" : "0"}
            position={hidden ? "fixed" : "relative"}
            bottom={0}
            zIndex={3}
            columnGap={4}
          >
            <Button
              variant="outlined"
              startIcon={hidden ? undefined : <QRCode />}
              onClick={handleNavigate}
            >
              Get Sekeron App
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNavigate}
            >
              Sign Up / Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Grid container className="hero-section-grid-container">
        <Grid item xs={11} sm={11} md={5} lg={6} xl={6}>
          <Avatar
            variant="square"
            src={ImageAssets.ic_hero_section_vector}
            alt="hero section vector"
          />
        </Grid>
        <Grid
          item
          xs={7}
          sm={7}
          md={5}
          lg={4}
          xl={4}
          textAlign={hidden ? "center" : "left"}
        >
          <Typography variant={"h1"}>
            {"Be the "}
            <strong>ARTIST</strong>
          </Typography>

          <Typography
            variant={"h1"}
            component={hidden ? Stack : "h1"}
            columnGap={1}
            justifyContent={hidden ? "center" : "flex-start"}
          >
            {"you "}
            <strong>WANT</strong>
            <Typography variant={"h1"}>
              {"to "}
              <strong>BE</strong>
            </Typography>
          </Typography>

          <Button variant="contained" color="primary" onClick={handleNavigate}>
            Explore Sekeron
          </Button>
        </Grid>
      </Grid>
      <Box className="artist-section">
        <Typography className="section-title main" variant={"h1"}>
          <strong>All artists</strong>&nbsp;
          {"find a home here"}
        </Typography>

        <Box ref={emblaRef} sx={{ overflowX: "hidden" }}>
          <Stack style={{ columnGap: "3.6rem" }}>
            {carouselItems.map(({ id, ...item }: CarouselItemProps) => (
              <Item key={id} {...item} />
            ))}
          </Stack>
        </Box>
      </Box>
      <Box className={"blog-section"}>
        <Typography className="section-title main" variant={"h1"}>
          What&apos;s in it for <strong>you</strong>
        </Typography>
        <Box ref={hidden ? blogEmblaRef : null}>
          <Grid
            component={hidden ? Stack : "div"}
            container={!hidden}
            sx={{
              gap: {
                xs: 3,
                xl: 4,
              },
            }}
            justifyContent={hidden ? "flex-start" : "center"}
          >
            {blogItems.map(({ id, ...item }: BlogItemProps) => (
              <Grid
                className="blog-item"
                item={!hidden}
                key={id}
                xs={hidden ? undefined : 7}
                sm={hidden ? undefined : 7}
                md={3}
                lg={3.5}
                xl={3}
              >
                <BlogItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {hidden ? (
          <Stack justifyContent={"center"}>
            {blogItems.map((_, index) => (
              <Button
                onClick={() => scrollTo(index)}
                className={`embla-thumbs ${
                  index === selectedIndex ? "selected" : ""
                }`}
              ></Button>
            ))}
          </Stack>
        ) : null}
      </Box>

      <Grid
        className="device-feature-section"
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid
          order={hidden ? 2 : 1}
          item
          xs={10}
          sm={10}
          md={6}
          lg={6}
          xl={6}
          sx={{
            height: "100%",
            background: hidden
              ? "none"
              : `url(${ImageAssets.sekeron_bg_logo}) no-repeat left / 70%`,
          }}
        >
          <Grid
            container
            height={"100%"}
            justifyContent={"space-evenly"}
            columnGap={3}
          >
            {hidden ? null : (
              <Grid
                component={Stack}
                flexDirection={"column"}
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
              >
                {platformItems.map((item) => (
                  <Avatar
                    sx={{
                      flex: 1,
                      width: 80,
                      height: 80,
                      "&:nth-child(even)": {
                        alignSelf: "flex-end",
                      },
                    }}
                    key={item.id}
                    src={item.icon}
                  />
                ))}
              </Grid>
            )}
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              height={hidden ? "50vh" : "100vh"}
              sx={{
                background: `url(${ImageAssets.ic_i_phone_12_pro}) no-repeat center / contain`,
              }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid order={hidden ? 1 : 2} item xs={10} sm={10} md={5} lg={5} xl={5}>
          <Typography className="section-title" variant={"h1"} lineHeight={1.5}>
            {"One "}
            <strong>Platform</strong>
          </Typography>
          <Typography className="section-title" variant={"h1"} lineHeight={1.5}>
            <strong>Endless</strong>&nbsp;
            {"Possibilities "}
          </Typography>
          <Typography className="section-title" variant={"h6"} lineHeight={2}>
            {"Sekeron app is available on both Android and IOS"}
          </Typography>
          {hidden ? null : (
            <Stack columnGap={3}>
              {[ImageAssets.ic_app_store, ImageAssets.ic_google_play].map(
                (src) => (
                  <Avatar
                    key={src}
                    src={src}
                    className="store-button"
                    variant="rounded"
                  />
                )
              )}
            </Stack>
          )}
        </Grid>
      </Grid>

      <Grid
        className="device-feature-section"
        container
        justifyContent={hidden ? "center" : "flex-end"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={3}
          lg={3}
          xl={3}
          textAlign={hidden ? "center" : "left"}
        >
          <Box
            component={hidden ? Stack : "div"}
            columnGap={1}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <Typography
              className="section-title sec-text"
              variant={"h1"}
              lineHeight={1.5}
            >
              {"Create, "}
            </Typography>

            <Typography
              className="section-title sec-text"
              variant={"h1"}
              lineHeight={1.5}
            >
              {"Connect "}
            </Typography>
            <Typography
              className="section-title sec-text"
              variant={"h1"}
              lineHeight={1.5}
              marginBottom={"3rem"}
            >
              {"& Collaborate"}
            </Typography>
          </Box>
          <Button variant="contained" color="primary">
            {hidden ? "Explore Now" : "Start Now"}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          height={hidden ? "50vh" : "100vh"}
          sx={{
            background: hidden
              ? "none"
              : `url(${ImageAssets.sekeron_bg_logo}) no-repeat right / 40%`,
          }}
        >
          <Grid
            container
            height={"100%"}
            justifyContent={"flex-end"}
            columnGap={1}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              marginRight={hidden ? "-10rem" : 0}
              height={"100%"}
              sx={{
                background: hidden
                  ? `url(${ImageAssets.ic_macbook_pro_mockup}) no-repeat right / contain`
                  : `url(${ImageAssets.ic_macbook_pro_mockup}) no-repeat center / contain`,
              }}
            ></Grid>
            {hidden ? null : (
              <Grid
                component={Stack}
                flexDirection={"column"}
                item
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
              >
                {platformItems.map((item) => (
                  <Avatar
                    sx={{
                      flex: 1,
                      width: 80,
                      height: 80,
                      "&:nth-child(even)": {
                        alignSelf: "flex-end",
                      },
                    }}
                    key={item.id}
                    src={item.icon}
                  />
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </LandingPageStyleWrapper>
  );
};

export default Landing;
