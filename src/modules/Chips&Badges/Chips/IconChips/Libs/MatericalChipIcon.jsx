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
        icon={<AddCircle />}
        label={'Add Item'}
        color={'primary'}
      />
      <Chip
        clickable
        icon={<AddCircleOutline />}
        label={'Add Item'}
        variant={'outlined'}
        color={'success'}
      />
      <Chip
        clickable
        avatar={<Avatar>{'M'}</Avatar>}
        label={'Avatar'}
        color={'secondary'}
      />
      {showChip ? (
        <Chip
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
