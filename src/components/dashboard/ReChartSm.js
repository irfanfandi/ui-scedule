"use client";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
} from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ReChartSm = ({ title, value, style = {}, valueChange, isUp }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, ...style }} elevation={1}>
      <Grid container>
        <Grid item xs={6}>
          <Typography>{title}</Typography>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            {value}
          </Typography>
          {isUp ? (
            <Grid
              container
              alignItems={"center"}
              justifyItems={"center"}
              mt={2}
            >
              <ArrowUpwardOutlined fontSize="medium" color="success" />
              <Typography color={"green"} sx={{ pl: 1 }} fontWeight={600}>
                {valueChange}
              </Typography>
              <Typography color={"inherit"} sx={{ pl: 1 }}>
                vs last month
              </Typography>
            </Grid>
          ) : (
            <Grid
              container
              alignItems={"center"}
              justifyItems={"center"}
              mt={2}
            >
              <ArrowDownwardOutlined fontSize="small" color="error" />
              <Typography color={"error"} sx={{ pl: 1 }} fontWeight={600}>
                {valueChange}
              </Typography>
              <Typography color={"inherit"} sx={{ pl: 1 }}>
                vs last month
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid item xs={6}>
          {isUp ? (
            <Image
              style={{ float: "right" }}
              alt=""
              width="130"
              height="130"
              src="/up.png"
            />
          ) : (
            <Image
              style={{ float: "right" }}
              alt=""
              width="130"
              height="130"
              src="/down.png"
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ReChartSm;
