export const htmlColors = {
  M: `
    <Button variant='contained' color='primary' > Primary Default </Button> 
    <Button variant='contained' color='secondary' > Secondary </Button> 
    <Button variant='contained' color='success' > Success </Button> 
    <Button variant='contained' color='error' > Error </Button> 
    <Button variant='contained' color='info' > Info </Button> 
    <Button variant='contained' color='warning' > Warning </Button>
    `,
  B: `
    <Button variant='primary' > Primary Default </Button> 
    <Button variant='secondary' > Secondary </Button> 
    <Button variant='success' > Success </Button> 
    <Button variant='danger' > Danger </Button> 
    <Button variant='warning' > Warning </Button> 
    <Button variant='info' > Info </Button> 
    <Button variant='light' > Light </Button> 
    <Button variant='dark' > Dark </Button> 
    `,
};

export const htmlDisabled = {
  M: `
    <Button disabled variant='contained' color='primary' > Disabled </Button> 
    <Button disabled variant='outlined' color='primary' > Disabled </Button> 
    <Button disabled color='primary' > Disabled </Button> 
    `,
  B: `
    <Button variant='primary' size='lg' disabled> Disabled </Button> 
    <Button variant='outline-primary' size='lg' disabled> Disabled </Button> 
    `,
};

export const htmlSizeVariants = {
  M: `
    <Button variant='contained' color='primary' size='large'> Contained Large Button </Button> 
    <Button variant='outlined' color='primary' size='medium'> Outlined Medium Button </Button> 
    <Button color='primary' size='small'> Default variant Text & Small Button </Button>
    `,
  B: `
    <Button size='lg'> Default Primary Button & Large size </Button> 
    <Button variant='outline-secondary' size='sm'> Outlined Small Button </Button> 
    `,
};

export const htmlWithIcons = {
  M: `   
    <Button endIcon={<SendIcon />} variant='contained'> Send </Button> 
    <Button startIcon={<PrintIcon />} variant='outlined' color='info'> Print </Button> 
    `,
  B: `
    <Button variant='primary' > 
        Send <i className='bi-send'></i> 
    </Button> 
    <Button variant='outline-info'> 
        <i className='bi-printer'></i> Print 
    </Button> 
    `,
};
