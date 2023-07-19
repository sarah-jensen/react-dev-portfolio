//Menu dropdown

// const [anchorEl, setAnchorEl] = useState(null);
  
// const handleClick = (e) => {
//   setAnchorEl(e.currentTarget);
// };

// const handleClose = (page) => {
//   handlePageChange(page);
//   setAnchorEl(null);
// };

// <Hidden smUp>
//             <div>
//               <Button
//                 aria-controls="nav-menu"
//                 aria-haspopup="true"
//                 onClick={handleClick}
//               >
//                 <Menu />
//               </Button>
//               <Menu
//                 id="nav-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem
//                   className={
//                     currentPage === "AboutMe"
//                       ? `${classes.selected}`
//                       : `${classes.inactive}`
//                   }
//                   onClick=
//                     {handleClose("AboutMe")}
//                 >
//                   About Me
//                 </MenuItem>

//                 <MenuItem
//                   className={
//                     currentPage === "Portfolio"
//                       ? `${classes.selected}`
//                       : `${classes.inactive}`
//                   }
//                   onClick={handleClose("Portfolio")}
//                 >
//                   Portfolio
//                 </MenuItem>

//                 <MenuItem
//                   className={
//                     currentPage === "Resume"
//                       ? `${classes.selected}`
//                       : `${classes.inactive}`
//                   }
//                   onClick=
//                     {handleClose("Resume")}

//                 >
//                   Resum e
//                 </MenuItem>

//                 <MenuItem
//                   className={
//                     currentPage === "Contact"
//                       ? `${classes.selected}`
//                       : `${classes.inactive}`
//                   }
//                   onClick={handleClose("Contact")}
//                 >
//                   Contact
//                 </MenuItem>
//               </Menu>
//             </div>
//           </Hidden>