import { Box, Stack, SxProps, Theme } from "@mui/material";
import { useResponsive } from "../Hooks/useResponsive";
import { JSX } from "react";

interface Props {
  sx?: SxProps<Theme>;
  startElement?: JSX.Element[];
  centerElement?: JSX.Element[];
  endElement?: JSX.Element[];
  isOnlyStack?: boolean;
}

const GrayHeader = ({
  sx = {},
  startElement = [<></>],
  centerElement = [<></>],
  endElement = [<></>],
  isOnlyStack = false,
}: Props) => {
  const upLg = useResponsive("up", "lg");

  return (
    <Box
      sx={
        isOnlyStack
          ? sx
          : {
              ...{
                backgroundColor: (theme) => theme.palette.action.hover,
                boxShadow: (theme) => theme.shadows[1],

                px: 2,
                py: 0.5,

                mb: 1,
                borderRadius: (theme) => theme.shape.borderRadius,
              },
              ...sx,
            }
      }
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        overflow={"auto"}
        spacing={upLg ? 0 : 2}
        maxWidth={upLg ? "100%" : isOnlyStack ? "100vw" : "calc(100vw - 48px)"}
        height={"100%"}
      >
        <Stack
          direction={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          width={upLg ? "33%" : undefined}
          spacing={2}
        >
          {...startElement}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={upLg ? "33%" : undefined}
          spacing={2}
        >
          {...centerElement}
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
          width={upLg ? "33%" : undefined}
          spacing={2}
        >
          {...endElement}
        </Stack>
      </Stack>
    </Box>
  );
};

export default GrayHeader;
