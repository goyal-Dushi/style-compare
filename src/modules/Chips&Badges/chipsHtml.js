export const htmlChipColorSize = {
  M: `
    <Chip label='Default Chip' /> 
    <Chip label='Primary' color='primary' variant='outlined' /> 
    <Chip label='Secondary' color='secondary' variant='outlined' /> 
    <Chip label='Error' color='error' variant='outlined/ /> 
    <Chip label='Info' color='info' size='small' variant='filled' /> 
    <Chip label='Success' color='success' size='small' /> 
    <Chip label='Warning' color='warning' size='small' /> 
    `,
  B: `
    <Badge pill> Primary Default </Badge>
    <Badge pill bg='success' className='fs-1' > Success </Badge> 
    <Badge pill bg='danger' className='fs-2' > Danger </Badge> 
    <Badge pill bg='warning' className='fs-3' > Warning! </Badge> 
    <Badge pill bg='info' className='fs-4' > Info </Badge>
    <Badge pill bg='light' className='fs-5' > Light </Badge> 
    <Badge pill bg='dark' className='fs-6' > Dark </Badge>
    `,
};

export const htmlChipIcons = {
  M: `
    <Chip clickable icon={<AddCircle />} label='Add Item' color='primary' /> 
    <Chip clickable icon={<AddCircleOutline />} label='Add Item' variant='outlined' color='success' /> 
    <Chip clickable avatar={<Avatar>M</Avatar>} label='Avatar' color='primary' /> 
    <Chip deleteIcon={<Delete />} label='Delete Chip' onDelete={handleDelete} variant='filled' color='error' /> 
    <Chip label='Default Delete Chip' onDelete={handleDelete2} color='primary' /> 
    `,
  B: `
    <Badge pill bg='success' className='fs-5'><i className='bi bi-check-circle-fill'></i> Success! </Badge> 
    <Badge pill bg='danger' className='fs-5'> Delete! <i className='bi bi-trash-fill' onClick={() => handleDelete} ></i> </Badge>
    `,
};
