import { AddCircle, AddCircleOutline, Delete } from "@mui/icons-material";
import { Chip, Button, Avatar } from "@mui/material";
import * as Boot from "react-bootstrap";
import React, { useCallback, useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DescBox from "../../../components/DescBox";
import { content, html } from "./chips.json";
import { descContent } from "../../common.json";

function IconChips({ id }) {
  const [type, setType] = useState("M");
  const [showChip, setShowChip] = useState(true);
  const [showChip2, setShowChip2] = useState(true);

  let data;
  const handleDelete = () => {
    setShowChip(false);
  };
  const handleDelete2 = () => {
    setShowChip2(false);
  };

  const getHTML = () => {
    if (type === "M") {
      data = html.icons.M;
      return (
        <>
          <Chip
            clickable
            icon={<AddCircle />}
            label={"Add Item"}
            color={"primary"}
          />
          <Chip
            clickable
            icon={<AddCircleOutline />}
            label={"Add Item"}
            variant={"outlined"}
            color={"success"}
          />
          <Chip
            clickable
            avatar={<Avatar>{"M"}</Avatar>}
            label={"Avatar"}
            color={"secondary"}
          />
          {showChip ? (
            <Chip
              deleteIcon={<Delete />}
              label={"Delete Chip"}
              onDelete={handleDelete}
              variant={"filled"}
              color={"error"}
            />
          ) : (
            <Button
              onClick={() => setShowChip(true)}
              variant={"contained"}
              color={"success"}
              size={"small"}>
              {"Show"}
            </Button>
          )}
          {showChip2 ? (
            <Chip
              label={" Default Delete Chip"}
              onDelete={handleDelete2}
              color={"primary"}
            />
          ) : (
            <Button
              onClick={() => setShowChip2(true)}
              variant={"contained"}
              color={"success"}
              size={"small"}>
              {"Show Default"}
            </Button>
          )}
        </>
      );
    } else if (type === "B") {
      data = html.icons.B;
      return (
        <>
          <Boot.Badge pill bg={"success"} className={"fs-5"}>
            <i className={"bi bi-check-circle-fill"}></i> {"Success "}
          </Boot.Badge>
          {showChip ? (
            <Boot.Badge pill className={"fs-5"} bg={"danger"}>
              {"Delete "}
              <i className={"bi bi-trash-fill"} onClick={handleDelete}></i>
            </Boot.Badge>
          ) : (
            <Boot.Button
              onClick={() => setShowChip(true)}
              variant={"primary"}
              size={"sm"}>
              {"Show"}
            </Boot.Button>
          )}
        </>
      );
    }
  };

  const getContent = useCallback(() => {
    switch (type) {
      case "M":
        return content.icons.M;
      case "B":
        return content.icons.B;
      default:
        return descContent.defaultText;
    }
  }, [type]);

  return (
    <div id={id}>
      <DescBox heading={"Icon Chips/Chip Actions"} content={getContent()} />
      <StyleToggleNav setStyleType={setType} />
      <DisplayBox> {getHTML()} </DisplayBox>
      <CodeBox snippet={data} />
    </div>
  );
}
export default IconChips;
