import React, { useState } from 'react';
import { AddCircle, AddCircleOutline, Delete } from '@mui/icons-material';
import { Chip, Button, Avatar } from '@mui/material';

export default function MatericalChipIcon() {
  const [showChip, setShowChip] = useState(true);
  const [showChip2, setShowChip2] = useState(true);

  const handleDelete = () => {
    setShowChip(false);
  };
  const handleDelete2 = () => {
    setShowChip2(false);
  };

  return (
    <>
      <Chip
        clickable
        className={'m-1'}
        icon={<AddCircle />}
        label={'Add Item'}
        color={'primary'}
      />
      <Chip
        clickable
        className={'m-1'}
        icon={<AddCircleOutline />}
        label={'Add Item'}
        variant={'outlined'}
        color={'success'}
      />
      <Chip
        clickable
        className={'m-1'}
        avatar={<Avatar>{'M'}</Avatar>}
        label={'Avatar'}
        color={'secondary'}
      />
      {showChip ? (
        <Chip
          className={'m-1'}
          deleteIcon={<Delete />}
          label={'Delete Chip'}
          onDelete={handleDelete}
          variant={'filled'}
          color={'error'}
        />
      ) : (
        <Button
          onClick={() => setShowChip(true)}
          variant={'contained'}
          color={'success'}
          size={'small'}
        >
          {'Show'}
        </Button>
      )}
      {showChip2 ? (
        <Chip
          className={'m-1'}
          label={' Default Delete Chip'}
          onDelete={handleDelete2}
          color={'primary'}
        />
      ) : (
        <Button
          onClick={() => setShowChip2(true)}
          variant={'contained'}
          color={'success'}
          size={'small'}
        >
          {'Show Default'}
        </Button>
      )}
    </>
  );
}
