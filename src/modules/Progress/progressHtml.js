export const htmltypesColor = {
  M: `
    <CircularProgress color='secondary' />
    <CircularProgress color='success' />
    <LinearProgress color='info' />
    <LinearProgress color='error' />
    <LinearProgress color='warning' />
    <LinearProgress />
    `,
  B: `
    <ProgressBar now={40} variant="success" />
    <ProgressBar now={50} variant="info" />
    <ProgressBar now={60} variant="danger" />
    <ProgressBar now={70} variant="warning" />
    <ProgressBar now={35} />
    `,
};

export const htmlanimationLabels = {
  M: `
    <Box sx={{ position: "relative", display: "inline-flex", width:"fit-content" }}>
    <CircularProgress variant='determinate' value={progress} />
    <Box sx={{ top: 0,left: 0,bottom: 0,right: 0, position: "absolute",display: "flex",alignItems: "center", justifyContent: "center" }}>
    <Typography variant='caption' component='div' color='text.secondary'>
        {variable to show progress}
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
            <Typography variant='body2' color='text.secondary'> {variable to show progress} </Typography>
        </Box>
    </Box>
    `,
  B: `
    <ProgressBar label={variable to show progress} striped variant="success" now={12} />
    <ProgressBar animated label={variable to show progress} variant="danger" now={12} />
    
    <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={10} key={2} />
        <ProgressBar animated variant="danger" now={10} key={3} />
    </ProgressBar>
    `,
};
