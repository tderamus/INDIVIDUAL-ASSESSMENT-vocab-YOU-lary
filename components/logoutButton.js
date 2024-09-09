import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  clearDom();
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
