import React from 'react';
import { NavItem, NavLink, Nav } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPaperPlane, faPencilRuler, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import {
  filterMailFolder
} from "../redux/action";
import { useDispatch} from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const selectMailFolder=mailfolder=>{
      dispatch(filterMailFolder(mailfolder))
    }

    return (
        <div>
             <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        {/* <p>Dummy Heading</p> */}
        <NavItem>
          <NavLink onClick={e => {
                            selectMailFolder("inbox")
                            e.stopPropagation()
                            }}>
          <FontAwesomeIcon icon={faInbox}  className="mr-2"/>
            Inbox
          </NavLink>
        </NavItem>
        {/* <SubMenu title="Pages" icon={faPaperPlane} items={submenus[1]} /> */}
        <NavItem>
          <NavLink onClick={e => {
                            selectMailFolder("sent")
                            e.stopPropagation()
                            }}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Sent
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={e => {
                            selectMailFolder("draft")
                            e.stopPropagation()
                            }}>
            <FontAwesomeIcon icon={faPencilRuler} className="mr-2" />
            Draft
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={e => {
              selectMailFolder("trash")
              e.stopPropagation()
              }}>
            <FontAwesomeIcon icon={faTrashRestore} className="mr-2" 
            />
            Trash
          </NavLink>
        </NavItem>
      </Nav>
    </div>
        </div>
    );
};

export default Navbar;