import {
  CircularProgress,
  LinearProgress,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import * as Boot from "react-bootstrap";
import React, { useEffect, useState, useRef, useCallback } from "react";
import CodeBox from "../../components/CodeBox";
import DescBox from "../../components/DescBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
const { descContent } = require("../common.json");

function AnimationLabels({ id }) {
  const [type, setType] = useState("M");
  const [buffProgress, setBuffProgress] = useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (buffProgress > 100) {
        setBuffProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setBuffProgress(buffProgress + diff);
        setBuffer(buffProgress + diff + diff2);
      }
    };
  }, [buffProgress]);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <Box sx={{ position: "relative", display: "inline-flex", width:"fit-content" }}>
        <CircularProgress variant='determinate' value={progress} />
        <Box sx={{ top: 0,left: 0,bottom: 0,right: 0, position: "absolute",display: "flex",alignItems: "center", justifyContent: "center" }}>
        <Typography variant='caption' component='div' color='text.secondary'>
            {${Math.round(buffProgress)}%}
        </Typography>
        </Box>
    </Box>

    <LinearProgress variant="determinate" value={progress} color="secondary" />
    
    <CircularProgress variant="determinate" value={progress} color="error" />
    
    <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="buffer" value={Math.round(buffProgress)} valueBuffer={buffer} color="success" />
        </Box>
        <Box sx={{ minWidth: 35 }}>
            <Typography variant='body2' color='text.secondary'> {${Math.round(
              buffProgress
            )}%}</Typography>
        </Box>
    </Box>
    `;
      return (
        <Stack width={"100%"} spacing={2}>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              width: "fit-content",
            }}>
            <CircularProgress variant='determinate' value={buffProgress} />
            <Box
              sx={{
                textAlign: "center",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Typography variant='caption' color='text.secondary'>
                {`${Math.round(buffProgress)}%`}
              </Typography>
            </Box>
          </Box>
          <LinearProgress
            variant={"determinate"}
            value={Math.round(buffProgress)}
            color={"secondary"}
          />
          <CircularProgress
            variant={"determinate"}
            value={Math.round(buffProgress)}
            color={"error"}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant={"buffer"}
                value={Math.round(buffProgress)}
                valueBuffer={buffer}
                color={"success"}
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant='body2' color='text.secondary'>{`${Math.round(
                buffProgress
              )}%`}</Typography>
            </Box>
          </Box>
        </Stack>
      );
    } else if (type === "B") {
      data = `
    <ProgressBar label={${Math.round(
      buffProgress
    )}%} striped variant="success" now={${Math.round(buffProgress)}} />
    <ProgressBar animated label={${Math.round(
      buffProgress
    )}%} variant="danger" now={${Math.round(buffProgress)}} />
    
    <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={10} key={2} />
        <ProgressBar animated variant="danger" now={10} key={3} />
    </ProgressBar>
    `;
      return (
        <Stack width={"100%"} spacing={2}>
          <Boot.ProgressBar
            label={`${Math.round(buffProgress)}%`}
            striped
            variant={"info"}
            now={Math.round(buffProgress)}
          />
          <Boot.ProgressBar
            animated
            label={`${Math.round(buffProgress)}%`}
            variant={"danger"}
            now={Math.round(buffProgress)}
          />
          <Boot.ProgressBar>
            <Boot.ProgressBar striped variant={"success"} now={35} key={1} />
            <Boot.ProgressBar variant={"warning"} now={10} key={2} />
            <Boot.ProgressBar animated variant={"danger"} now={10} key={3} />
          </Boot.ProgressBar>
        </Stack>
      );
    }
  };

  const getContent = useCallback(() => {
    return descContent.defaultText;
  }, []);

  return (
    <div id={id}>
      <DescBox heading={"Animation & Labels"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default AnimationLabels;
