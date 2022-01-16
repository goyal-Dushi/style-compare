import React, { useCallback } from "react";
import { useState } from "react";
import { Stack, LinearProgress, CircularProgress } from "@mui/material";
import * as Boot from "react-bootstrap";
import CodeBox from "../../components/CodeBox";
import DescBox from "../../components/DescBox";
import DisplayBox from "../../components/DisplayBox";
import StyleToggleNav from "../../components/StyleToggleNav";
const { descContent } = require("../common.json");

function TypesColors({ id }) {
  const [type, setType] = useState("M");

  let data;
  const getHTML = () => {
    if (type === "M") {
      data = `
    <CircularProgress color='secondary' />
    <CircularProgress color='success' />
    <LinearProgress color='info' />
    <LinearProgress color='error' />
    <LinearProgress color='warning' />
    <LinearProgress />
    `;
      return (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <CircularProgress color={"secondary"} />
            <CircularProgress color={"success"} />
            <LinearProgress color={"info"} />
            <LinearProgress color={"error"} />
            <LinearProgress color='warning' />
            <LinearProgress />
          </Stack>
        </>
      );
    } else if (type === "B") {
      data = `
    <ProgressBar now={40} variant="success" />
    <ProgressBar now={50} variant="info" />
    <ProgressBar now={60} variant="danger" />
    <ProgressBar now={70} variant="warning" />
    <ProgressBar now={35} />
    `;
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Boot.ProgressBar now={40} variant={"success"} />
          <Boot.ProgressBar now={50} variant={"info"} />
          <Boot.ProgressBar now={60} variant={"danger"} />
          <Boot.ProgressBar now={70} variant={"warning"} />
        </Stack>
      );
    }
  };

  const getContent = useCallback(() => {
    return descContent.defaultText;
  }, []);

  return (
    <div id={id}>
      <DescBox heading={"Types & Colors"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}

export default TypesColors;
