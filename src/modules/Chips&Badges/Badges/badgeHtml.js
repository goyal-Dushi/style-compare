export const htmlAlignContent = {
  M: `
      <Badge max={100} color='secondary' badgeContent={120} > 
            <Mail/> 
      </Badge> 
      <Badge max={50} color='secondary' badgeContent={44} anchorOrigin={{vertical:'bottom', horizontal:'right'}} > 
           <Mail/> 
       </Badge> 
      <Badge badgeContent={0} color='secondary' showZero anchorOrigin={{vertical:'bottom', horizontal:'left'}}> 
           <Mail/> 
      </Badge> 
      <Badge badgeContent={0} color='secondary' anchorOrigin={{vertical:'top', horizontal:'left'}} > 
           <Mail/> 
      </Badge> 
      `,
  B: `
      <Button variant='info' style='position:relative'> 
              Some Emails 
          <Badge style='position: absolute, top: -10px, right: -25px' bg='success' text='danger' > 
              99+ 
          </Badge> 
      </Button> 
      <Button variant='danger' style= position: relative'> 
              Spam 
          <Badge bg='dark' text='danger' style= 'position: absolute, top: 30px, bottom: -15px, right: -25px' > 
              99+ 
          </Badge> 
      </Button> 
      `,
};
