export const htmlColor = {
  M: `
    <Alert color={'info'}> Info Color Alert </Alert> 
    <Alert color={'warning'}> Warning Color Alert </Alert> 
    <Alert color={'error'}> Error Color Alert </Alert> 
    <Alert color={'success'}> Color Success </Alert> 
    <Alert severity={'info'}> Info Severity Alert </Alert> 
    <Alert severity={'warning'}> Warning Severity Alert </Alert>
    <Alert severity={'error'}> Error Severity Alert </Alert>  
    <Alert > Default success Alert </Alert>
    `,
  B: `
    <Alert> Primary Default </Alert>
    <Alert variant={'warning'} > 
        <i className={'bi-exclamation-triangle-fill me-2'}></i> 
        Warning Alert 
    </Alert>
    <Alert variant={'info'} > 
        <i className={'bi-info-lg me-2'}></i> 
        Info Alert 
    </Alert> 
    <Alert variant={'success'} >
         <i className={'bi-check2-circle me-2'}></i> 
         Success Alert 
    </Alert>
    <Alert variant={'secondary'} > Secondary Alert </Alert>
    <Alert variant={'danger'} > Danger Alert </Alert> 
    <Alert variant={'light'} > Light Alert </Alert> 
    <Alert variant={'dark'} > Dark Alert </Alert>
    `,
};

export const htmlContent = {
  M: `
    <Alert severity='error'> 
        <AlertTitle> Error Title </AlertTitle> 
        This is an error alert — <strong>error occured</strong> 
    </Alert> 
    <Alert color='warning'>
        <AlertTitle>Warning Title</AlertTitle>
        This is a warning alert — <strong>warning!</strong>
    </Alert>
    `,
  B: `
    <Alert>
        <Alert.Heading variant='success' > Success Alert! </Alert.Heading> 
            <p> This is Success alert -</p><Alert.Link> success link </Alert.Link> 
    </Alert> 
    <Alert> 
        <Alert.Heading variant='info' > Info Alert! </Alert.Heading>
            <p> This is Info alert -</p><Alert.Link> info link </Alert.Link> 
    </Alert>
    `,
};

export const htmlDismiss = {
  M: `
    {open ? ( <Alert onClose={() => { setOpen(false) }}> Dismissible Alert </Alert> ) : null} 
    <Button className='mx-2' variant='outlined' onClick={() => setOpen(true)} color='primary'> 
       Open Alert 
    </Button> 
    open2 ? ( 
        <Alert action={ <Button color='inherit' size='small' onClick={() => setOpen2(false)}> CLOSE </Button> }> 
        Dismissible Alert 
    </Alert> 
    ) : null} 
    <Button className='mx-2' variant='outlined' onClick={() => setOpen2(true)} color='primary'> 
        Open Alert 
    </Button> 
    `,
  B: `
    {open ? ( 
        <Alert variant='danger' onClose={() => setOpen(false)} dismissible > 
             <Alert.Heading> Oh snap! You got an error! </Alert.Heading> 
              <p> Change this and that and try again. Duis mollis, est non commodo </p> 
        </Alert> 
    ) : null} 
    <Button onClick={() => { setOpen(true) }} variant='outline-primary mx-2' size='sm'> 
        OPEN 
    </Button> 
    `,
};

export const htmlVariants = {
  M: `
    <Alert> Default Standard variant </Alert> 
    <Alert variant='filled' severity='info'> Filled </Alert> 
    <Alert variant='outlined' severity='warning'> Outlined </Alert> 
    `,
  B: `
    <Alert> Default Bootstrap Alert </Alert> 
    <Alert style='border: '2px solid #084298', background:'none'' variant='outline-success' > Success Outline </Alert>  
    `,
};
