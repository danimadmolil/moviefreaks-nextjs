import { Box, Button, CircularProgress, Grid, styled } from "@mui/material";
import React from "react";
import { IconButton, Skeleton, Paper, Badge, Typography } from "@mui/material";
import {
  Search,
  ArrowDownward,
  ArrowDropDown,
  ArrowDownwardSharp,
  RingVolume,
  Add,
} from "@mui/icons-material";
import Image from "next/image";
const Container = styled(Grid)(({ theme }) => ({
  width: "100%",
  background: "#182131",
  padding: "0 130px",
  alignItems: "center",
}));
const Brand = styled(Box)(({ theme }) => ({
  width: "121px",
  height: "100%",
  marginRight: "auto",
}));

function GlobalSearch() {
  return (
    <Grid
      component={Paper}
      container
      sx={{
        paddingLeft: "29px",
        background: "#2B3442",
        maxWidth: "398px",
        height: "52px",
        borderRadius: "30px",
        overflow: "hidden",
      }}>
      <Box
        placeholder="search ..."
        component={"input"}
        sx={{
          width: "80%",
          background: "transparent",
          outline: "none",
          color: "white",
          border: "none",
        }}
        type={"text"}
      />
      <IconButton sx={{ width: "50px", height: "50px" }}>
        <Search />
      </IconButton>
    </Grid>
  );
}
export default function Header() {
 

  return (
    <Container
      container
      justifyContent={"space-between"}
      sx={{ height: ["40px", "50px", "60px", "90px", "90px"] }}>
      <Brand>
        <Skeleton
          sx={{ background: "black", width: "100%", height: "100%" }}
          variant="rectangular"></Skeleton>
      </Brand>
      <GlobalSearch />
      {/* <UserComponents user={data?.user} status={status} /> */}
    </Container>
  );
}

type Status = "authenticated" | "loading" | "unauthenticated";
function UserComponents({
  status,
}: {
  status: Status;
  
}) {
  return (
    <Grid
      gap="44px"
      container
      wrap="nowrap"
      alignItems={"center"}
      sx={{
        marginLeft: "222px",
        width: "496px",
        height: "52px",
        padding: "0 8px",
      }}>
      {status === "unauthenticated" && (
        <Button >SignIn</Button>
      )}
      {status === "loading" && (
        <>
          <CircularProgress
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50px",
              height: "50px",
              ".MuiCircularProgress-root": {
                width: "50px",
                height: "50px",
              },
            }}
          />
          <Skeleton
            variant="circular"
            sx={{
              background: "black",
              width: "100%",
              height: "100%",
            }}></Skeleton>
        </>
      )}
      {status === "authenticated" && (
        <>
          <IconButton sx={{ width: "25px", height: "25px" }}>
            <Add sx={{ color: "white" }} />
          </IconButton>

          <Badge
            badgeContent=""
            color="success"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <RingVolume />
          </Badge>
          <Grid container sx={{ width: "auto" }} alignItems={"center"}>
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "50px",
                height: "50px",
              }}>
             
            </Box>
            <Typography sx={{ ml: "24px" }}>user name</Typography>
            <IconButton>
              <ArrowDownwardSharp sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Button >SignOut</Button>
        </>
      )}
    </Grid>
  );
}
