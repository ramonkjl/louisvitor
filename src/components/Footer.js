import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 4rem 0 2rem;
    background-color: #2A2827;
    opacity: 1;
    width: 100vw;

div.social{
    margin-top: 20px;
}

div.social a{
    padding: 0.2rem;
}
`;

function Footer() {
    return (
        <FooterContainer>
            <div class="copyright"><small>&copy; 2021 - Ramon Nunes</small></div>
            <div class="social">
                <a href="https://www.facebook.com/ramon.barbado/" target="_blank"><img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Facebook-icon.png" /></a>
                <a href="https://www.instagram.com/ramon.nunest/" target="_blank"><img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Instagram-icon.png" /></a>
                <a href="https://www.linkedin.com/in/ramon-nunes-08b038157/" target="_blank"><img src="https://icons.iconarchive.com/icons/icons8/ios7/24/Logos-Linkedin-icon.png" /></a>
            </div>
        </FooterContainer>
    )
}

export default Footer;