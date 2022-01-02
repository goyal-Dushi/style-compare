import { AddCircle, AddCircleOutline, Delete } from "@mui/icons-material";
import { Chip, Button, Avatar } from "@mui/material";
import * as Boot from "react-bootstrap";
import React, { useState } from "react";
import CodeBox from "../../../components/CodeBox";
import DisplayBox from "../../../components/DisplayBox";
import StyleToggleNav from "../../../components/StyleToggleNav";
import DescBox from "../../../components/DescBox";

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
    data = `
    <Chip clickable icon={<AddCircle />} label="Add Item" color="primary" />
    <Chip clickable icon={<AddCircleOutline />} label="Add Item" variant="outlined" color="success" />
    <Chip clickable avatar={<Avatar>M</Avatar>} label="Avatar" color="primary" />
    <Chip deleteIcon={<Delete />} label="Delete Chip" onDelete={handleDelete} variant="filled" color="error" />
    <Chip label=" Default Delete Chip" onDelete={handleDelete2} color="primary" />
    `;
    if (type === "M") {
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
      data = `
    <Badge pill bg="success" className="fs-5"><i className="bi bi-check-circle-fill"></i> Success! </Badge>
    <Badge pill bg="danger" className="fs-5"> Delete! <i className="bi bi-trash-fill" onClick={() => handleDelete} ></i> </Badge>
    `;
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

  const getContent = () => {
    if (type === "M") {
      return (
        <>
          <b>Material</b> has properties/attributes namely
          <span className='codeSnippet'>icon</span>,
          <span className='codeSnippet'>deleteIcon</span> and{" "}
          <span className='codeSnippet'>avatar</span>.
          <span className='codeSnippet'>icon</span> property takes an material
          icon component import from
          <span className='codeSnippet'>@mui/icons-material</span> library and
          by default is placed at the start of the chip, whereas, the
          <span className='codeSnippet'>deleteIcon</span> places the icon
          component at the end of the chip.
          <span className='codeSnippet'>avatar</span> is used if you want to
          place your own media files in the chip. Also, if the
          <span className='codeSnippet'>onDelete</span> property is specified,
          only then the deleteIcon is shown and by default a
          <span className='codeSnippet'>cross</span> icon is displayed by
          material. You could also set
          <span className='codeSnippet'>clickable</span> property to the chip to
          have the ripple effect provided by Material.
        </>
      );
    } else if (type === "B") {
      return (
        <>
          <b>Bootstrap</b> dosen't provide any property/attribute for its
          component to place icon. But, you can use the
          <span className='codeSnippet'>{"<i></i>"}</span> tags to place
          bootstrap icons at your desired position as shown below.
        </>
      );
    }
  };

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
