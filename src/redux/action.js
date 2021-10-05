import {
    SELECT_MAIL,
    SET_STARRED,
    SELECT_ALL_MAILS,
    DELETE_MAIL,
    FILTER_MAIL_FOLDER,
    SEARCH_MAIL
} from './actionTypes';


export const selectMail = (id) => ({
    type: SELECT_MAIL,
    payload: id
});

export const selectAllMails = () => ({
    type: SELECT_ALL_MAILS,
});

export const StarEmail = (id) => ({
    type: SET_STARRED,
    payload: id
});

export const deleteEmail = () => ({
    type: DELETE_MAIL
});

export const filterMailFolder = (mailfolder) => ({
    type: FILTER_MAIL_FOLDER,
    payload:mailfolder
});

export const searchMails = (search) => ({
    type: SEARCH_MAIL,
    payload:search
});


