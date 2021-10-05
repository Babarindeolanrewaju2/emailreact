import React from 'react';
import { Label, Input } from 'reactstrap';
import {
    searchMails
  } from "../redux/action";
import { useDispatch} from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="inputStyle">
        <Label for="exampleTime">Search</Label>
        <Input
          type="search"
          name="time"
          id="exampleTime"
          placeholder="search the mail"
          onChange={e => {
            dispatch(searchMails(e.target.value))
            e.stopPropagation()
            }}
        />
        </div>
    );
};

export default SearchBar;