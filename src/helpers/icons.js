import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusSquare,
    faPhoneVolume,
    faAt, 
    faMapMarkedAlt,
    faEnvelope, faLock

} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
  
const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusSquare, faPhoneVolume, faAt, faMapMarkedAlt, faEnvelope, faLock);
  };
  
export default Icons;