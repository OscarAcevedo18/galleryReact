import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return (
        <>
    <footer>
        {props.footer}
        <BsFacebook/>  
        <BsLinkedin/>  
        <BsInstagram/> 
        <Button variant="warning">More Info Here</Button>{' '}
    </footer>
    </>
    );
};
export default Footer;