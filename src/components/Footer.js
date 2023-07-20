import React from "react";


import {
  
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";

import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyle = makeStyles({
  root: {
    position: 'static',  
    margin: 'auto',
    marginTop: '5%',
    background: 'linear-gradient(45deg, #db7c26 30%, #f6aa1c 90%)',
    color: '#e9d8a6',
    height: '60px'
},
footer: {
  background: 'inherit'
}
});

export const Footer = () => {
  const classes = useStyle();
  return (
    <footer>
      <BottomNavigation
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHub />}
          href="https://github.com/sarah-jensen"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/sarahjensen-la/"
        />
        <BottomNavigationAction
          label="Stack Overflow"
          icon={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-stack-overflow"
                viewBox="0 0 16 16"
              >
                <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
                <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
              </svg>
            </SvgIcon>
          }
          href="https://stackoverflow.com/users/22170531/sarah-jensen"
        />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;