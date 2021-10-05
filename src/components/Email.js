import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Search,
    Check,
    Folder,
    Edit2,
    Info,
    Trash,
    Tag,
    Mail,
    Star,
    Menu
  } from "react-feather"
  import {
    FormGroup,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Media,
  } from "reactstrap"

  import {
    selectMail,
    StarEmail,
    deleteEmail
  } from "../redux/action";

import { Avatar, Image } from 'antd';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Email = () => {
    const {mails,filteredMails,selectedEmails} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div >
          <SearchBar />
          <Trash onClick={e => {
                            dispatch(deleteEmail())
                            e.stopPropagation()
                            }} />
                            <div className="container">
                            <Navbar />
            <div className="box">
            {filteredMails.length > 0 ? (
            filteredMails.map((mail, index) => {
            return (
                <div className="item" key={mail.id}>
                    <Media className="pr-50" tag="div" left>
                        {/* <div className="avatar">
                        <img src={process.env.PUBLIC_URL+"/assets/img/portrait/small/avatar-s-1.jpg"} />
                        </div> */}
                        <div className="user-action">
                        <div>
                        <input
                            color="primary"
                            className="user-checkbox"
                            type="checkbox"
                            icon={<Check className="vx-icon" size={12} />}
                            label={""}
                            value={selectedEmails.includes(mail.id)}
                            size="sm"
                            onClick={e => {
                            dispatch(selectMail(mail.id))
                            e.stopPropagation()
                            }}
                            onChange={e => e.stopPropagation()}
                        />
                        </div>
                        <div className="favorite">
                            <Star
                            size={18}
                            fill={mail.isStarred ? "#FF9F43" : "transparent"}
                            stroke={mail.isStarred ? "#FF9F43" : "#626262"}
                            onClick={e => {
                            dispatch(StarEmail(mail.id))
                                e.stopPropagation()
                            }}
                            />
                        </div>
                        </div>
                    </Media>
                <div className="user-details flex-wrap">
                  {/* <div className="avatar"> */}
                        {/* <img src={mail.img} /> */}
                        {mail.img ?
                    <Avatar size={64}
                        src={<Image src={mail.img} />}
                      />: ''}
                  {/* </div> */}
                  <div className="mail-items">
                    <h5 className="text-bold-600 mb-25 ">{mail.sender_name}</h5>
                    <span className="text-truncate">{mail.subject}</span>
                  </div>
                  <div className="mail-meta">
                    <span className="float-right">
                      {Array.isArray(mail.labels) ? (
                        <React.Fragment>
                          {mail.labels.map(label => {
                            return (
                              <span
                                className={`bullet bullet-${
                                  label === "important"
                                    ? "warning"
                                    : label === "personal"
                                    ? "success"
                                    : label === "private"
                                    ? "danger"
                                    : "primary"
                                } bullet-sm d-none d-md-inline-block mr-1`}
                                key={label}
                              />
                            )
                          })}
                        </React.Fragment>
                      ) : (
                        <span
                          className={`bullet ${mail.labels} bullet-sm mr-1`}
                        />
                      )}
                      <span className="mail-date">{mail.day}</span>
                    </span>
                  </div>
                </div>
                    <div className="mail-message">
                        <p className="list-group-item-text truncate mb-0">
                            {mail.message}
                        </p>
                </div>
                </div>
            )})) :
            null }
            </div>
            </div>
        </div>
    );
};

export default Email;