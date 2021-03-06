import { 
  DISABLE_BALANCE_ON_ADD, 
  DISABLE_BALANCE_ON_EDIT, 
  ALLOW_REGISTRATION 
} from './types';


export const setDisableBalanceOnAdd = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle checkbox
  settings.disableBalanceOnAdd = ! settings.disableBalanceOnAdd;

  //Persist to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
}

export const setDisableBalanceOnEdit = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle checkbox
  settings.disableBalanceOnEdit = ! settings.disableBalanceOnEdit;

  //Persist to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  }
}

export const setAllowRegistration = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle checkbox
  settings.allowRegistration = ! settings.allowRegistration;

  //Persist to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  }
}