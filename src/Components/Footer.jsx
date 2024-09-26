import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className=".wrapper">
        	<a href="https://www.facebook.com/profile.php?id=61564880386789" className="icon facebook" target="_blank">
        		<div className="tooltip">Facebook</div>
        		<span>
        			<i className="fab fa-facebook-f"></i>
        		</span>
        	</a>
        	<a href="https://wa.me/584128757403?text=Hola,%20buenas%20tardes" className="icon whatsapp" target="_blank">
        		<div className="tooltip">04128757403</div>
        		<span>
        			<i className="fab fa-whatsapp"></i>
  				</span>
        	</a>
        	<a href="https://wa.me/584129462638?text=Hola,%20buenas%20tardes" className="icon whatsapp" target="_blank">
        		<div className="tooltip">04129462638</div>
        		<span>
        			<i className="fab fa-whatsapp"></i>
  				</span>
        	</a>
        	<a href="https://www.tiktok.com/@escueladonfern" className="icon tiktok" target="_blank">
        		<div className="tooltip">TikTok</div>
        		<span>
        			<i className="fab fa-tiktok"></i>
  				</span>
        	</a>
        	<a href="mailto:ueerdonfernandodepenalver@gmail.com" className="icon mail" target="_blank">
        		<div className="tooltip">ueerdonfernandodepenalver@gmail.com</div>
        		<span>
        			<i className="fa fa-mail-bulk"></i>
  				</span>
        	</a>
        </div>
		</footer>
	);
};
export default Footer;